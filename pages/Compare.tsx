
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { GoogleGenAI } from "@google/genai";
import { PLACEHOLDER_IMAGE } from '../constants';

const Compare: React.FC = () => {
  const { compareList, toggleCompare, clearCompare } = useCompare();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [verdict, setVerdict] = useState<{
    performanceWinner: string;
    styleWinner: string;
    valueWinner: string;
    summary: string;
    recommendation: string;
  } | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  const runAIAnalysis = async () => {
    if (compareList.length < 2) return;
    setIsAnalyzing(true);
    setVerdict(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Compare these UrbanStep shoes and identify the best one for different use cases. 
      Products: ${compareList.map(p => `${p.name} ($${p.price}, Rating: ${p.rating}, Category: ${p.category})`).join(' vs ')}. 
      Return only a JSON object like: 
      {
        "performanceWinner": "Product Name",
        "styleWinner": "Product Name",
        "valueWinner": "Product Name",
        "summary": "Deep technical comparison in 3 sentences.",
        "recommendation": "Final advice on who should buy what."
      }`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      const text = response.text || "{}";
      const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
      setVerdict(JSON.parse(cleanJson));
    } catch (error) {
      console.error("AI Analysis failed:", error);
      alert("AI was unable to compare these models. Please try again later.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (compareList.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-zinc-900 mb-4 uppercase tracking-tighter">Comparison list is empty</h1>
        <p className="text-zinc-500 mb-8 max-w-sm text-center">Select up to 3 products from our shop to get a deep AI-driven comparison.</p>
        <Link to="/shop" className="bg-zinc-900 text-white px-12 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-10 gap-8">
          <div>
            <h1 className="text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-2">Product Comparison</h1>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Comparing {compareList.length} Models</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={clearCompare}
              className="px-8 py-3 rounded-xl bg-zinc-100 text-zinc-500 text-xs font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all"
            >
              Clear All
            </button>
            <button 
              onClick={runAIAnalysis}
              disabled={compareList.length < 2 || isAnalyzing}
              className="bg-blue-600 text-white px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-xl shadow-blue-100 disabled:opacity-50"
            >
              {isAnalyzing ? "AI Analyzing..." : "Run AI Verdict"}
            </button>
          </div>
        </div>

        {/* Side by Side Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-${compareList.length} gap-12 mb-20`}>
          {compareList.map((product) => (
            <div key={product.id} className="flex flex-col animate-fade-in-up">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-50 mb-8 group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <button 
                  onClick={() => toggleCompare(product)}
                  className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg text-zinc-400 hover:text-red-500 transition-all"
                >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-zinc-900 tracking-tighter uppercase leading-tight mb-2">{product.name}</h3>
                  <span className="text-blue-600 font-black text-lg">${product.price}</span>
                </div>
                
                <div className="space-y-4 border-t border-zinc-100 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Category</span>
                    <span className="text-xs font-bold text-zinc-900">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Rating</span>
                    <div className="flex items-center gap-1">
                       <span className="text-yellow-400 font-black">★</span>
                       <span className="text-xs font-bold text-zinc-900">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Availability</span>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-widest">In Stock</span>
                  </div>
                </div>

                <Link 
                  to={`/product/${product.id}`}
                  className="block text-center bg-zinc-900 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* AI Verdict Section */}
        {isAnalyzing && (
          <div className="bg-zinc-50 rounded-[3rem] p-12 text-center animate-pulse border border-zinc-200">
             <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="animate-spin w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
             </div>
             <h2 className="text-3xl font-black text-zinc-900 mb-2 uppercase tracking-tight">Our AI is crunching the data</h2>
             <p className="text-zinc-500 font-medium">Comparing materials, user reviews, and design intent...</p>
          </div>
        )}

        {verdict && (
          <div className="bg-zinc-900 text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl animate-scale-up">
             {/* Decorative Background Icon */}
             <div className="absolute top-10 right-10 text-[15rem] font-black text-white/5 pointer-events-none select-none italic">AI</div>
             
             <div className="relative z-10">
               <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-10 inline-block">UrbanStep AI Verdict</span>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">Performance Lead</span>
                     <h4 className="text-xl font-black uppercase tracking-tight">{verdict.performanceWinner}</h4>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">Street Style Icon</span>
                     <h4 className="text-xl font-black uppercase tracking-tight">{verdict.styleWinner}</h4>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">Best Value</span>
                     <h4 className="text-xl font-black uppercase tracking-tight">{verdict.valueWinner}</h4>
                  </div>
               </div>

               <div className="max-w-3xl mb-12">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Comparison Summary</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">{verdict.summary}</p>
               </div>

               <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-2xl">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Final Recommendation</h3>
                  <p className="text-blue-50 font-medium leading-relaxed">{verdict.recommendation}</p>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
