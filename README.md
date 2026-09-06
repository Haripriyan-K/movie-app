# 🎬 Movie App

A responsive movie browsing application built with **React** and **Vite**. Explore movies, search for titles, and manage your favorites — all in a fast, modern frontend powered by the TMDB API.

**Live Demo:** [hari-movie-app.vercel.app](https://hari-movie-app.vercel.app)

---

## ✨ Features

- 🎥 Browse movies
- 🔍 Search for movies
- ❤️ Add movies to favorites
- 🗑️ Remove movies from favorites
- 📱 Responsive user interface
- ⚡ Fast development and build process with Vite
- 🌐 Movie data fetched from the TMDB API

---

## 🛠️ Tech Stack

| Category      | Technology         |
|----------------|--------------------|
| Frontend UI    | React              |
| Build Tool     | Vite               |
| Language       | JavaScript         |
| Styling        | CSS                |
| Data Source    | TMDB API           |
| Deployment     | Vercel             |

---

## 📂 Project Structure

```
movie-app/
├── public/
├── src/
│   ├── component/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── context/
│   │   └── MovieContext.jsx
│   ├── css/
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/Haripriyan-K/movie-app.git
```

### 2. Navigate to the project
```bash
cd movie-app
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```
The application will be available at the local URL shown in your terminal.

---

## 🔑 API Configuration

This project uses the [TMDB API](https://www.themoviedb.org/documentation/api) to retrieve movie information and poster images.

Create a `.env` file in the project root and add your API key:
```env
VITE_API_KEY=your_api_key_here
```

> ⚠️ **Never commit your API key or `.env` file to GitHub.**

---

## 📦 Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment

The application is deployed using **Vercel**. The GitHub repository is connected to Vercel for automatic builds and deployments on every new push.

---

## 📚 What I Learned

Through building this project, I practiced:

- Building reusable React components
- Managing state in React
- Handling user interactions
- Working with external APIs
- Displaying dynamic movie data
- Structuring a scalable React application
- Using Vite for modern frontend development
- Deploying a React application with Vercel

---

