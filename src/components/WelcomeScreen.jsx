import React from 'react';
import { BarChart3, Bot, TrendingUp, Users, Sparkles } from 'lucide-react';

const WelcomeScreen = ({ onGetStarted }) => {
  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-white" />,
      title: 'Real-Time Analytics',
      description: 'Monitor workforce metrics and Emiratisation progress in real-time'
    },
    {
      icon: <Bot className="w-12 h-12 text-white" />,
      title: 'AI Assistant',
      description: 'Get intelligent insights and recommendations powered by AI'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: 'Predictive Insights',
      description: 'Forecast trends and identify opportunities for improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full animate-fade-in">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-full p-4 shadow-2xl">
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            UAE Government HR Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            AI-Powered Workforce Analytics Platform
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg">Empowering Strategic HR Decisions</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-4 inline-block mb-4 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onGetStarted}
            className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            UAE Government Initiative • Powered by Advanced Analytics
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
