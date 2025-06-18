import React, { useState } from 'react';
import { Crown, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div
      className="group cursor-pointer animate-fadeInUp"
      onClick={() => onViewProduct(product)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 aspect-square mb-6 shadow-2xl hover:shadow-gold-glow transition-all duration-700 border border-gold-400/20 hover:border-gold-400/50">
        {/* Premium Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-gold-600/10 transition-opacity duration-700 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Main Product Image */}
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 filter ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
          }`}
        />
        
        {/* Premium Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Luxury Badge */}
        <div className={`absolute top-4 left-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black rounded-2xl px-3 py-1 shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <div className="flex items-center space-x-1">
            <Crown className="h-3 w-3" />
            <span className="text-xs font-bold">LUXURY</span>
          </div>
        </div>
        
        {/* Floating Price Tag */}
        <div className={`absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-gold-400/30 rounded-2xl px-4 py-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <span className="text-lg font-bold text-gold-400">€{product.price.toFixed(2)}</span>
        </div>
        
        {/* Premium View Button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:from-gold-300 hover:to-gold-500 transition-all duration-200 hover:scale-105 transform flex items-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Experience</span>
          </div>
        </div>

        {/* Luxury Corner Accents */}
        <div className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold-400/50 rounded-tl-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        <div className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold-400/50 rounded-br-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      <div className="text-center space-y-4 px-2">
        <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-light">{product.description}</p>
        
        {/* Premium Features Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-gradient-to-r from-gold-400/20 to-gold-600/20 border border-gold-400/30 text-gold-300 text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm"
            >
              {benefit}
            </span>
          ))}
        </div>
        
        <div className="pt-2">
          <span className="text-2xl font-bold text-gold-400">€{product.price.toFixed(2)}</span>
          <span className="text-gray-500 text-sm ml-2">Complimentary delivery</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;