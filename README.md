# UAE Government HR Dashboard

An AI-powered HR Analytics Platform for the UAE Government to manage workforce data, track Emiratisation goals, monitor sector performance, and provide intelligent insights.

## Features

- **Real-Time Analytics**: Monitor workforce metrics and Emiratisation progress
- **AI Assistant**: Get intelligent insights and recommendations powered by AI
- **Predictive Insights**: Forecast trends and identify opportunities for improvement
- **12-Column Responsive Grid**: Fully responsive design that works on all devices
- **Role-Based Views**: Support for HR Manager and Department Head roles
- **Modern UI**: Gradient backgrounds, animations, and WCAG AAA accessibility

## Screens

### 1. Welcome Screen
- Animated landing page with gradient background
- Feature highlights (Real-Time Analytics, AI Assistant, Predictive Insights)
- "Get Started" button

### 2. Login Screen
- Email and password fields
- Demo mode (accepts any credentials)
- "Sign In" button

### 3. Main Dashboard
- **Sidebar**: Navigation menu, user profile, sector list, settings
- **Main Content**:
  - Critical Tasks card (5 columns)
  - Key Goals Progress card (5 columns)
  - Sectors Overview card (7 columns)
  - Emiratisation Progress chart (7 columns)
  - Upcoming Schedule calendar (7 columns)
- **Modals**: AI Chat Assistant, Alert Settings
- **Back to Homepage** button in sidebar

## User Flow

1. Welcome Screen → Click "Get Started"
2. Login Screen → Enter any credentials → Click "Sign In"
3. Dashboard → View tasks, goals, sectors, schedule
4. Return: Click "Back to Homepage" button (bottom of sidebar)

## Technology Stack

- **React** 18.3.1 with hooks (useState, useEffect)
- **Vite** 5.2.0 for fast development and building
- **Tailwind CSS** 3.4.1 for styling
- **Recharts** 2.10.3 for data visualization
- **Lucide React** 0.344.0 for icons
- Full responsive design

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server will start at `http://localhost:5173`

## Project Structure

```
uae-hr-dashboard/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── Dashboard.jsx
│   │   └── AIChatModal.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Key Features Breakdown

### Critical Tasks
- Priority indicators (High, Medium, Low)
- Due dates and status tracking
- Department assignments

### Key Goals Progress
- Visual progress bars
- Trend indicators (up/down)
- Status monitoring (on-track, needs-attention)

### Sectors Overview
- Employee count per sector
- Emiratisation percentage
- Performance ratings (excellent, good, needs-improvement)
- Month-over-month change trends

### AI Chat Assistant
- Intelligent responses based on workforce data
- Quick insights panel
- Context-aware recommendations
- Interactive chat interface

### Emiratisation Progress Chart
- Line chart showing target vs actual performance
- Monthly tracking
- Visual trend analysis

### Upcoming Schedule
- Calendar view of meetings and events
- Location and time details
- Event type categorization

## Demo Mode

The login screen operates in demo mode and accepts any email/password combination for testing purposes.

## Accessibility

- WCAG AAA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Accessible form labels

## License

UAE Government Initiative • Powered by Advanced Analytics

## Development Notes

This project was initialized and developed using modern React best practices with a focus on:
- Component reusability
- Clean code architecture
- Performance optimization
- User experience
- Accessibility standards
