import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { aiInsights } from '../data/mockData';

const AIChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI HR Analytics Assistant. I can help you with insights, recommendations, and answer questions about your workforce data. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }]);
    }, 1000);

    setInputMessage('');
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes('emiratisation') || input.includes('target')) {
      return "Based on current trends, you're at 68% Emiratisation with a target of 75%. The Technology sector needs the most attention at 58%. I recommend:\n\n1. Implement targeted recruitment programs for UAE nationals in tech\n2. Partner with UAE universities for internship programs\n3. Create career development paths to retain Emirati talent\n\nWould you like me to create a detailed action plan?";
    }

    if (input.includes('turnover') || input.includes('retention')) {
      return "Employee turnover is at 8.5%, which is 1.5% above target. Exit interview analysis shows:\n\n• 45% cite career development opportunities\n• 30% mention work-life balance\n• 25% competitive compensation\n\nRecommendations:\n1. Enhance career progression frameworks\n2. Implement flexible work policies\n3. Review compensation benchmarks\n\nShall I dive deeper into any of these areas?";
    }

    if (input.includes('training') || input.includes('development')) {
      return "Current training metrics show 35 hours per employee vs. 40-hour target. Digital training programs show 35% higher completion rates.\n\nSuggestions:\n1. Increase digital/e-learning offerings\n2. Implement microlearning modules\n3. Gamify training programs\n4. Align training with career paths\n\nWould you like recommendations for specific programs?";
    }

    if (input.includes('sector') || input.includes('performance')) {
      return "Sector performance analysis:\n\n✅ Top Performers:\n• Education (78% Emiratisation)\n• Healthcare (72% Emiratisation)\n\n⚠️ Needs Attention:\n• Technology (58% Emiratisation)\n\nThe Technology sector shows strong growth (+4.2%) but needs accelerated Emiratisation initiatives. I can provide a detailed sector improvement plan. Interested?";
    }

    return "I understand you're asking about workforce analytics. I can help you with:\n\n• Emiratisation progress and strategies\n• Employee retention and turnover analysis\n• Training and development insights\n• Sector-specific performance reviews\n• Predictive workforce planning\n\nWhat specific area would you like to explore?";
  };

  const handleInsightClick = (insight) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: insight.title,
      timestamp: new Date()
    }, {
      id: prev.length + 2,
      type: 'ai',
      content: insight.message + "\n\n" + "Would you like me to create an action plan for this?",
      timestamp: new Date()
    }]);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-lg rounded-full p-2">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI HR Assistant</h2>
                <p className="text-sm text-purple-100">Powered by Advanced Analytics</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">AI Insights</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {aiInsights.map((insight) => (
              <button
                key={insight.id}
                onClick={() => handleInsightClick(insight)}
                className="bg-white border border-purple-200 rounded-lg p-3 text-left hover:shadow-md transition-all hover:border-purple-400 group"
              >
                <div className="flex items-start gap-2">
                  {insight.type === 'recommendation' && <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />}
                  {insight.type === 'alert' && <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />}
                  {insight.type === 'insight' && <Lightbulb className="w-4 h-4 text-blue-500 flex-shrink-0" />}
                  <div>
                    <p className="text-xs font-semibold text-gray-800 group-hover:text-purple-600">
                      {insight.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                message.type === 'ai'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500'
              }`}>
                {message.type === 'ai' ? (
                  <Bot className="w-5 h-5 text-white" />
                ) : (
                  <User className="w-5 h-5 text-white" />
                )}
              </div>
              <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                <div
                  className={`inline-block max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'ai'
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <span className={`text-xs mt-1 block ${
                    message.type === 'ai' ? 'text-gray-500' : 'text-purple-100'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your HR data..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIChatModal;
