
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Search, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, productCategories, getProductsByCategory, getUniqueProductNames } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) ||
        product.productCode.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);
  
  // Update URL when category changes
  useEffect(() => {
    const newUrl = selectedCategory === 'all' 
      ? '/products' 
      : `/products?category=${selectedCategory}`;
    
    window.history.replaceState(null, '', newUrl);
  }, [selectedCategory]);
  
  // Set category from URL parameter on initial load
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  const uniqueProductNames = selectedCategory !== 'all' 
    ? getUniqueProductNames(selectedCategory) 
    : [];
  
  return (
    <Layout>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link to="/">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Products</span>
        {selectedCategory !== 'all' && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{selectedCategory}</span>
          </>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === 'all' ? "default" : "outline"}
                    onClick={() => setSelectedCategory('all')}
                    className="w-full justify-start"
                  >
                    All Products
                  </Button>
                  
                  {productCategories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="w-full justify-start"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 space-y-6 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Button
                variant={selectedCategory === 'all' ? "default" : "outline"}
                onClick={() => setSelectedCategory('all')}
                className="w-full justify-start"
              >
                All Products
              </Button>
              
              {productCategories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="w-full justify-start"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {uniqueProductNames.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="text-lg font-semibold mb-4">Product Types</h3>
              <div className="space-y-2">
                {uniqueProductNames.map(name => (
                  <div key={name} className="flex items-center">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto"
                      onClick={() => setSearchQuery(name)}
                    >
                      {name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[180px] shrink-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  {productCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter to find what you're looking for.</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).src = 'https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_TurfLawnSeedingTopsoil_Bulk-1-e1690383538721.jpg';
                        }}
                      />
                      <Badge className="absolute top-2 right-2 bg-rolawn-green">
                        {product.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Size: {product.size}</p>
                      <Separator className="my-2" />
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-semibold">
                          {typeof product.grossPrice === 'number' 
                            ? `£${product.grossPrice.toFixed(2)}` 
                            : product.grossPrice}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {product.productCode}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
