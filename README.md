# 🎮 Game Shelf

Game Shelf is a small Angular project I built to learn and experiment with the fundamentals of Angular.

The goal of the project was not just to build a working application, but to understand the concepts and architecture behind it while developing it.

## 📚 What I Learned

While building Game Shelf, I worked with Angular and TypeScript concepts such as:

- Components
- Component hierarchy
- Data binding and interpolation
- Component inputs
- Component outputs and events
- Angular control flow (`@for`)
- Forms and `FormsModule`
- Two-way binding with `ngModel`
- TypeScript types and null handling
- Working with arrays
- Local storage
- JSON serialization and parsing
- Component and global CSS

## 🕹️ About the Project

Game Shelf is a simple application for keeping track of video games.

Each game contains:

- Title
- Status (`Playing`, `Shelved`, or `Wishlist`)
- Rating

New games can be added through a form and are displayed dynamically as game cards.

The application uses local storage to persist the game collection, allowing added games to remain available after refreshing or reopening the application.

## 🧩 Component Structure

The application is split into a few small components:

- **GameList** manages the collection of games.
- **GameForm** handles user input and emits newly created games to the game list.
- **GameCard** receives game data through inputs and displays an individual game.

This structure helped me understand how data can move between parent and child components in Angular.

## 🛠️ Built With

- Angular
- TypeScript
- HTML
- CSS

## ✅ Status

Game Shelf is complete.

It was intentionally kept small and focused on learning the fundamentals of Angular rather than building a large or production-ready application.

## 🎯 What I Took Away

The main goal of Game Shelf was to become more comfortable with Angular before moving on to larger projects.

Rather than only getting the application to work, I focused on understanding why the code works, how the components communicate, and how data moves through the application.
