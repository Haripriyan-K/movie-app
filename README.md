🎬 Movie App

A responsive movie browsing application built with React and Vite. The app allows users to explore movies, search for titles, and manage their favorite movies.

Live Demo
https://hari-movie-app.vercel.app


✨ Features

* 🎥 Browse movies
* 🔍 Search for movies
* ❤️ Add movies to favorites
* 🗑️ Remove movies from favorites
* 📱 Responsive user interface
* ⚡ Fast development and build process with Vite
* 🌐 Movie data fetched from the TMDB API

🛠️ Tech Stack

* React – Frontend UI
* Vite – Build tool and development server
* JavaScript – Application logic
* CSS – Styling and responsive design
* TMDB API – Movie data and posters
* Vercel – Deployment

📂 Project Structure

movie-app/
├── public/
├── src/
│   ├── components/
│   ├── css/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

⚙️ Getting Started

1. Clone the repository

git clone https://github.com/Haripriyan-K/movie-app.git

2. Navigate to the project

cd movie-app

3. Install dependencies

npm install

4. Start the development server

npm run dev

The application will be available at the local URL shown in your terminal.

🔑 API

This project uses the TMDB API to retrieve movie information and poster images.

If your project requires an API key, create a .env file in the project root:

VITE_TMDB_API_KEY=your_api_key_here

Never commit your API key or .env file to GitHub.

📦 Build for Production

npm run build

To preview the production build locally:

npm run preview

☁️ Deployment

The application is deployed using Vercel.

Every new deployment can be connected to the GitHub repository for automatic builds and deployments.

📚 What I Learned

Through this project, I practiced:

* Building reusable React components
* Managing state in React
* Handling user interactions
* Working with APIs
* Displaying dynamic movie data
* Structuring a React application
* Using Vite for modern frontend development
* Deploying a React application with Vercel
