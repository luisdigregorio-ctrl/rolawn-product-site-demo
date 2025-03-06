
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart, Share2, Info, Star, AlertCircle } from 'lucide-react';
import { toast } from "sonner";
import Layout from '@/components/Layout';
import { getProductById, getProductsByCategory, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        
        // Get related products from the same category
        const related = getProductsByCategory(fetchedProduct.category)
          .filter(p => p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      setIsLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    toast.success(`Added ${product?.name} to your cart!`, {
      description: `Quantity: ${quantity}`,
      position: "top-center",
    });
  };
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64">
          <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product Not Found</h2>
          <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/products')}>
            Browse Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/products?category=${product.category}`}>{product.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
            <AspectRatio ratio={1}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_TurfLawnSeedingTopsoil_Bulk-1-e1690383538721.jpg';
                }}
              />
            </AspectRatio>
          </div>
          
          {/* Product Details */}
          <div className="animate-fade-up">
            <Badge className="mb-2 bg-rolawn-green hover:bg-rolawn-green/90">
              {product.category}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">Trusted Quality</span>
            </div>
            
            <div className="mb-4">
              <p className="text-3xl font-bold text-rolawn-green">
                {typeof product.grossPrice === 'number' 
                  ? `£${product.grossPrice.toFixed(2)}` 
                  : product.grossPrice}
              </p>
              {typeof product.netPrice === 'number' && 
               typeof product.grossPrice === 'number' && 
               product.netPrice !== product.grossPrice && (
                <p className="text-sm text-muted-foreground">
                  Net price: £{product.netPrice.toFixed(2)}
                </p>
              )}
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-medium">Size:</p>
                <p className="text-muted-foreground">{product.size}</p>
              </div>
              
              <div>
                <p className="font-medium">Product Code:</p>
                <p className="text-muted-foreground">{product.productCode}</p>
              </div>
              
              {product.description && (
                <div>
                  <p className="font-medium">Description:</p>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="rounded-none border-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center w-12">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="rounded-none border-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                className="flex-1 bg-rolawn-green hover:bg-rolawn-green/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Info className="mr-2 h-4 w-4" /> Product Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Product Specifications</DialogTitle>
                    <DialogDescription>
                      Detailed information about {product.name}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Product Code</h4>
                      <p>{product.productCode}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Size</h4>
                      <p>{product.size}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Category</h4>
                      <p>{product.category}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Description</h4>
                      <p>{product.description || "No description available."}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="my-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct, index) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedProduct.imageUrl} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).src = 'https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_TurfLawnSeedingTopsoil_Bulk-1-e1690383538721.jpg';
                        }}
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold line-clamp-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {typeof relatedProduct.grossPrice === 'number' 
                          ? `£${relatedProduct.grossPrice.toFixed(2)}` 
                          : relatedProduct.grossPrice}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
