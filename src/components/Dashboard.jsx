import React, { useState } from 'react';
import {
  Home, Users, BarChart3, Settings, Bell, MessageSquare, ChevronRight,
  AlertCircle, TrendingUp, TrendingDown, Calendar, Clock, MapPin,
  Target, Award, Activity, Building2, ChevronDown, User, LogOut
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  criticalTasks,
  keyGoals,
  sectors,
  upcomingSchedule,
  emiratisationData
} from '../data/mockData';
import AIChatModal from './AIChatModal';

const Dashboard = ({ user, onLogout }) => {
  const [showAIChat, setShowAIChat] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-300',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      low: 'bg-green-100 text-green-800 border-green-300'
    };
    return colors[priority] || colors.medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      'on-track': 'text-green-600',
      'needs-attention': 'text-red-600',
      'excellent': 'bg-green-100 text-green-800',
      'good': 'bg-blue-100 text-blue-800',
      'needs-improvement': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || '';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">UAE HR</h1>
              <p className="text-xs text-gray-400">Analytics Platform</p>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{user?.email?.split('@')[0]}</p>
              <p className="text-xs text-gray-400">{user?.role || 'HR Manager'}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Workforce</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <Target className="w-5 h-5" />
            <span className="font-medium">Emiratisation</span>
          </button>

          {/* Sectors List */}
          <div className="pt-4">
            <p className="text-xs text-gray-400 uppercase px-4 mb-2">Sectors</p>
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{sector.name}</span>
                </div>
                <span className="text-xs text-gray-400">{sector.emiratisation}%</span>
              </button>
            ))}
          </div>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors mt-4">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        {/* Back to Homepage Button */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={onLogout}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
              <p className="text-sm text-gray-600">Welcome back, {user?.role || 'HR Manager'}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAlerts(!showAlerts)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => setShowAIChat(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                AI Assistant
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content - 12 Column Grid */}
        <div className="p-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column (5 cols) - Critical Tasks & Key Goals */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              {/* Critical Tasks Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    Critical Tasks
                  </h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {criticalTasks.filter(t => t.status === 'pending').length} Pending
                  </span>
                </div>
                <div className="space-y-3">
                  {criticalTasks.map((task) => (
                    <div
                      key={task.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{task.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{task.department}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                        <span className={`px-2 py-1 rounded ${task.status === 'pending' ? 'bg-gray-100' : 'bg-blue-100'}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Goals Progress Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-500" />
                    Key Goals Progress
                  </h3>
                </div>
                <div className="space-y-4">
                  {keyGoals.map((goal) => (
                    <div key={goal.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{goal.name}</span>
                        <span className={`font-bold text-lg ${getStatusColor(goal.status)}`}>
                          {goal.current}{goal.unit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className={`h-2 rounded-full ${goal.status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${(goal.current / goal.target) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Target: {goal.target}{goal.unit}</span>
                        <span className="flex items-center gap-1">
                          {goal.trend === 'up' ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500" />
                          )}
                          {goal.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (7 cols) - Sectors & Schedule */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              {/* Sectors Overview Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-purple-500" />
                    Sectors Overview
                  </h3>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectors.map((sector) => (
                    <div
                      key={sector.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setSelectedSector(sector)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{sector.name}</h4>
                          <p className="text-sm text-gray-600">{sector.employees.toLocaleString()} employees</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(sector.performance)}`}>
                          {sector.performance}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-purple-600">{sector.emiratisation}%</p>
                          <p className="text-xs text-gray-500">Emiratisation</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-semibold flex items-center gap-1 ${sector.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                            {sector.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                            +{sector.change}%
                          </p>
                          <p className="text-xs text-gray-500">vs last month</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emiratisation Trend Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  Emiratisation Progress
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={emiratisationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="target" stroke="#9333ea" strokeWidth={2} name="Target" />
                    <Line type="monotone" dataKey="actual" stroke="#ec4899" strokeWidth={2} name="Actual" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Upcoming Schedule Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-orange-500" />
                    Upcoming Schedule
                  </h3>
                </div>
                <div className="space-y-3">
                  {upcomingSchedule.map((event) => (
                    <div
                      key={event.id}
                      className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chat Modal */}
      {showAIChat && <AIChatModal onClose={() => setShowAIChat(false)} />}
    </div>
  );
};

export default Dashboard;
