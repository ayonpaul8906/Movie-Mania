<!-- PROJECT HEADER -->
<h1 align="center">🎬 Movie Mania</h1>
<p align="center">
  Discover trending films, filter by genre, and build your personal Watchlist — powered by the TMDb API.
</p>

<p align="center">
  <a href="https://www.themoviedb.org/documentation/api"><img alt="TMDb" src="https://img.shields.io/badge/TMDb-API-01d277.svg?logo=themoviedatabase&logoColor=white"></a>
  <img alt="React" src="https://img.shields.io/badge/React-18+-61dafb.svg?logo=react&logoColor=000">
  <img alt="Axios" src="https://img.shields.io/badge/Axios-HTTP%20Client-5a29e4.svg">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

---

## ✨ Features

- **Trending & Popular** — Browse high-quality posters and titles from TMDb.
- **Genre Filters** — Quickly switch between categories (e.g., Sci-Fi, Horror).
- **Search & Sort** — Search by title; sort by **ratings** or **popularity** (asc/desc).
- **Watchlist** — Add/remove movies; persisted client-side for a smooth UX.
- **Clean, Responsive UI** — Simple navigation: **Home** & **Watchlist**.

---

## 🖼️ Screenshots

| Home | Watchlist |
|------|-----------|
|<img width="1907" height="909" alt="image" src="https://github.com/user-attachments/assets/c8af5703-719b-48ce-be39-3adb193ea1bd" /> | <img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/f6cfcd58-4996-4c85-a34c-baf72c8e6fd9" /> |

---

## 🧰 Tech Stack

- **React** (Hooks)
- **Axios** for API calls to **TMDb**
- **JavaScript (ES6+)**, **CSS**
- Client-side persistence (e.g., `localStorage`) for the watchlist

---

## 📦 Project Structure

Movie-Mania/
└─ frontend/
├─ public/
│ └─ logo.png
├─ src/
│ ├─ components/
│ │ ├─ Banner.jsx
│ │ ├─ Card.jsx
│ │ ├─ Movies.jsx
│ │ ├─ Navbar.jsx
│ │ ├─ Pagination.jsx
│ │ └─ Watchlist.jsx
│ ├─ utility/
│ │ └─ genre.js
│ ├─ App.css
│ ├─ App.jsx
│ └─ main.jsx
├─ .env
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ vite.config.js 
└─ README.md

