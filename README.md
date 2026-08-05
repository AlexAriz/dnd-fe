## Overview

**Status:** Active development

This repository contains the frontend application for a personal D&D character management platform. The frontend communicates with a separate Fastify/PostgreSQL backend that is currently under active development and remains private while the project matures.

## Tech Stack

- Typescript
- React
- Redux Toolkit
- RTK Query
- [astryx](https://astryx.atmeta.com/)
- Tailwind CSS
- Supabase

## Design Decisions

The application uses a feature based folder structure to keep related UI, hooks, and components together. This makes features easier to evolve independently while reducing cross feature coupling.

The API communication is intentionally abstracted to allow the frontend to remain independent of backend implementation details.
