# PokeXplore

PokeXplore is a Pokédex app to browse, search, view details, and compare Pokémon stats side by side—perfect for quick access to Pokémon info.

## Getting Started

Install dependencies:

> _NB: Dependencies are managed using [`pnpm`](https://pnpm.io/installation) only_

```bash
pnpm install
```

Update env with base URL

Run the development server:

```bash
pnpm dev
```

## Base Folder Architecture

```text
public
src
├─ __mocks__ (Mock files for testing)
├─ __tests__ (Test files)
├─ assets  (Images, Videos, Audios, SVGs, Fonts... etc)
│  ├─ images
│  └─ svgs
├─ components  (Shared components)
├─ composables (Shared composables/resuable atomic components)
├─ config   (App configurations)
├─ hocs (Higher-order components)
├─ hooks   (Resuable hooks)
├─ interfaces (TS types and interfaces)
├─ layouts  (Layout component wrappers)
├─ libs  (Extendable libraries like apollow, react-query)
├─ styles (Styling (CSS files))
├─ utils   (Utility or helper functions)
├─ jest.setup.mjs (Jest setup)
└─ env.ts (Env validation)
```
