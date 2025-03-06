
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ChevronRight, AlertCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";

const Cart = () => {
  // For this demo, we'll use an empty cart state
  const cartItems: any[] = [];
  
  const handleCheckout = () => {
    toast.success("This is a demo checkout process", {
      description: "In a real app, this would proceed to payment",
    });
  };
  
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Shopping Cart</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border animate-fade-up">
            <div className="flex justify-center mb-4">
              <div className="bg-rolawn-green/10 p-4 rounded-full">
                <ShoppingCart className="h-10 w-10 text-rolawn-green" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Browse our collection and add items to your cart
            </p>
            <Button asChild className="bg-rolawn-green hover:bg-rolawn-green/90">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b last:border-b-0">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 shrink-0">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <Link to={`/product/${item.id}`} className="font-semibold hover:text-rolawn-green">
                            {item.name}
                          </Link>
                          <p className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center">
                            <span className="text-sm mr-2">Qty: {item.quantity}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 h-8">
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>£0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>£0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>£0.00</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold mb-6">
                  <span>Total</span>
                  <span>£0.00</span>
                </div>
                
                <Button 
                  className="w-full bg-rolawn-green hover:bg-rolawn-green/90" 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Shipping costs calculated at checkout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
