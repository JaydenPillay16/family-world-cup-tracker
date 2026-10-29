# ⚽ Family World Cup Tracker 2026

A modern, interactive football tournament tracker built to bring family competition to life. Follow match results, track team ownership, calculate group standings, and compete for the top spot on the family leaderboard.

**[🌐 View Live Application](https://family-world-cup-tracker.vercel.app/)**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## 📖 Overview

Family World Cup Tracker is a responsive web application designed to manage and follow a family football tournament inspired by the 2026 FIFA World Cup.

The application brings tournament information together in one place, combining match results, group-stage standings, team ownership and a points-based leaderboard. It automatically calculates scores from completed matches, allowing the leaderboard and standings to reflect match outcomes.

The project demonstrates practical application development using React and TypeScript, reusable UI components, data processing, API integration, version control and cloud deployment.

## ✨ Features

### 🏆 Tournament Dashboard
- Tournament overview with key statistics.
- Current leader, leading score and lead-gap indicators.
- Championship podium highlighting the top three participants.
- Recent match results.
- Automatic periodic match-data refresh.

### ⚽ Match Centre
- Match cards displaying competing teams, flags and scores.
- Group identification and match status.
- Results organized in a responsive grid.
- Support for tournament match data from the configured data source.

### 📊 Group Standings
- Group tables displaying team positions.
- Matches played, wins, draws and losses.
- Goal difference and points.
- Standings calculated from available completed match results.

### 👥 Team Ownership
- Assigned teams grouped by family member.
- Individual and total points contributions.
- Leaderboard rankings based on calculated points.
- Visual distinction for the leading participant.

### 🎨 User Interface
- Custom stadium-inspired background and dark theme.
- Gold-accented visual design.
- Country flags and tournament branding.
- Responsive layouts and interactive card effects.
- Consistent styling across the dashboard, teams, matches and standings pages.

### 🔄 Data Processing
- Centralized match retrieval through a match service.
- Reusable leaderboard and standings calculations.
- Team-name normalization to handle naming differences between data sources.
- Periodic data refresh to keep displayed results up to date.

> **Note:** Data freshness depends on the configured match-data provider, API availability and the refresh interval. Periodic refresh does not guarantee real-time scores.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type safety and maintainable application code |
| Vite | Development server and production build tooling |
| Tailwind CSS | Responsive styling and UI design |
| React Country Flag | Country flag rendering |
| REST API integration | Retrieving football match data |
| Git & GitHub | Version control and source-code hosting |
| Vercel | Application deployment and hosting |

## 🏗️ Application Architecture

The application uses a component-based structure, separating page rendering, reusable UI, data retrieval and calculation logic.

```text
family-world-cup-tracker/
├── public/
├── src/
│   ├── assets/          # Images and visual assets
│   ├── components/     # Shared UI components
│   ├── constants/      # Team mappings and constants
│   ├── pages/          # Dashboard, Teams, Matches, Standings
│   ├── services/       # Match data retrieval
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Leaderboard and standings logic
│   ├── App.tsx         # Application layout and navigation
│   └── main.tsx        # Application entry point
├── .env.example        # Example environment configuration, if included
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The directory tree describes the intended organization. Adjust filenames to match the current repository.*

### Data flow

1. The match service retrieves match data from the configured source.
2. TypeScript types define the structure of match records.
3. Calculation utilities process completed results.
4. The leaderboard and group standings derive their values from the match data.
5. React components render the updated tournament information.

This separation makes the application easier to maintain, test and extend.

---

## 🚀 Getting Started

Follow these instructions to run the application locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — a supported current LTS release.
- npm, included with Node.js.
- [Git](https://git-scm.com/).
- A football-data API key if your configured data provider requires one.

### 1. Clone the repository

```bash
git clone https://github.com/JaydenPillay16/family-world-cup-tracker.git
```

### 2. Navigate to the project directory

```bash
cd family-world-cup-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

If the application uses an API key, create a `.env.local` file in the project root and add the variable expected by your match service.

For example, if your code uses Vite environment variables:

```env
VITE_FOOTBALL_API_KEY=your_api_key_here
```

**Important:** The variable name above is an example. Use the exact name expected by your implementation.

Variables prefixed with `VITE_` are exposed to client-side code. Never place private server-side API keys in client-exposed variables. For providers requiring a secret key, use a server-side function or secure API proxy instead.

Do not commit `.env.local` or other files containing credentials.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed in your terminal, usually:

```text
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

This runs the configured TypeScript build checks and creates an optimized production build in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

The application is hosted on Vercel and connected to GitHub for source control and deployment.

**Live website:** https://family-world-cup-tracker.vercel.app/

To deploy updates:

1. Make and test your changes locally.
2. Run `npm run build` and resolve any errors.
3. Commit and push your changes to GitHub.
4. Allow Vercel to build and deploy the updated application.

```bash
git add .
git commit -m "Describe your changes"
git push
```

If environment variables are required in production, configure them in the Vercel project settings and redeploy.

---

## 🧠 Engineering Highlights

This project provides practical experience with:

- **Component-based architecture:** Reusable React components and dedicated page components.
- **Type-safe development:** TypeScript interfaces and typed application data.
- **Data transformation:** Calculating leaderboard scores and group standings from match results.
- **Data consistency:** Normalizing team names across differing data sources.
- **Asynchronous operations:** Retrieving match data and updating React state.
- **Responsive UI development:** Building a consistent interface for different screen sizes.
- **Version control:** Managing source code and incremental changes with Git and GitHub.
- **Deployment workflows:** Building and publishing a production application through Vercel.
- **Environment configuration:** Managing API configuration and understanding credential security.

## 🔮 Potential Future Enhancements

- Expanded tournament coverage, including knockout rounds.
- Improved match filtering by team, group and status.
- Detailed team and match views.
- Better loading, error and empty states.
- Automated unit and integration tests for standings and scoring logic.
- Enhanced accessibility and mobile-specific refinements.
- More robust API error handling and data caching.

## 👨‍💻 Author

**Jayden Pillay**  
Software Engineer | Cloud Engineering | Application Development

- GitHub: [@JaydenPillay16](https://github.com/JaydenPillay16)
- Portfolio: [View my portfolio](https://jayden-pillay.co.za)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/jayden-pillay-44947a261/)

---

*Built as a hands-on software engineering project to explore modern web development, football data processing and application deployment.*
