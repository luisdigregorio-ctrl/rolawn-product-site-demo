
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { productCategories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const HeroImage = "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-8 md:py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-rolawn-lightgreen hover:bg-rolawn-lightgreen/90">Premium Quality</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-rolawn-darkgray mb-4 tracking-tight">
            The UK's Finest Lawn &amp; Garden Products
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover Rolawn's premium selection of turf, topsoil, and garden products for a perfect outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-rolawn-green hover:bg-rolawn-green/90 text-white animate-fade-up">
              <Link to="/products">Browse Products</Link>
            </Button>
            <Button variant="outline" size="lg" className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <Link to="/contact" className="flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative my-8 overflow-hidden rounded-xl shadow-xl animate-scale-in">
        <img 
          src={HeroImage} 
          alt="Rolawn Premium Turf" 
          className="w-full h-64 md:h-80 object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="text-white p-6">
            <h2 className="text-2xl font-bold">Medallion® Turf</h2>
            <p className="mb-3">Our most popular, premium garden lawn turf</p>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-2 text-sm">Trusted by thousands</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <section className="py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-rolawn-darkgray mb-2">Our Product Categories</h2>
          <p className="text-muted-foreground">Explore our range of premium garden products</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCategories.map((category, index) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:border-rolawn-green/50 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-6 text-center">
                <h3 className="font-semibold text-rolawn-darkgray">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <Separator className="my-8" />
      
      {/* Why Choose Us */}
      <section className="py-8 animate-fade-up">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-rolawn-darkgray mb-2">Why Choose Rolawn?</h2>
          <p className="text-muted-foreground">The UK's leading turf and landscaping supplies provider</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Premium Quality",
              description: "All our products are carefully selected and tested to ensure the highest quality.",
              icon: <Star className="h-8 w-8 text-rolawn-green" />
            },
            {
              title: "Expert Advice",
              description: "Our team of experts is always ready to help you with your garden projects.",
              icon: <CheckCircle className="h-8 w-8 text-rolawn-green" />
            },
            {
              title: "Nationwide Delivery",
              description: "We deliver our products across the UK with our reliable delivery service.",
              icon: <ArrowRight className="h-8 w-8 text-rolawn-green" />
            }
          ].map((item, index) => (
            <div 
              key={item.title} 
              className="bg-white p-6 rounded-lg shadow-md border border-border animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-rolawn-green/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 my-8 bg-rolawn-green/10 rounded-xl">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-rolawn-darkgray mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-muted-foreground mb-8">
            Browse our premium selection of turf, topsoil, and garden products to create your perfect outdoor space.
          </p>
          <Button asChild size="lg" className="bg-rolawn-green hover:bg-rolawn-green/90 text-white">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
