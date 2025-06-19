# Contributing to Design System

Thank you for your interest in contributing to our Design System! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug Reports**: Report issues you find
- 💡 **Feature Requests**: Suggest new components or improvements
- 📝 **Documentation**: Improve docs, add examples, fix typos
- 🧩 **Components**: Add new components or improve existing ones
- 🎨 **Design**: Improve visual design, accessibility, or UX
- 🧪 **Testing**: Add tests or improve test coverage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Git

### Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Design-System.git
   cd Design-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   # Start Next.js app
   npm run dev
   
   # Start Storybook (in another terminal)
   npm run storybook
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Code will be formatted automatically
- **Naming**: Use descriptive names for components, functions, and variables

### Component Guidelines

When creating or modifying components:

1. **Follow the existing pattern**:
   ```tsx
   "use client"
   
   import * as React from "react"
   import { cn } from "@/lib/utils"
   
   interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
     // Add your props here
   }
   
   function Component({ className, ...props }: ComponentProps) {
     return (
       <div
         data-slot="component"
         className={cn("base-styles", className)}
         {...props}
       />
     )
   }
   
   export { Component }
   ```

2. **Add Storybook stories**:
   ```tsx
   import type { Meta, StoryObj } from '@storybook/react'
   import { Component } from './Component'
   
   const meta: Meta<typeof Component> = {
     title: 'UI/Component',
     component: Component,
     parameters: {
       layout: 'centered',
     },
     tags: ['autodocs'],
   }
   
   export default meta
   type Story = StoryObj<typeof Component>
   
   export const Default: Story = {
     render: () => <Component />,
   }
   ```

3. **Accessibility**: All components should be accessible
   - Use semantic HTML
   - Include proper ARIA attributes
   - Test with screen readers
   - Ensure keyboard navigation works

### Design Token Guidelines

When adding new design tokens:

1. **Update `tokens/tokens.json`** with new tokens
2. **Follow the naming convention**: `category.subcategory.variant`
3. **Add documentation** in Storybook
4. **Update the theme system** if needed

### Testing

- Write tests for new components
- Ensure existing tests pass
- Test accessibility features
- Test responsive behavior

## 📋 Pull Request Process

### Before Submitting

1. **Test your changes**:
   ```bash
   npm run lint          # Check for linting errors
   npm run test          # Run tests
   npm run build         # Ensure build works
   npm run storybook     # Check Storybook works
   ```

2. **Update documentation**:
   - Update README.md if needed
   - Add or update Storybook stories
   - Update component documentation

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new component"
   # Use conventional commit format
   ```

### Conventional Commits

Use conventional commit format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Pull Request Template

When creating a PR, include:

- **Description**: What changes were made
- **Type**: Feature, bug fix, documentation, etc.
- **Testing**: How you tested the changes
- **Screenshots**: If visual changes were made
- **Breaking Changes**: If any (rare for design systems)

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, include:

1. **Clear description** of the issue
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Environment details**:
   - Browser and version
   - Operating system
   - Node.js version
5. **Screenshots** if applicable
6. **Console errors** if any

### Feature Requests

When requesting features:

1. **Clear description** of the feature
2. **Use case** and why it's needed
3. **Proposed implementation** (if you have ideas)
4. **Examples** from other design systems (if applicable)

## 🎨 Design Contributions

### Visual Design

- Follow the existing design language
- Use the established color palette
- Maintain consistency with other components
- Consider accessibility (contrast, color blindness)

### UX Improvements

- Focus on usability
- Consider mobile and desktop experiences
- Test with real users when possible
- Document interaction patterns

## 📚 Documentation

### Component Documentation

Each component should have:

- **Purpose**: What the component is for
- **Props**: All available props with types
- **Examples**: Common use cases
- **Accessibility**: Notes about accessibility features
- **Best Practices**: Usage guidelines

### Storybook Stories

- **Default story**: Basic usage
- **Variants**: Different states/props
- **Interactive examples**: Show functionality
- **Accessibility**: Demonstrate accessibility features

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Use welcoming and inclusive language
- Be collaborative and constructive
- Focus on what is best for the community
- Show empathy towards other community members

### Enforcement

- Unacceptable behavior will not be tolerated
- Project maintainers have the right to remove contributions
- Instances of unacceptable behavior may be reported

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Check the README and Storybook first

## 🎉 Recognition

Contributors will be recognized in:

- GitHub contributors list
- Project README (for significant contributions)
- Release notes

---

Thank you for contributing to our Design System! 🎉 