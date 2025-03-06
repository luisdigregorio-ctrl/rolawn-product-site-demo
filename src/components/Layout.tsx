
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Home, Layers, Package, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Products', path: '/products', icon: <Layers className="h-5 w-5" /> },
    { name: 'Cart', path: '/cart', icon: <ShoppingCart className="h-5 w-5" /> },
    { name: 'Contact', path: '/contact', icon: <MessageCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-rolawn-green shadow-md bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-white text-xl">ROLAWN</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-2 rounded-md" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[350px] bg-white">
                <div className="py-6 space-y-6">
                  <div className="px-3">
                    <h2 className="text-2xl font-bold text-rolawn-green mb-6">ROLAWN</h2>
                    <nav className="space-y-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md hover:bg-muted transition-colors",
                            location.pathname === item.path 
                              ? "text-rolawn-green font-semibold" 
                              : "text-gray-700"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-rolawn-lightgreen/10 rounded-lg p-4 border border-rolawn-green/20">
                    <p className="text-sm text-gray-700">Need help with your order?</p>
                    <p className="text-rolawn-green font-semibold mt-1">Call us: 01904 757300</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link to="/cart" className="text-white p-2" aria-label="Cart">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 md:py-6 lg:py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-rolawn-darkgray text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div>
              <h3 className="font-bold text-lg mb-3">ROLAWN</h3>
              <p className="text-sm text-gray-300 max-w-xs">The UK's leading turf and landscaping supplies provider.</p>
            </div>
            
            <div className="space-y-1">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="block text-sm text-gray-300 hover:text-white py-1">
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-sm text-gray-300 mb-1">01904 757300</p>
              <p className="text-sm text-gray-300">info@rolawn.co.uk</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Rolawn Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
