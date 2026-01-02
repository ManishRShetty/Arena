# Arena

**A high-performance experimental sandbox for advanced web technologies.**

Arena serves as a testing ground for pushing the boundaries of the modern web stack. It is not just a portfolio, but a collection of isolated technical experiments demonstrating proficiency in WebGL, Real-time Communication (WebSockets), and Audio Synthesis.

**Live Environment:** [arena.manishshetty.dev](https://arena.manishshetty.dev)

## 🏗️ Engineering Architecture

This project is built as a **Next.js 15** application utilizing the **App Router** for improved route handling and server-side rendering capabilities.

-   **Framework**: Next.js 15 (App Router) & React 19
-   **Language**: TypeScript (Strict Mode enabled)
-   **Styling**: Tailwind CSS with a modular utility-first approach
-   **State**: React Server Components (RSC) & Client-side Hooks

### Key Technical Implementations

-   **Atomic Component Design**: UI elements are built as pure, stateless functions where possible, promoting reusability and testing.
-   **Strict Type Safety**: Comprehensive TypeScript interfaces for all data models (e.g., `Game` interfaces) to ensure build-time reliability.
-   **Optimized Rendering**: Leveraging Next.js 15's partial rendering and image optimization for sub-second First Contentful Paint (FCP).

```
## 🧪 Experimental Modules

The core value of this repository lies in the technical implementation of the hosted micro-apps:

### 1. Neon Horizon (WebGL / Three.js)
*Status: Prototype*
A procedural racing simulation.
-   **Core Tech**: Three.js, Custom GLSL Shaders.
-   **Challenge**: Managing high-performance 3D rendering loop within a React lifecycle without memory leaks.
-   **Implementation**: Utilizes `requestAnimationFrame` outside the React render cycle for stable 60fps performance.

### 2. Void Echo (Web Audio API)
*Status: Experimental*
A puzzle platformer relying on echolocation.
-   **Core Tech**: Web Audio API, HTML5 Canvas.
-   **Challenge**: Spatializing audio in real-time based on 2D vectors.
-   **Implementation**: Dynamic audio nodes created for each entity, connected to a master gain node for precise volume control.

### 3. Cyber Deck (Complex State / Algorithms)
*Status: Alpha*
A deck-building strategy game.
-   **Core Tech**: TypeScript, Reducer Pattern.
-   **Challenge**: Handling complex state mutations and turn-based logic.
-   **Implementation**: Uses a centralized state machine to handle game phases (Draw, Play, Discard, Enemy Turn).

### 4. Aether Realms (Real-time Networking)
*Status: Concept*
A multiplayer persistent world.
-   **Core Tech**: WebSockets (Socket.io), Node.js.
-   **Challenge**: Latency compensation and state synchronization across clients.
-   **Implementation**: Optimistic UI updates with server reconciliation.
```
## 🤝 Contribution & Development

We welcome contributions from the community. Please ensure you follow the engineering standards below.

### Setup
```bash
git clone https://github.com/ManishRShetty/Arena.git
cd Arena
npm install
npm run dev
```

### Standards
-   **Linting**: Ensure `npm run lint` passes before pushing.
-   **Commit Messages**: Use conventional commits (e.g., `feat: add new shader`, `fix: render loop memory leak`).
-   **Type Checking**: No `any` types allowed. Define interfaces for all props and state.

## ⚖️ License

Private source. Concepts and code snippets available for educational review.
