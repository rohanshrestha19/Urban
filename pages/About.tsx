
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] bg-zinc-900 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1920&q=80" alt="UrbanStep Heritage" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tight mb-4 animate-fade-in-up">Our Heritage</h1>
          <p className="text-blue-400 font-bold tracking-[0.4em] uppercase animate-fade-in-up [animation-delay:200ms]">Est. 2018 — UrbanStep Footwear</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-zinc-900 mb-12 uppercase tracking-tighter italic">Designed for the Hustle.</h2>
          <p className="text-xl text-zinc-600 leading-relaxed mb-8">
            UrbanStep was founded in the heart of the city with a simple mission: to create high-performance footwear that doesn't sacrifice style. We believe your shoes are the foundation of your journey.
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed">
            From the boardroom to the basketball court, our sneakers are engineered with precision, using sustainable materials and cutting-edge comfort technology. We don't just sell shoes; we provide the gear you need to step into your next challenge with absolute confidence.
          </p>
        </div>
      </section>

      {/* Why UrbanStep? - New Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[15rem] font-black text-white/5 pointer-events-none select-none italic leading-none translate-x-1/4 -translate-y-1/4">WHY?</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">The Difference</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 italic leading-none">Why Choose <br /> UrbanStep?</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">City-Tested Engineering</h4>
                    <p className="text-zinc-400 leading-relaxed">Most brands test in labs. We test on the pavement of NYC, the hills of SF, and the courts of Chicago. Our shoes are built for the actual environment you live in.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Uncompromising Value</h4>
                    <p className="text-zinc-400 leading-relaxed">By cutting out the middleman and retail markups, we deliver $300 luxury footwear quality for nearly half the price. Premium leather, carbon plates, and proprietary foam—without the luxury tax.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">AI-Driven Experience</h4>
                    <p className="text-zinc-400 leading-relaxed">We don't just ship boxes. From our AI Visual Search to the Style Concierge that vibe-checks your outfit, we use technology to ensure you always look your absolute best.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Quality details" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <p className="text-4xl font-black italic uppercase tracking-tighter">Zero <br /> Compromise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-blue-600 mb-2">500K+</div>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Happy Walkers</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-600 mb-2">45</div>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Countries Reached</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-600 mb-2">100+</div>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Unique Styles</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-600 mb-2">98%</div>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-zinc-900 uppercase tracking-tight">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600 shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Innovation First</h3>
              <p className="text-zinc-500 leading-relaxed">Always pushing the boundaries of what a sneaker can do. We invest heavily in R&D to bring you the future of walking.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-green-600 shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Sustainability</h3>
              <p className="text-zinc-500 leading-relaxed">We care about the planet we walk on. Our materials are ethically sourced and designed to last longer than the competition.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-zinc-900 shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Community</h3>
              <p className="text-zinc-500 leading-relaxed">UrbanStep is built by people for people. We support urban art and sports projects globally, giving back to the streets that inspire us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-10 leading-none">Become Part <br /> of the Journey.</h2>
          <Link to="/shop" className="inline-block bg-zinc-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-xl shadow-zinc-200">
            Join the Tribe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
