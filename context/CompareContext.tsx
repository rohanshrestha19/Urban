
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types';

interface CompareContextType {
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  totalCompareItems: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const toggleCompare = useCallback((product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 products at a time.");
        return prev;
      }
      return [...prev, product];
    });
  }, []);

  const isInCompare = useCallback((productId: string) => {
    return compareList.some(item => item.id === productId);
  }, [compareList]);

  const clearCompare = useCallback(() => setCompareList([]), []);

  return (
    <CompareContext.Provider value={{ 
      compareList, 
      toggleCompare, 
      isInCompare, 
      clearCompare,
      totalCompareItems: compareList.length 
    }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) throw new Error('useCompare must be used within a CompareProvider');
  return context;
};
