import { ArrowDown } from 'lucide-react';
import profileImage from '@/assets/shubhampatilcopy.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen text-white" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to bottom right, #0b1120, #05070d, #020204)' }}>
      <svg 
        style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}}
        viewBox="0 0 1440 800" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path 
          d="M-200 350 C200 150, 600 550, 1000 250 S1400 50, 1700 300" 
          stroke="url(#line1)" 
          strokeWidth="6" 
          fill="none"
        />
        <path 
          d="M-200 500 C100 300, 500 700, 900 400 S1300 200, 1700 450" 
          stroke="url(#line2)" 
          strokeWidth="5" 
          fill="none"
        />
        <path 
          d="M-100 650 C300 450, 700 750, 1100 500 S1500 300, 1800 550" 
          stroke="url(#line3)" 
          strokeWidth="4" 
          fill="none"
        />
      </svg>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in relative z-10">
          <div className="mb-8 flex justify-center mt-10 relative z-10">
            <div className="relative z-10">
              <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden relative z-10">
                <img
                  src={profileImage}
                  alt="Shubham Patil"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative z-10">
            <span className="block text-white">Shubham</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Patil
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light relative z-10">
            Analyst | SQL & BI Specialist
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            Analyst with 3+ years of delivering SQL-driven insights and dashboards across consulting and startup teams. Skilled in translating business needs into analytical solutions that improve reporting speed and stakeholder decision-making.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300 relative z-10">
            <div className="flex items-center gap-2 relative z-10">
              <span>📧 patilshubham3124@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <span>📱 +353870381820</span>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <span>📍 Dublin, IE</span>
            </div>
          </div>

          <div className="flex justify-center mt-4 relative z-10">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-10"
            >
              Learn More About Me
              <ArrowDown className="animate-bounce" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;