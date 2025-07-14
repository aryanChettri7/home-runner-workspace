# SDtec - Charitable Giving Platform

## Overview

SDtec is a full-stack web application designed to restore trust in charitable giving through real-time impact tracking and verified results. The platform serves as a transparency tool connecting donors, charities, and corporate funders with real-time visibility into how donations are used.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Build System**: esbuild for production builds

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Development Database**: Uses environment variable DATABASE_URL
- **Error Handling**: Custom error overlay for development
- **Type Checking**: Shared TypeScript configuration across client/server

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Managed through Drizzle Kit in `./migrations` directory

### Authentication System
- **Storage Interface**: Abstract storage layer with in-memory fallback
- **User Management**: CRUD operations for user creation and retrieval
- **Session Handling**: PostgreSQL-based session storage for production

### Frontend Components
- **Landing Page**: Marketing site with problem/solution presentation
- **Component Library**: Comprehensive UI components using Radix primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme System**: CSS custom properties for light/dark mode support

### API Structure
- **REST API**: Express.js routes with `/api` prefix
- **Request Logging**: Automated logging of API requests with timing
- **Error Handling**: Centralized error handling middleware
- **Type Safety**: Shared types between frontend and backend

## Data Flow

### Client-Server Communication
1. **API Requests**: React Query manages HTTP requests to Express backend
2. **Authentication**: Session-based authentication with PostgreSQL storage
3. **Data Fetching**: Centralized query client with error handling
4. **Real-time Updates**: Prepared for WebSocket integration (server setup ready)

### Database Operations
1. **Connection**: Neon Database serverless PostgreSQL connection
2. **ORM**: Drizzle ORM provides type-safe database operations
3. **Migrations**: Drizzle Kit handles schema migrations
4. **Session Storage**: Connect-pg-simple manages user sessions

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Session Management**: PostgreSQL-based session storage
- **Development Tools**: TSX for TypeScript execution, Vite for frontend

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting (configured via shadcn/ui)
- **Vite**: Fast development server and build tool
- **Drizzle Kit**: Database schema management

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Environment**: Uses NODE_ENV for environment-specific configurations

### Development Workflow
- **Hot Reload**: Vite HMR for instant frontend updates
- **TypeScript**: Watch mode for type checking
- **Database**: Local development uses same PostgreSQL setup as production
- **Session Storage**: In-memory storage for development, PostgreSQL for production

### Infrastructure Requirements
- **Database**: PostgreSQL database (Neon Database recommended)
- **Environment Variables**: DATABASE_URL for database connection
- **Static Assets**: Served from `dist/public` directory
- **Session Storage**: PostgreSQL table for session management

The application is designed as a monorepo with shared types and utilities, making it easy to maintain consistency between frontend and backend while supporting both development and production environments.