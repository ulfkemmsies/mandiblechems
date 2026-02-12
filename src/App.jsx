import React, { useState } from 'react';
import { Truck, FlaskConical, Menu, X, ChevronRight, Phone, Mail, MapPin, CheckCircle, Droplets, Factory, Hexagon, Wrench, ShieldAlert, Wheat } from 'lucide-react';

const MandibleLogo = ({ className, strokeWidth = 3 }) => (
  <svg viewBox="0 0 100 130" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {/* Mandibles */}
    <path d="M42 22 C 38 10, 45 4, 50 6" />
    <path d="M58 22 C 62 10, 55 4, 50 6" />
    {/* Inner Mandible Spikes */}
    <path d="M45 16 L 49 18" />
    <path d="M55 16 L 51 18" />
    
    {/* Head */}
    <path d="M42 22 L 58 22 C 60 30, 55 34, 50 34 C 45 34, 40 30, 42 22 Z" />
    
    {/* Neck */}
    <line x1="50" y1="34" x2="50" y2="38" />
    
    {/* Thorax Hexagon */}
    <polygon points="50,38 65,46.5 65,63.5 50,72 35,63.5 35,46.5" />
    {/* Thorax Inner Bonds */}
    <line x1="41" y1="49.5" x2="41" y2="60.5" />
    <line x1="59" y1="49.5" x2="59" y2="60.5" />
    
    {/* Waist */}
    <line x1="50" y1="72" x2="50" y2="78" />
    
    {/* Abdomen Hexagon */}
    <polygon points="50,78 65,86.5 65,103.5 50,112 35,103.5 35,86.5" />
    {/* Abdomen Inner Bonds */}
    <line x1="41" y1="89.5" x2="41" y2="100.5" />
    <line x1="59" y1="89.5" x2="59" y2="100.5" />
    
    {/* Legs */}
    {/* Top pair */}
    <polyline points="35,46.5 22,38 22,24" />
    <polyline points="65,46.5 78,38 78,24" />
    {/* Middle pair */}
    <polyline points="35,63.5 22,72 12,66" />
    <polyline points="65,63.5 78,72 88,66" />
    {/* Bottom pair */}
    <polyline points="35,103.5 22,112 32,122" />
    <polyline points="65,103.5 78,112 68,122" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-orange-500 selection:text-zinc-900">
      {/* Navigation */}
      <nav className="bg-zinc-900 border-b-4 border-orange-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-orange-600 p-1 border-2 border-zinc-900 flex items-center justify-center shadow-[2px_2px_0px_#000]">
                <MandibleLogo className="h-10 w-10 text-zinc-900" strokeWidth={3} />
              </div>
              <span className="font-black text-2xl md:text-3xl tracking-tighter text-white uppercase ml-1">
                MANDIBLE <span className="text-orange-500">CHEMICAL</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#products" className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wide transition">Products</a>
              <a href="#industries" className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wide transition">Applications</a>
              <a href="#contact" className="bg-orange-600 text-zinc-900 px-6 py-2 border-2 border-orange-600 hover:bg-transparent hover:text-orange-500 transition font-black uppercase tracking-widest">
                Request Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-zinc-300 hover:text-orange-500 focus:outline-none">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-800 border-t-2 border-zinc-700">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#products" className="block py-2 text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wide">Products</a>
              <a href="#industries" className="block py-2 text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wide">Applications</a>
              <a href="#contact" className="block py-2 text-orange-500 font-black uppercase tracking-wide">Request Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-zinc-200 border-b-4 border-zinc-900 overflow-hidden">
        {/* Hard geometric background element */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-zinc-300 skew-x-12 translate-x-20 hidden lg:block border-l-4 border-zinc-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-3/4 lg:w-2/3">
            <div className="inline-block bg-zinc-900 text-orange-500 px-4 py-1.5 font-black uppercase tracking-widest mb-6 border-l-4 border-orange-500 text-sm shadow-[4px_4px_0px_#ea580c]">
              Texas & Gulf Coast Operations
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.9] mb-8">
              Industrial <br/>
              <span className="text-orange-600">Formic Acid</span> <br/>
              Supply
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 mb-10 font-medium max-w-2xl border-l-4 border-zinc-900 pl-4">
              Direct supplier of Formic Acid for Oilfield Services, Agricultural Feed, Toll Blending, and Commercial Apiculture. Reliable 85% and 90% technical grade supply across Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border-4 border-zinc-900 text-lg font-black uppercase tracking-widest text-zinc-900 bg-orange-500 hover:bg-orange-600 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_#18181b] transition-all">
                Get Pricing
                <ChevronRight className="ml-2 h-6 w-6" strokeWidth={3} />
              </a>
              <a href="#products" className="inline-flex justify-center items-center px-8 py-4 border-4 border-zinc-900 text-lg font-black uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-100 transition-all">
                View Specs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-orange-500 border-b-4 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-zinc-900">
            <div className="p-8 text-center bg-orange-500">
              <div className="text-5xl font-black text-zinc-900 mb-1 tracking-tighter">90%</div>
              <div className="text-zinc-900 font-bold uppercase tracking-widest text-sm">Max Formic Concentration</div>
            </div>
            <div className="p-8 text-center bg-orange-500">
              <div className="text-5xl font-black text-zinc-900 mb-1 tracking-tighter">BULK</div>
              <div className="text-zinc-900 font-bold uppercase tracking-widest text-sm">Tanker & Drum Fleet</div>
            </div>
            <div className="p-8 text-center bg-orange-500">
              <div className="text-5xl font-black text-zinc-900 mb-1 tracking-tighter">TX</div>
              <div className="text-zinc-900 font-bold uppercase tracking-widest text-sm">Based & Operated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-l-8 border-orange-500 pl-6">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-2">Inventory</h2>
            <p className="text-xl text-zinc-600 font-medium">
              High-volume industrial acids and buffers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formic Acid Card */}
            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_#18181b] relative">
              <div className="absolute top-0 right-0 bg-zinc-900 text-orange-500 font-black px-4 py-2 border-b-4 border-l-4 border-zinc-900 tracking-widest text-sm">
                CORE PRODUCT
              </div>
              <div className="w-16 h-16 bg-orange-500 border-2 border-zinc-900 flex items-center justify-center mb-8 shadow-[4px_4px_0px_#18181b]">
                <Droplets className="h-8 w-8 text-zinc-900" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-2 uppercase tracking-tight">Formic Acid</h3>
              <p className="text-zinc-600 mb-8 font-bold uppercase tracking-wider text-sm">Technical Grade Carboxylic Acid</p>
              
              <div className="mb-8 p-4 bg-zinc-100 border-2 border-zinc-900">
                <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-3">Available Packaging</h4>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-zinc-900">Bulk Tankers</span>
                  <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-zinc-900">IBC Totes</span>
                  <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-zinc-900">55-Gal Drums</span>
                  <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-zinc-900">1-L HDPE (Vented)</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Concentrations: 85% & 90% Industrial Grade',
                  'CRITICAL: Low Iron (<5ppm) for Leather/Tanning',
                  'Winter Storage & Buffered Blends Available',
                  'Technical Specification Compliance',
                  'Oilfield HCR Blends & Scale Remediation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span className="text-zinc-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bicarbonate Card */}
            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[8px_8px_0px_#18181b] relative">
              <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-900 flex items-center justify-center mb-8 shadow-[4px_4px_0px_#ea580c]">
                <Factory className="h-8 w-8 text-orange-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-2 uppercase tracking-tight">Sodium Bicarbonate</h3>
              <p className="text-zinc-600 mb-8 font-bold uppercase tracking-wider text-sm">Technical Byproduct Grade</p>

              <div className="mb-8 p-4 bg-zinc-100 border-2 border-zinc-900">
                <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-3">Available Packaging</h4>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider border border-zinc-900">Bulk Truckload Only</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Industrial Byproduct Grade',
                  'Wastewater Treatment (pH Control)',
                  'Flue Gas Desulfurization',
                  'Industrial Cleaning Agents',
                  'Strictly NON-FOOD / NON-PHARMA'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span className="text-zinc-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div id="industries" className="py-24 bg-zinc-900 border-y-4 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-l-8 border-orange-500 pl-6">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Target Applications</h2>
            <p className="text-zinc-400 font-medium mt-4 text-lg">Engineered logistics for high-demand chemical applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Oilfield */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Wrench className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Oilfield & Stimulation</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">JIT delivery of 85% technical acid to prevent rig downtime. Essential for HCR (High Corrosion Resistant) blends and scale remediation.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: Bulk & Totes</div>
            </div>

            {/* Agriculture */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Wheat className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Agricultural Feed</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">Feed preservation, grain storage acidification, and silage hygiene. We support organic and commercial mills with 85% buffered options.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: Drums & Totes</div>
            </div>

            {/* Apiculture */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Hexagon className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Commercial Apiculture</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">Strictly 85% technical-grade acid for apiary maintenance. We partner with Texas Associations for seasonal group buys, bypassing retail markups.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: 1-L Vented & Drums</div>
            </div>

            {/* Leather Tanning */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Leather Processing</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">Consistent 85% supply for pickling and finishing. We guarantee strictly controlled Low Iron (&lt;5ppm) technical grades to prevent hide staining.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: High-Purity Tech Grade</div>
            </div>

            {/* Toll Blending */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Factory className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Toll Blending</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">Reliable 90% technical feedstock for blending kettles. Value-add services include winter storage and custom batch buffering.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: Spot & Contract Bulk</div>
            </div>

            {/* Industrial & Water */}
            <div className="p-8 bg-zinc-800 border-2 border-zinc-700 hover:border-orange-500 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <FlaskConical className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Industrial Treatment</h3>
              </div>
              <p className="text-zinc-300 font-medium mb-6 flex-grow">Technical-grade base chemistry for commercial descalers, wastewater pH control, and industrial flue gas treatment.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-auto border-t border-zinc-700 pt-4">Capabilities: Bulk Formic & Bicarbonate</div>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12 border-l-8 border-zinc-900 pl-6">
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-4">Request Pricing</h2>
                <p className="text-zinc-700 text-lg font-medium">
                  Competitive spot pricing and contract availability for high-volume industrial orders.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 bg-white p-6 border-4 border-zinc-900 shadow-[4px_4px_0px_#18181b]">
                  <div className="h-12 w-12 bg-orange-500 border-2 border-zinc-900 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Direct Line</div>
                    <div className="text-2xl font-black text-zinc-900 tracking-tight">(512) 555-0123</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 bg-white p-6 border-4 border-zinc-900 shadow-[4px_4px_0px_#18181b]">
                  <div className="h-12 w-12 bg-zinc-900 border-2 border-zinc-900 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Sales Desk</div>
                    <div className="text-xl font-black text-zinc-900 tracking-tight break-all">sales@mandiblechemical.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-6 border-4 border-zinc-900 shadow-[4px_4px_0px_#18181b]">
                  <div className="h-12 w-12 bg-zinc-200 border-2 border-zinc-900 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Dispatch HQ</div>
                    <div className="text-xl font-black text-zinc-900 tracking-tight">Dallas / Fort Worth, TX</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-zinc-900 p-8 shadow-[12px_12px_0px_#18181b]">
              <h3 className="text-2xl font-black mb-8 text-zinc-900 uppercase tracking-tighter border-b-4 border-zinc-900 pb-4">Logistics Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none" placeholder="JOHN" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none" placeholder="DOE" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none" placeholder="YOUR COMPANY LLC" />
                </div>
                <div>
                  <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none" placeholder="JOHN@COMPANY.COM" />
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Buyer Profile</label>
                    <select className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none font-medium appearance-none">
                      <option>Oilfield Services / Stimulation</option>
                      <option>Agriculture / Feed Mill</option>
                      <option>Beekeeping Association / Ag</option>
                      <option>Leather Tanning / Processing</option>
                      <option>Toll Blender / Chemical Mfg</option>
                      <option>Industrial / Water Treatment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Product & Volume Interest</label>
                    <select className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none font-medium appearance-none">
                      <option>Formic 85/90% - Bulk Tanker (15k+ gal)</option>
                      <option>Formic 85% - IBC Totes/Multi-Drum</option>
                      <option>Formic 85% - 1-L Vented Bottles (Group Buy)</option>
                      <option>Sodium Bicarbonate - Bulk Truckload</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">Logistics / Timeline</label>
                  <textarea rows={4} className="w-full px-4 py-3 border-2 border-zinc-900 bg-zinc-50 focus:bg-white focus:ring-0 focus:outline-none focus:border-orange-500 transition-colors rounded-none resize-none" placeholder="E.G., NEED JIT DELIVERY TO MIDLAND NEXT WEEK..."></textarea>
                </div>
                <button type="submit" className="w-full bg-zinc-900 text-white font-black uppercase tracking-widest py-4 border-4 border-zinc-900 hover:bg-orange-500 hover:text-zinc-900 transition-colors shadow-[4px_4px_0px_#ea580c]">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 border-t-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-black text-2xl text-white uppercase tracking-tighter">MANDIBLE <span className="text-orange-600">CHEMICAL</span></span>
              <p className="text-sm mt-2 font-bold uppercase tracking-widest">© 2024 Mandible Chemical</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Safety Data Sheets</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;