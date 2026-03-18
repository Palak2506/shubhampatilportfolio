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
    <section
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pb-20"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #1e2d40 0%, #111827 55%, #0c1117 100%)"
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center mt-10">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Shubham Patil"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Shubham</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Patil
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Analyst | SQL & BI Specialist
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Analyst with 3+ years of delivering SQL-driven insights and dashboards across consulting and startup teams. Skilled in translating business needs into analytical solutions that improve reporting speed and stakeholder decision-making.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <span>📧 patilshubham3124@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱 +353870381820</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍 Dublin, IE</span>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
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