# Simran AI/ML Portfolio

## Goal
Build a premium, responsive one-page portfolio that immediately presents Simran as an AI/ML engineer while using only the supplied education, skills, projects, interests, and contact details.

## Experience
- Create a sticky glass-effect navigation bar with active-section highlighting and a mobile menu.
- Build a full-viewport two-column opening section with strong typography, contact actions, and a lightweight animated neural-network interface drawn in the page rather than using stock imagery.
- Add About, categorized Skills, AI Stack workflow, Featured Projects, What I Work With, Career Interests, Contact, and Footer sections in the requested order.
- Make the AI Resume Builder project visually prominent and provide keyboard-accessible project detail dialogs for all three projects.
- Use mail and phone links directly; present GitHub as “Coming soon” without inventing a profile URL.

## Visual direction
- Deep navy/near-black foundation with restrained electric blue, violet, and cyan highlights.
- Space Grotesk headings with Manrope body text, sharp technical geometry, subtle grid texture, fine glowing borders, and limited soft gradients.
- Lightweight motion for text reveals, neural nodes, workflow connections, card interactions, and section entrances, with reduced-motion support.
- Responsive layouts that collapse cleanly to a single column and remain touch-friendly without horizontal overflow.

## Technical details
- Keep the existing TanStack Start structure and implement the page at `/`.
- Define the full semantic token system and reusable animation utilities in the global stylesheet.
- Add reusable React sections and structured data arrays in the home route, using Lucide icons and CSS-driven motion to avoid unnecessary runtime weight.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Verify desktop and mobile rendering, interactions, keyboard behavior, and browser console output.
