# Money Heist - Cinematic Scroll Experience

Day 9: 45 Days of Code Challenge

A high-end, immersive web experience inspired by the series "Money Heist" (La Casa de Papel). This project demonstrates advanced frontend techniques including sticky positioning, scroll-driven storytelling, and pure CSS cinematic effects without using heavy animation libraries.

---

## Project Overview

- Project Name: The Heist Experience
- Application Type: Interactive Storytelling Site
- Core Logic: React Hooks for scroll tracking and CSS Position Sticky for layout.
- Goal: To create a "Netflix-style" landing page with audio, parallax, and motion.

## Key Features

- Sticky Scroll Storytelling: Character sections remain pinned while content changes dynamically based on scroll percentage.
- Cinematic Atmosphere: Custom noise overlay, vignette effects, and magnetic cursor for immersion.
- Smart Image Fallback: Automatically loads high-quality backup images if local assets are missing.
- Audio Integration: Background theme ("Bella Ciao") with toggle controls.
- Netflix-Style Preloader: Smooth entry animation before the content reveals.
- Responsive Layout: Optimized for desktop and cinematic viewing.

## Technical Stack

- Frontend Library: React.js (Vite)
- Styling: Pure CSS (No Tailwind, No GSAP) - demonstrating raw CSS mastery.
- Icons: Lucide React
- Logic: Custom useScroll Hook, Intersection Observer.

## Project Structure

- src/components/CustomCursor.jsx: Handles the magnetic hover effect.
- src/hooks/useScroll.js: Optimized scroll tracking using requestAnimationFrame.
- src/App.jsx: Main orchestrator for the sticky sections and parallax logic.

## Installation and Setup

1. Clone the Repository
   git clone https://github.com/VYANKEE/Day9-MoneyHeist.git

2. Navigate to the Directory
   cd Day9-MoneyHeist

3. Install Dependencies
   npm install

4. Start the Application
   npm run dev

##live demo : https://day9-money-heist.vercel.app/
---

Developed by VYANKEE
