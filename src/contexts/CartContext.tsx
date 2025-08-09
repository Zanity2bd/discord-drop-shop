import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/hooks/use-toast'

interface CartItem {
  id: string
  product_id: string
  product_title: string
  product_price: number
  product_image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  loading: boolean
  addToCart: (product: {
    id: string
    title: string
    price: number
    image: string
  }) => Promise<void>
  removeFromCart: (itemId: string) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  // Load cart items when user changes
  useEffect(() => {
    if (user) {
      loadCartItems()
    } else {
      setItems([])
    }
  }, [user])

  const loadCartItems = async () => {
    if (!user) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id)

      if (error) throw error
      setItems(data || [])
    } catch (error) {
      console.error('Error loading cart:', error)
      toast({
        title: "Error",
        description: "Failed to load cart items",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (product: {
    id: string
    title: string
    price: number
    image: string
  }) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to add items to cart",
        variant: "destructive",
      })
      return
    }

    try {
      // Check if item already exists
      const existingItem = items.find(item => item.product_id === product.id)
      
      if (existingItem) {
        await updateQuantity(existingItem.id, existingItem.quantity + 1)
      } else {
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: product.id,
            product_title: product.title,
            product_price: product.price,
            product_image: product.image,
            quantity: 1,
          })
          .select()
          .single()

        if (error) throw error
        
        setItems(prev => [...prev, data])
        toast({
          title: "Added to Cart",
          description: `${product.title} has been added to your cart`,
        })
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      })
    }
  }

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      
      setItems(prev => prev.filter(item => item.id !== itemId))
      toast({
        title: "Removed from Cart",
        description: "Item has been removed from your cart",
      })
    } catch (error) {
      console.error('Error removing from cart:', error)
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      })
    }
  }

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(itemId)
      return
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId)

      if (error) throw error
      
      setItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, quantity } : item
        )
      )
    } catch (error) {
      console.error('Error updating quantity:', error)
      toast({
        title: "Error",
        description: "Failed to update item quantity",
        variant: "destructive",
      })
    }
  }

  const clearCart = async () => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)

      if (error) throw error
      
      setItems([])
      toast({
        title: "Cart Cleared",
        description: "All items have been removed from your cart",
      })
    } catch (error) {
      console.error('Error clearing cart:', error)
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive",
      })
    }
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)

  const value = {
    items,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}