# Team Sensus - CS2 Esports Team Website

A modern, dark-themed Next.js website for Team Sensus, a competitive Counter-Strike 2 esports team.

## 🎮 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript with strict type safety
- **Styling**: Tailwind CSS v4
- **Font System**: System fonts for optimal performance

## 🚀 Features

- **Dark Gaming Aesthetic**: Modern, aggressive design with red accent colors (#ff4655)
- **Responsive Design**: Fully responsive on all devices with mobile-first approach
- **Hero Section**: Roster showcase with player cards
- **Recent Matches**: Match history with win/loss indicators
- **Navigation**: Responsive navbar with mobile menu
- **Footer**: Comprehensive footer with social links and navigation

## 📁 Project Structure

```
teamsensus/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & theme
├── components/            # React components
│   ├── navbar.tsx         # Responsive navigation
│   ├── hero.tsx           # Roster showcase
│   ├── recent-matches.tsx # Match history
│   ├── footer.tsx         # Site footer
│   └── ui/                # Future UI components
├── lib/                   # Utility functions
│   └── utils.ts           # className utilities
├── public/                # Static assets
└── tsconfig.json          # TypeScript configuration (strict mode)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design System

### Colors

- **Background**: `#0a0a0f` - Deep dark background
- **Secondary**: `#1a1a24` - Card backgrounds
- **Border**: `#2a2a3a` - Borders and dividers
- **Accent**: `#ff4655` - Primary red accent
- **Accent Hover**: `#ff6b77` - Hover state
- **Foreground**: `#f5f5f5` - Primary text
- **Muted**: `#6b7280` - Secondary text

### Typography

- System font stack for optimal performance
- Sans-serif for body text
- Monospace for code elements

## 🔒 Type Safety

The project uses strict TypeScript configuration with:
- `strict: true`
- `noUncheckedIndexedAccess: true`
- `noImplicitOverride: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `forceConsistentCasingInFileNames: true`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🤝 Contributing

This is a project for Team Sensus. For any changes or suggestions, please open an issue or pull request.

## 📄 License

© 2026 Team Sensus. All rights reserved.
