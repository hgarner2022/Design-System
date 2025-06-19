# Design System

A comprehensive design system built with React, TypeScript, and Tailwind CSS. This project provides reusable components, design tokens, and documentation for building consistent user interfaces.

## 🚀 Features

- 🎨 **Design Tokens**: Consistent colors, typography, spacing, and semantic color system
- 🧩 **Component Library**: 50+ reusable React components with TypeScript
- 📚 **Storybook Documentation**: Interactive component documentation with live examples
- 🎯 **Accessibility First**: All components built with Radix UI primitives for accessibility
- 🌙 **Theme Support**: Built-in theme switching and design token system
- 📱 **Responsive Design**: Mobile-first responsive components
- 🎨 **Color System**: Comprehensive color palette with semantic meanings
- 🔧 **Developer Experience**: Hot reload, TypeScript, and comprehensive tooling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hgarner2022/Design-System.git
   cd Design-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Storybook

### Local Development

To view the component documentation and design tokens locally:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to explore the design system.

### Live Documentation

View the live documentation at: [https://hgarner2022.github.io/Design-System/](https://hgarner2022.github.io/Design-System/)

## 🧩 Available Components

### UI Components
- **Alert & AlertDialog** - Notifications and confirmations
- **Button** - Interactive buttons with variants
- **Calendar** - Date picker component
- **Card** - Content containers
- **Checkbox** - Selection controls
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Form** - Form components with validation
- **Input** - Text input fields
- **Label** - Form labels
- **Popover** - Floating content
- **Progress** - Progress indicators
- **Radio Group** - Radio button groups
- **Select** - Dropdown selections
- **Slider** - Range inputs
- **Switch** - Toggle switches
- **Tabs** - Tabbed interfaces
- **Textarea** - Multi-line text inputs
- **Tooltip** - Hover information

### Design System
- **ColorPicker** - Color selection component
- **SemanticColors** - Design token documentation
- **QuickColors** - Color utilities

### Complex Components
- **Carousel** - Image/content carousel
- **Chart** - Data visualization
- **Command** - Command palette
- **Context Menu** - Right-click menus
- **Drawer** - Slide-out panels
- **Navigation Menu** - Site navigation
- **Pagination** - Page navigation
- **Resizable** - Resizable panels
- **Scroll Area** - Custom scrollbars
- **Sheet** - Side panels
- **Sidebar** - Application sidebar
- **Skeleton** - Loading placeholders
- **Sonner** - Toast notifications
- **Table** - Data tables

## 📁 Project Structure

```
design-system/
├── src/
│   ├── components/
│   │   ├── ui/           # Atomic UI components
│   │   │   ├── *.tsx     # Component files
│   │   │   └── *.stories.tsx  # Storybook stories
│   │   └── pro-blocks/   # Complex component blocks
│   ├── app/              # Next.js app directory
│   ├── lib/              # Utilities and helpers
│   ├── styles/           # Global styles
│   └── stories/          # Additional documentation
├── .storybook/           # Storybook configuration
├── tokens/               # Design tokens (JSON)
├── scripts/              # Build and utility scripts
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI primitives
- **Documentation**: Storybook 8.6.14
- **Testing**: Vitest
- **Linting**: ESLint
- **Package Manager**: npm

## 🎨 Design Tokens

The design system uses a comprehensive token system including:

- **Colors**: Primary, secondary, semantic colors (success, warning, error, info)
- **Typography**: Font families, sizes, weights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation and depth
- **Borders**: Border radius and styles

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start Next.js development server
npm run storybook        # Start Storybook development server

# Building
npm run build            # Build Next.js application
npm run build-storybook  # Build Storybook for production

# Testing
npm run test             # Run tests with Vitest
npm run test:components  # Test components specifically

# Linting
npm run lint             # Run ESLint

# Utilities
npm run build-theme      # Build design tokens
npm run update-registry  # Update component registry
```

## 🤝 Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Documentation**: [https://hgarner2022.github.io/Design-System/](https://hgarner2022.github.io/Design-System/)
- **GitHub Repository**: [https://github.com/hgarner2022/Design-System](https://github.com/hgarner2022/Design-System)
- **Issues**: [https://github.com/hgarner2022/Design-System/issues](https://github.com/hgarner2022/Design-System/issues)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
