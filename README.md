# Oregon Septic - Premium Septic Services

A high-performance, SEO-optimized web application for **Oregon Septic**, the #1 rated septic service provider in Eugene, Springfield, and surrounding Lane County areas.

## 🚀 Features

- **Dynamic Service Catalog**: Detailed landing pages for pumping, inspections, installations, and emergency repairs.
- **Smart Scheduling Wizard**: A multi-step lead generation form with validation and local storage persistence.
- **AI-Powered Assistant**: Custom chatbot for instant customer inquiries and emergency routing.
- **SEO Ready**: Built-in `react-helmet-async` integration with LocalBusiness Schema.org structured data.
- **Admin Dashboard**: Secure owner access (`/admin`) to manage incoming leads and customer requests.
- **Content Management**: An "Editable Image" system that allows owners to swap site photos via drag-and-drop.
- **Fully Responsive**: Mobile-first design using Tailwind CSS and Lucide icons.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **SEO**: React Helmet Async
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/oregon-septic.git
   cd oregon-septic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

This project follows a flat-root structure optimized for rapid deployment and clarity:

- `/components`: Reusable UI elements (SEO, Scheduling, Chatbot, etc.)
- `/pages`: Main route components (Home, Services, Blog, Admin, etc.)
- `App.tsx`: Routing and layout configuration.
- `data.ts`: Centralized content store for services, blog posts, and testimonials.
- `types.ts`: TypeScript interface definitions.
- `index.html`: Main entry point with Tailwind CDN and custom fonts.

## 🔒 Security Note

The Admin Dashboard is currently protected by a simple demo password (`admin`). For production use, it is recommended to integrate a full Auth provider like Firebase or Supabase.

## 📄 License

© 2024 Oregon Septic LLC. All rights reserved.
