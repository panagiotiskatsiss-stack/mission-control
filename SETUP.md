# Mission Control - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd /Users/panos/.openclaw/workspace/mission-control
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:3000
```

---

## Development

### Project Structure
```
mission-control/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Main page
│   │   └── globals.css   # Global styles
│   └── components/       # Reusable components
│       ├── Dashboard.tsx
│       ├── Navigation.tsx
│       ├── StatCard.tsx
│       └── ToolWidget.tsx
├── package.json
└── tsconfig.json
```

### Adding New Tools

1. Create a new component in `src/components/YourTool.tsx`
2. Add it to the navigation in `Navigation.tsx`
3. Add a conditional render in `src/app/page.tsx`

Example:
```typescript
// src/components/MyNewTool.tsx
export default function MyNewTool() {
  return <div>Your tool here</div>;
}

// src/app/page.tsx - Add this:
{activeTab === 'mytool' && <MyNewTool />}
```

### Building for Production
```bash
npm run build
npm run start
```

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint

---

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

---

## Notes

- Dashboard is fully functional locally
- Components are extensible for adding custom tools
- All data is currently mocked (connect to real APIs later)
- Dark theme with blue accents
