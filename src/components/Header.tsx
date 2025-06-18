import React from 'react';
import { ShoppingBag, Menu, X, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { cart, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Collection', id: 'products' },
    { name: 'Heritage', id: 'about' },
    { name: 'Concierge', id: 'contact' }
  ];

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-gold-400/20 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Ultra Premium */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Crown className="h-6 w-6 text-black" />
            </div>
            <div className="text-3xl font-black bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent tracking-tight">
              SYMORA
            </div>
          </div>

          {/* Desktop Navigation - Premium */}
          <nav className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-gold-400 group ${
                  currentPage === item.id ? 'text-gold-400' : 'text-gray-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {currentPage === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                )}
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu - Premium */}
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleCart}
              className="relative p-3 text-gray-300 hover:text-gold-400 transition-all duration-300 hover:scale-110 transform group"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-400 to-gold-600 text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {itemCount}
                </span>
              )}
              <div className="absolute inset-0 bg-gold-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 text-gray-300 hover:text-gold-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Premium */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gold-400/20 animate-fadeIn bg-black/50 backdrop-blur-sm">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium transition-colors duration-300 hover:text-gold-400 ${
                    currentPage === item.id ? 'text-gold-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;