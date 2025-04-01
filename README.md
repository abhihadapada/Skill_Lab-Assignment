# BookMyShow 2.0 - React Frontend Clone

![BookMyShow Clone Screenshot](./screenshot.png)

A responsive frontend clone of BookMyShow built with React.js, Vite, and Bootstrap. This application mimics the core UI/UX of BookMyShow with movie listings, events, sports, and ticket booking functionality.

## Features

- **Responsive Navigation Bar** with logo, menu items, search, and user profile
- **Featured Content Carousels** for movies and events
- **Movie Listings Page** with grid/table views and filtering options
- **Events & Sports Pages** with detailed event cards
- **Bootstrap 5** for responsive design
- **Font Awesome** for icons
- **React Router** for navigation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bookmyshow-2.0.git
   cd bookmyshow-2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Carousel.jsx       # Reusable carousel component
│   ├── Footer.jsx         # Site footer
│   ├── MovieCard.jsx      # Movie card component
│   ├── Navbar.jsx         # Main navigation
├── pages/
│   ├── Events.jsx         # Events listing page
│   ├── Home.jsx           # Home page
│   ├── Movies.jsx         # Movies listing page
│   ├── Sports.jsx         # Sports events page
├── App.jsx                # Main app component
├── main.jsx               # Entry point
├── index.css              # Global styles
```

## Dependencies

- React 18
- React Router 6
- Bootstrap 5
- Font Awesome 6
- React Bootstrap

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Customization

To customize the content:
1. Update movie data in `pages/Movies.jsx`
2. Modify events in `pages/Events.jsx`
3. Change sports data in `pages/Sports.jsx`
4. Adjust styles in `index.css`

