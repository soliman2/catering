// Mock data for UAE Government HR Dashboard

export const criticalTasks = [
  {
    id: 1,
    title: 'Review Emiratisation Report',
    priority: 'high',
    dueDate: '2025-10-30',
    status: 'pending',
    department: 'HR Analytics'
  },
  {
    id: 2,
    title: 'Update Workforce Plan Q4',
    priority: 'high',
    dueDate: '2025-10-29',
    status: 'in-progress',
    department: 'Strategic Planning'
  },
  {
    id: 3,
    title: 'Approve Training Budget',
    priority: 'medium',
    dueDate: '2025-11-01',
    status: 'pending',
    department: 'L&D'
  },
  {
    id: 4,
    title: 'Conduct Performance Reviews',
    priority: 'medium',
    dueDate: '2025-11-05',
    status: 'pending',
    department: 'Performance Management'
  }
];

export const keyGoals = [
  {
    id: 1,
    name: 'Emiratisation Target',
    current: 68,
    target: 75,
    unit: '%',
    trend: 'up',
    status: 'on-track'
  },
  {
    id: 2,
    name: 'Employee Satisfaction',
    current: 82,
    target: 85,
    unit: '%',
    trend: 'up',
    status: 'on-track'
  },
  {
    id: 3,
    name: 'Training Hours/Employee',
    current: 35,
    target: 40,
    unit: 'hrs',
    trend: 'up',
    status: 'on-track'
  },
  {
    id: 4,
    name: 'Turnover Rate',
    current: 8.5,
    target: 7,
    unit: '%',
    trend: 'down',
    status: 'needs-attention'
  }
];

export const sectors = [
  {
    id: 1,
    name: 'Healthcare',
    employees: 12450,
    emiratisation: 72,
    trend: 'up',
    change: 2.3,
    performance: 'excellent'
  },
  {
    id: 2,
    name: 'Education',
    employees: 18200,
    emiratisation: 78,
    trend: 'up',
    change: 1.8,
    performance: 'excellent'
  },
  {
    id: 3,
    name: 'Transportation',
    employees: 8900,
    emiratisation: 65,
    trend: 'up',
    change: 3.1,
    performance: 'good'
  },
  {
    id: 4,
    name: 'Finance',
    employees: 6750,
    emiratisation: 71,
    trend: 'stable',
    change: 0.5,
    performance: 'good'
  },
  {
    id: 5,
    name: 'Technology',
    employees: 5400,
    emiratisation: 58,
    trend: 'up',
    change: 4.2,
    performance: 'needs-improvement'
  },
  {
    id: 6,
    name: 'Tourism',
    employees: 9800,
    emiratisation: 62,
    trend: 'up',
    change: 2.9,
    performance: 'good'
  }
];

export const upcomingSchedule = [
  {
    id: 1,
    date: '2025-10-29',
    time: '09:00',
    title: 'Quarterly HR Review',
    type: 'meeting',
    location: 'Conference Room A'
  },
  {
    id: 2,
    date: '2025-10-29',
    time: '14:00',
    title: 'Emiratisation Committee',
    type: 'meeting',
    location: 'Virtual'
  },
  {
    id: 3,
    date: '2025-10-30',
    time: '10:00',
    title: 'Training Workshop',
    type: 'event',
    location: 'Training Center'
  },
  {
    id: 4,
    date: '2025-10-31',
    time: '11:00',
    title: 'Budget Review',
    type: 'meeting',
    location: 'Executive Office'
  },
  {
    id: 5,
    date: '2025-11-01',
    time: '15:00',
    title: 'Performance Analytics Review',
    type: 'meeting',
    location: 'Virtual'
  }
];

export const emiratisationData = [
  { month: 'Jan', target: 70, actual: 68 },
  { month: 'Feb', target: 71, actual: 69 },
  { month: 'Mar', target: 71, actual: 70 },
  { month: 'Apr', target: 72, actual: 71 },
  { month: 'May', target: 72, actual: 72 },
  { month: 'Jun', target: 73, actual: 72 },
  { month: 'Jul', target: 73, actual: 73 },
  { month: 'Aug', target: 74, actual: 74 },
  { month: 'Sep', target: 74, actual: 73 },
  { month: 'Oct', target: 75, actual: 74 }
];

export const aiInsights = [
  {
    id: 1,
    type: 'recommendation',
    priority: 'high',
    title: 'Technology Sector Needs Focus',
    message: 'The Technology sector is 17% below the Emiratisation target. Recommend implementing targeted recruitment programs and partnerships with UAE universities.',
    action: 'View Details'
  },
  {
    id: 2,
    type: 'alert',
    priority: 'medium',
    title: 'Turnover Rate Increasing',
    message: 'Employee turnover has increased by 1.2% this quarter. Exit interview analysis suggests career development opportunities as a key factor.',
    action: 'Review Analysis'
  },
  {
    id: 3,
    type: 'insight',
    priority: 'low',
    title: 'Training Budget Optimization',
    message: 'AI analysis shows that digital training programs have 35% higher completion rates. Consider reallocating 20% of traditional training budget.',
    action: 'View Recommendations'
  }
];
