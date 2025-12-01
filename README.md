# 🐾 WarmPaws - Pet Care Services Platform

## 📋 Project Overview

**WarmPaws** is a comprehensive winter-focused pet care services platform designed to ensure furry friends stay warm, safe, and healthy during the cold season. The platform serves as a bridge between pet owners and essential winter pet care services, providing a user-friendly interface for service discovery, booking, and pet welfare support.

### 🎯 **Project Objectives**

1. **Seasonal Pet Care Focus**: Address specific winter challenges for pets including coat fitting, paw protection, and cold weather health monitoring
2. **Service Accessibility**: Simplify the process of finding and booking qualified pet care professionals
3. **Educational Resource**: Provide valuable winter pet care tips and expert veterinarian guidance
4. **Community Support**: Enable donations and support for pets in need during harsh winter conditions
5. **User Experience Excellence**: Deliver a modern, responsive, and intuitive platform for all pet care needs

### 🌟 **Project Specifications**

- **Project Type**: Single Page Application (SPA) with React
- **Target Audience**: Pet owners seeking winter-specific pet care services
- **Platform Compatibility**: Web-based, fully responsive (mobile, tablet, desktop)
- **Authentication System**: Secure user authentication with profile management
- **Data Management**: JSON-based service data with dynamic loading
- **Payment Integration**: Service booking system (frontend implementation)
- **Deployment**: Netlify-ready with environment variable configuration

## 🌐 Live Demo

[\[Live Link\]](https://warmpaws-store.netlify.app/)

## ✨ Key Features

### 🏠 **Core Functionality**

- **Winter-Themed Hero Carousel**: Auto-sliding showcase of pet care services with 5-second timer
- **Service Discovery**: Browse 6+ winter-specific pet care services with detailed information
- **Service Booking System**: Complete booking workflow with form validation and confirmation
- **Expert Veterinarian Directory**: Profiles of 4 specialized veterinarians with winter pet care expertise
- **Educational Content**: Daily rotating pet care tips with engaging animations

### 🔐 **Authentication & User Management**

- **Secure Registration**: Email/password with validation (uppercase, lowercase, 6+ characters)
- **Multi-Provider Login**: Email/password and Google OAuth integration
- **Profile Management**: Update profile information (name, photo) with real-time validation
- **Password Recovery**: Functional forgot password with email verification
- **Protected Routes**: Secure access to booking and profile features

### 🎨 **User Experience & Design**

- **Modern UI/UX**: Minimalist design with orange theme and professional aesthetics
- **Smooth Animations**: AOS (Animate On Scroll) library integration throughout the platform
- **Interactive Carousel**: Swiper.js implementation with navigation, pagination, and fade effects
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Toast Notifications**: Real-time user feedback for all actions and errors

### 💝 **Community & Support Features**

- **Donation Platform**: Comprehensive donation system to help pets in need
- **Impact Visualization**: Clear messaging about donation impact with multiple giving tiers ($25, $50, $100, $250)
- **Emergency Care Support**: Information about emergency medical care for winter-related pet issues
- **Shelter Support**: Platform to support homeless pets during cold seasons

### 🛡️ **Security & Performance**

- **Environment Variables**: Secure Firebase configuration using `.env.local`
- **Error Handling**: Comprehensive error management with user-friendly messages
- **Loading States**: Skeleton screens and loading indicators for better UX
- **SPA Routing**: Client-side routing with proper fallback handling

## 🛠️ Tech Stack

- **React 19.1.1** - Frontend framework
- **React Router DOM 7.9.4** - Routing
- **Tailwind CSS 4.1.16** - Styling
- **DaisyUI 5.3.10** - UI components
- **Firebase 12.5.0** - Authentication & backend
- **Swiper 12.0.3** - Carousel component
- **AOS 2.3.4** - Scroll animations
- **React Hot Toast 2.6.0** - Notifications
- **Vite 7.1.7** - Build tool

## 📦 Complete Package List

### **Core Dependencies**

- `react` `react-dom` - Core React framework
- `react-router-dom` - Client-side routing and navigation
- `firebase` - Authentication and backend services
- `tailwindcss` `daisyui` - Modern CSS framework with component library
- `vite` - Next-generation build tool

### **Enhanced User Experience**

- `swiper` - Modern carousel/slider with touch support
- `aos` - Animate On Scroll library for engaging animations
- `react-hot-toast` - Beautiful toast notifications
- `react-fast-marquee` - Smooth scrolling marquee effects

### **Development & Quality**

- `eslint` - Code linting and quality assurance
- `@vitejs/plugin-react` - Vite React plugin
- Various ESLint plugins for React development

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase account for authentication setup

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-MD-Saadman-Fuad.git
   cd WarmPaws
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Create `.env.local` file in the root directory
   - Add your Firebase configuration:

   ```bash
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-sender-id
   VITE_appId=your-firebase-app-id
   ```

4. **Firebase Setup**

   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Add your domain to authorized domains

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Architecture

### **Folder Structure**

```
src/
├── Components/          # Reusable UI components
│   ├── Carousel.jsx     # Hero carousel with Swiper
│   ├── ServiceSection.jsx  # Service grid display
│   ├── VetInfo.jsx      # Veterinarian directory
│   ├── DailyTips.jsx    # Educational tips marquee
│   ├── Donation.jsx     # Donation platform
│   └── Service Details/ # Service detail components
├── Pages/              # Main application pages
│   ├── Home.jsx        # Landing page with all sections
│   ├── Login.jsx       # Authentication forms
│   ├── Register.jsx    # User registration
│   ├── MyProfile.jsx   # Profile management
│   └── Services.jsx    # Services listing page
├── Routes/             # Routing configuration
│   ├── Router.jsx      # Main routing setup
│   └── PrivateRoute.jsx # Protected route wrapper
├── contexts/           # React context providers
│   └── AuthContext/    # Authentication state management
├── Firebase/           # Firebase configuration
└── Layouts/           # Page layout components
```

### **Data Structure**

- **Services**: 6 winter-specific pet care services with complete provider information
- **Veterinarians**: 4 expert profiles with specializations and experience
- **Tips**: Educational content for winter pet care
- **User Profiles**: Comprehensive user data with Firebase integration

## 🎯 Features Added

This project applies these features:

- ✅ **GitHub Commits**: 10+ meaningful commits with descriptive messages
- ✅ **README Documentation**: Comprehensive project documentation
- ✅ **Responsive Design**: Mobile, tablet, and desktop compatibility
- ✅ **Environment Variables**: Secure Firebase configuration
- ✅ **Unique Design**: Modern minimalist approach with winter pet care theme
- ✅ **SPA Behavior**: No errors on route reloads
- ✅ **Hosting Ready**: Netlify deployment configuration included

### **Advanced Features Implemented**

- ✅ **Password Validation**: Multi-criteria password requirements
- ✅ **Profile Updates**: Functional updateProfile() implementation
- ✅ **Forgot Password**: Email-based password recovery
- ✅ **Password Toggle**: Eye button for password visibility
- ✅ **Animation Libraries**: AOS, Swiper, React Hot Toast integration

---

**🐾 Made with ❤️ for pets and their families during winter season**
