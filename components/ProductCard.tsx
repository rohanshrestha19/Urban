
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { PLACEHOLDER_IMAGE } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();
  
  const activeWishlist = isInWishlist(product.id);
  const activeCompare = isInCompare(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompare(product);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <div className="group relative block">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-zinc-50 relative border border-transparent group-hover:border-zinc-100 transition-all duration-500 shadow-sm group-hover:shadow-2xl">
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Action Buttons Overlay */}
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <button 
              onClick={handleWishlistClick}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all hover:scale-110 active:scale-90 z-20 group/btn"
              title="Add to Wishlist"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transition-colors ${activeWishlist ? 'text-red-500 fill-current' : 'text-zinc-400 group-hover/btn:text-red-400'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <button 
              onClick={handleCompareClick}
              className={`p-2.5 rounded-full shadow-sm transition-all hover:scale-110 active:scale-90 z-20 group/btn ${
                activeCompare ? 'bg-blue-600 text-white' : 'bg-white/90 backdrop-blur-sm text-zinc-400 hover:text-blue-500'
              }`}
              title="Add to Compare"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>
          </div>

          {product.isNew && (
            <span className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] uppercase font-black px-3 py-1.5 rounded-full shadow-lg shadow-blue-200">
              New Arrival
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="w-full bg-white text-zinc-900 text-center text-xs font-black py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 uppercase tracking-widest">
                  Quick View
              </span>
          </div>
        </div>
      </Link>
      
      <div className="mt-6 px-2 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-black text-zinc-900 uppercase tracking-tighter line-clamp-1">{product.name}</h3>
          <p className="mt-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{product.category}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-black text-zinc-900">${product.price}</p>
          <div className="flex items-center gap-0.5 mt-1">
             <span className="text-[10px] font-black text-yellow-400">★</span>
             <span className="text-[10px] font-black text-zinc-400">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
