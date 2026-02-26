---
name: magbo-frontend-standards
description: Best practices for React, Tailwind, and GSAP animations in the MAGBO STUDIO repository.
---

# MAGBO STUDIO Frontend Development Standards

This skill defines the strict architectural, stylistic, and performance guidelines for developing within the MAGBO STUDIO frontend repository. As an AI Agent working on this codebase, you MUST adhere to these rules.

## 1. Core Architecture (React & TypeScript)
*   **Framework**: Use standard React (Vite).
*   **Types**: Always enthusiastically use strictly typed Data Models and Interfaces. Avoid `any`.
*   **Components**: Prefer functional components with React Hooks. Keep components small, focused, and pure where possible.
*   **File Structure**: 
    *   `/src/components/`: Reusable, atomic UI elements.
    *   `/src/views/` or `/src/pages/`: Full page layouts composed of components.
    *   `/src/layout/`: Global wrappers (MainLayout, Navigation, Footer).
*   **Imports**: Use absolute path aliases (`@/components/...`) over relative paths (`../../components/...`).

## 2. Styling (Tailwind CSS)
*   **Utility-First**: Use Tailwind CSS utility classes exclusively. Avoid writing custom CSS in `index.css` unless absolutely necessary (e.g., custom cursors, hiding scrollbars).
*   **Aesthetic Priority**: This project uses a **Maximalist Minimal** aesthetic.
    *   Embrace large typography, stark contrasts, and ample negative space.
    *   Do NOT use generic colors. Rely on the custom `anyflow` palette defined in `tailwind.config.js` (`anyflow-bg`, `anyflow-black`, `anyflow-lime`).
*   **Typography**: 
    *   Use `font-display` (Bebas Neue) for all massive headers and attention-grabbing text. Always use `uppercase` and `tracking-tighter` with `font-display`.
    *   Use `font-body` (Inter) for all readable paragraph text.

## 3. Motion & Interaction (GSAP)
*   **Library**: ONLY use **GSAP** (`gsap`, `@gsap/react`, `ScrollTrigger`) for animations. Do NOT use Framer Motion (except for the existing Custom Cursor) or raw CSS transitions for complex sequencing.
*   **React Integration**: Always use the `useGSAP` hook from `@gsap/react` to manage timelines and automatically handle cleanup/reverting on unmount.
*   **Re-renders**: Provide a `scope` (`{ scope: containerRef }`) to `useGSAP` to limit selector scope and improve performance.
*   **Scroll Animations**: When using `ScrollTrigger`, ensure the trigger points (`start`, `end`) are logical for the viewport size.
*   **Performance Engine**: The app uses `Lenis` for smooth scrolling, which is tied to the `gsap.ticker`. Never implement your own scroll hijacking.

## 4. Code Quality & Linting
*   **Clean Code**: Ensure there are no unused imports, variables, or empty interfaces.
*   **Explicitness**: Do not guess logic. If the user requests a feature, write the complete implementation (no `// ... existing code` placeholders in your final output).

## Workflow when applying this skill
When instructed to build a new view or component:
1.  **Analyze**: Understand the data requirements and the visual goal.
2.  **Scaffold**: Create the TSX file, import necessary hooks (`useRef`), styles, and `useGSAP`.
3.  **Structure & Style**: Build the DOM structure using semantic HTML and the `anyflow` Tailwind palette. Ensure typography matches the guidelines.
4.  **Animate**: Apply entrance and scroll-triggered animations via `useGSAP`. Ensure smooth, performant execution.
