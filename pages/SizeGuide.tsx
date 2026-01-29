
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SizeGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Men' | 'Women' | 'Unisex'>('Men');

  const sizeCharts = {
    Men: [
      { us: '7', uk: '6', eu: '40', cm: '25.0' },
      { us: '7.5', uk: '6.5', eu: '40.5', cm: '25.5' },
      { us: '8', uk: '7', eu: '41', cm: '26.0' },
      { us: '8.5', uk: '7.5', eu: '41.5', cm: '26.5' },
      { us: '9', uk: '8', eu: '42', cm: '27.0' },
      { us: '9.5', uk: '8.5', eu: '42.5', cm: '27.5' },
      { us: '10', uk: '9', eu: '43', cm: '28.0' },
      { us: '10.5', uk: '9.5', eu: '43.5', cm: '28.5' },
      { us: '11', uk: '10', eu: '44', cm: '29.0' },
      { us: '12', uk: '11', eu: '45', cm: '30.0' },
    ],
    Women: [
      { us: '5', uk: '3', eu: '35.5', cm: '22.0' },
      { us: '5.5', uk: '3.5', eu: '36', cm: '22.5' },
      { us: '6', uk: '4', eu: '36.5', cm: '23.0' },
      { us: '6.5', uk: '4.5', eu: '37.5', cm: '23.5' },
      { us: '7', uk: '5', eu: '38', cm: '24.0' },
      { us: '7.5', uk: '5.5', eu: '38.5', cm: '24.5' },
      { us: '8', uk: '6', eu: '39', cm: '25.0' },
      { us: '8.5', uk: '6.5', eu: '40', cm: '25.5' },
      { us: '9', uk: '7', eu: '40.5', cm: '26.0' },
      { us: '10', uk: '8', eu: '42', cm: '27.0' },
    ],
    Unisex: [
      { us: 'M 4 / W 5.5', uk: '3.5', eu: '36', cm: '22.5' },
      { us: 'M 5 / W 6.5', uk: '4.5', eu: '37.5', cm: '23.5' },
      { us: 'M 6 / W 7.5', uk: '5.5', eu: '38.5', cm: '24.5' },
      { us: 'M 7 / W 8.5', uk: '6.5', eu: '40', cm: '25.5' },
      { us: 'M 8 / W 9.5', uk: '7.5', eu: '41', cm: '26.5' },
      { us: 'M 9 / W 10.5', uk: '8.5', eu: '42.5', cm: '27.5' },
      { us: 'M 10 / W 11.5', uk: '9.5', eu: '44', cm: '28.5' },
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-zinc-950 py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 pointer-events-none select-none italic leading-none translate-x-20 -translate-y-20">SIZE</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Precision Engineering</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none italic mb-8">
            The Fit <br /> Lab.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-medium">
            Finding the right size is the first step to confidence. Our detailed guides ensure you get the perfect fit, every time you step out.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Charts Section */}
          <div className="flex-grow">
            <div className="mb-12 flex justify-center lg:justify-start">
              <div className="inline-flex p-1 bg-zinc-100 rounded-2xl">
                {(['Men', 'Women', 'Unisex'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      activeTab === tab 
                        ? 'bg-white shadow-xl text-blue-600' 
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-zinc-100 shadow-sm animate-fade-in-up">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100">US Size</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100">UK Size</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100">EU Size</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100">CM (Heel-to-Toe)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {sizeCharts[activeTab].map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-5 text-sm font-black text-zinc-900">{row.us}</td>
                      <td className="px-8 py-5 text-sm font-bold text-zinc-500">{row.uk}</td>
                      <td className="px-8 py-5 text-sm font-bold text-zinc-500">{row.eu}</td>
                      <td className="px-8 py-5 text-sm font-black text-blue-600">{row.cm} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 mb-2">UrbanStep Fit Advice</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Our shoes are engineered to fit <strong>True to Size</strong>. If you are between sizes, we generally recommend choosing the larger size for a more comfortable fit, especially in our performance athletic collections.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - How to Measure */}
          <aside className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-zinc-50 rounded-[3rem] p-10 md:p-12 sticky top-28 border border-zinc-100">
              <h2 className="text-3xl font-black text-zinc-900 mb-8 uppercase tracking-tighter italic">How to <br /> Measure.</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-black text-xs flex-shrink-0">01</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">Paper and Pencil</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Place a sheet of paper on the floor and against a wall. Stand on it with your heel touching the wall.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-black text-xs flex-shrink-0">02</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">Mark the Length</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Have someone mark the longest part of your foot (usually the big toe) on the paper with a pencil.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-black text-xs flex-shrink-0">03</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">Measure and Match</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Measure the length from the wall to the mark. Compare this value to our CM column in the chart above.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-zinc-200">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Still Unsure?</p>
                <Link to="/contact" className="block w-full text-center bg-zinc-900 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
                  Contact Support
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-8">Ready to <br /> Step Up?</h2>
          <p className="text-zinc-400 text-lg mb-12">Now that you've found your fit, explore our latest drops.</p>
          <Link to="/shop" className="inline-block bg-white text-zinc-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all">
            Shop New Arrivals
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SizeGuide;
