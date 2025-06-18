import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Shield, Truck, Award, Sparkles, Crown, Zap } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface HomePageProps {
  onViewProduct: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewProduct }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Crown,
      title: 'Luxury Craftsmanship',
      description: 'Handcrafted with Swiss precision and Italian finesse'
    },
    {
      icon: Sparkles,
      title: 'Exclusive Technology',
      description: 'Patented biomechanical engineering for elite performance'
    },
    {
      icon: Zap,
      title: 'Instant Transformation',
      description: 'Experience immediate posture enhancement and confidence boost'
    },
    {
      icon: Award,
      title: 'Celebrity Endorsed',
      description: 'Trusted by A-list celebrities and Fortune 500 executives'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      {/* Luxury Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Hero Section - Ultra Luxury */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"
            style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
          />
        </div>

        {/* Floating Luxury Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-lg animate-float-delayed"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          />
          <div 
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-gold-300/30 to-gold-500/30 rounded-full blur-md animate-float-slow"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 max-w-7xl mx-auto">
          {/* Left Content - Ultra Premium */}
          <div className="text-center lg:text-left space-y-8">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center bg-gradient-to-r from-gold-400/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-3 text-sm text-gold-300 mb-6 animate-slideInLeft shadow-2xl">
                <Crown className="w-4 h-4 mr-2 text-gold-400" />
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent font-medium">
                  Exclusively crafted for the elite
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tight">
                <span className="block animate-slideInUp bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                  PERFECT
                </span>
                <span className="block text-gold-400 animate-slideInUp animation-delay-200 drop-shadow-2xl">
                  POSTURE,
                </span>
                <span className="block animate-slideInUp animation-delay-400 bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                  PERFECT LIFE
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed animate-fadeInUp animation-delay-600 font-light">
              Experience the pinnacle of postural excellence with our 
              <span className="text-gold-400 font-medium"> Swiss-engineered </span>
              wellness technology, exclusively designed for discerning individuals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animation-delay-800">
              <button
                onClick={() => onViewProduct(featuredProducts[0])}
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:from-gold-300 hover:to-gold-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="mr-3 h-5 w-5 animate-pulse" />
                <span className="relative z-10">Experience Luxury</span>
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
              <button className="group inline-flex items-center justify-center border-2 border-gold-400/50 text-gold-400 px-10 py-5 rounded-2xl text-lg font-medium hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 hover:scale-105 transform">
                <span>Watch Story</span>
                <div className="ml-3 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 animate-fadeInUp animation-delay-1000">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Elite Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Concierge</div>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Product Display */}
          <div className="relative animate-fadeInUp animation-delay-300">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl border border-gold-400/20">
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-gold-600/10 animate-pulse" />
              
              {/* Floating Product Image */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full h-full animate-float-gentle">
                  <img
                    src="/posture crrector.PNG"
                    alt="SYMORA Posture Corrector"
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 filter brightness-110"
                  />
                  {/* Premium Glow Around Product */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-transparent to-gold-600/20 rounded-full blur-3xl animate-pulse" />
                </div>
              </div>

              {/* Floating Price Tag - Premium */}
              <div className="absolute top-8 right-8 bg-gradient-to-r from-gold-400 to-gold-600 text-black rounded-2xl px-6 py-3 shadow-2xl animate-slideInRight animation-delay-1000 border border-gold-300">
                <div className="text-xs font-medium uppercase tracking-wider opacity-80">Starting at</div>
                <span className="text-2xl font-black">€29.99</span>
              </div>

              {/* Premium Features Badge */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-4 shadow-2xl animate-slideInLeft animation-delay-1200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Swiss Precision</span>
                </div>
              </div>

              {/* Luxury Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gold-400/50 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gold-400/50 rounded-br-3xl" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl animate-pulse animation-delay-500" />
          </div>
        </div>
      </section>

      {/* Features Section - Ultra Premium */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-gold-400/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-8 py-3 text-sm text-gold-300 mb-8 shadow-2xl">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent font-medium">
                The SYMORA Difference
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                Engineered for
              </span>
              <span className="block text-gold-400 drop-shadow-2xl">Perfection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Every detail meticulously crafted to deliver an unparalleled wellness experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gold-400/20 rounded-3xl p-8 hover:border-gold-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl transform animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-8 w-8 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-400 text-center leading-relaxed font-light">{feature.description}</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-gold-400/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Luxury Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-gold-400/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-8 py-3 text-sm text-gold-300 mb-8 shadow-2xl">
              <Crown className="w-4 h-4 mr-2" />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent font-medium">
                Exclusive Collection
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                Luxury
              </span>
              <span className="block text-gold-400 drop-shadow-2xl">Wellness</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Discover our handpicked selection of premium wellness solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard
                  product={product}
                  onViewProduct={onViewProduct}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Premium */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-400/5 via-transparent to-gold-600/5 animate-pulse" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fadeInUp">
          <div className="inline-flex items-center bg-gradient-to-r from-gold-400/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-8 py-3 text-sm text-gold-300 mb-8 shadow-2xl">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent font-medium">
              Join the Elite
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
              Ready to Experience
            </span>
            <span className="block text-gold-400 drop-shadow-2xl">Perfection?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join an exclusive community of individuals who demand nothing but the finest in wellness technology.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={() => onViewProduct(featuredProducts[0])}
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-12 py-6 rounded-2xl text-xl font-bold hover:from-gold-300 hover:to-gold-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Crown className="mr-3 h-6 w-6 animate-pulse relative z-10" />
              <span className="relative z-10">Begin Your Journey</span>
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;