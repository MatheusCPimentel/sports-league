# 🏆 Sports Leagues Explorer

A modern, responsive web application for exploring sports leagues from around the world. Search and discover leagues across different sports, view their badges with an elegant and intuitive interface.

## ✨ Features

- 🔍 **Smart Search** - Search leagues by name with real-time results and debounced input
- 🎯 **Sport Filtering** - Filter leagues by specific sports or browse all at once
- 🖼️ **Badge Gallery** - Click on any league card to view its official badge and season information
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- ⚡ **Optimized Performance** - Smart caching with TanStack Query for lightning-fast data retrieval
- 🎨 **Modern UI** - Clean, intuitive interface built with Tailwind CSS

## 🎬 Demo

### Desktop View

![Desktop View](https://github.com/user-attachments/assets/311e83e8-53be-4f68-a399-14c24b1256f2)

### Mobile View

![Mobile View](https://github.com/user-attachments/assets/d6ae8b00-a502-49f1-85ec-5122bec68ebf)


## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd sports-leagues-project
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Built With

- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[TanStack Query](https://tanstack.com/query)** - Powerful asynchronous state management and caching
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

## 📂 Project Structure

```
sports-leagues-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── BadgeModal.tsx    # Modal to display league badges
│   │   │   ├── Dropdown.tsx      # Sport filter dropdown
│   │   │   ├── SearchBar.tsx     # Search input component
│   │   │   └── SportCard.tsx     # League card component
│   │   ├── layout.tsx
│   │   └── page.tsx              # Main application page
│   ├── hooks/
│   │   ├── useDebounce.ts        # Debounce hook for search
│   │   ├── useLeagues.ts         # League data fetching hooks
│   │   └── useSeasonBadges.ts    # Badge data fetching hook
│   └── services/
│       └── api.ts                # API service layer
├── public/
└── package.json
```

## 🎯 How It Works

1. **Browse Leagues** - The app displays sports leagues from around the world
2. **Search & Filter** - Use the search bar to find specific leagues by name, and filter by sport type
3. **View Details** - Click on any league card to open a modal showing the league's official badge and associated season information

## 🙏 Acknowledgments

Thanks to [TheSportsDB](https://www.thesportsdb.com/api/) for providing the comprehensive sports database API that powers this application.
