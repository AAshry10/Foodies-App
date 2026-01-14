<div id="top"></div>

<div align="left">

# Foodies App — Next.js Practice Project

Concepts : 
- App Router (Next.js)
- Server Components & Client Components
- Dynamic Routes (/meals/[slug])
- Loading / Error / Not Found UI
- Server Actions (Form Actions)
- Caching & Revalidation (revalidatePath)
- Basic form validation + file upload handling

A Next.js practice project (Udemy “Next.js / React Course”) to browse meals and view meal details. Includes a “Share Meal” form (server action) to submit new meals.

<img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/SQLite-003B57.svg?style=flat&logo=sqlite&logoColor=white" alt="SQLite">

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run The App](#Run)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

This app simulates a simple “meals community” flow:
- Browse meals
- Open a meal details page
- Share a new meal via a form (Server Action)

Note: 
- Meals are stored locally in a SQLite database (meals.db) and images are saved into public/images.
  
---

## Features

- Meals list page (/meals)
- Meal details page (/meals/[slug])
- Share meal page (/meals/share) with:
    - Server Action submission
    - Basic validation
    - Image upload + saving to public/images
- Route-level UI states:
    - loading UI
    - error UI
    - not-found UI

--- 

## 🚀Getting Started

### Prerequisites

- **Node.js** 
- **npm** 

### Installation

1. **Clone the repository:**

    ```sh
     git clone https://github.com/AAshry10/Food-Order-App.git
    ```

2. **Navigate to the project Backend directory (If not already navigated):**

    ```sh
     cd Foodies-App
    ```

3. **Install the dependencies:**

   ```sh
    npm install
   ```
### Run 
  
4. Run the project with:

   ```sh
    npm run dev
   ```

**Navigate to your [localhost:3000](https://localhost:3000)**

--- 

## 🏗️Project Structure

```sh
└── Foodies-App/
    ├── app/
    │   ├── community/
    │   │   ├── page.js
    │   │   └── page.module.css
    │   ├── meals/
    │   │   ├── [slug]/
    │   │   │   ├── page.js
    │   │   │   └── page.module.css
    │   │   ├── share/
    │   │   │   ├── error.js
    │   │   │   ├── page.js
    │   │   │   └── page.module.css
    │   │   ├── error.js
    │   │   ├── loading-out.js
    │   │   ├── loading.module.css
    │   │   ├── not-found.js
    │   │   ├── page.js
    │   │   └── page.module.css
    │   ├── globals.css
    │   ├── icon.png
    │   ├── layout.js
    │   ├── not-found.js
    │   ├── page.js
    │   └── page.module.css
    ├── assets/
    │   ├── icons/
    │   │   ├── community.png
    │   │   ├── events.png
    │   │   └── meal.png
    │   ├── burger.jpg
    │   ├── curry.jpg
    │   ├── dumplings.jpg
    │   ├── logo.png
    │   ├── macncheese.jpg
    │   ├── pizza.jpg
    │   ├── schnitzel.jpg
    │   └── tomato-salad.jpg
    ├── components/
    │   ├── images/
    │   │   ├── images-slideshow.js
    │   │   └── images-slideshow.module.css
    │   ├── main-header/
    │   │   ├── main-header-background.js
    │   │   ├── main-header-background.module.css
    │   │   ├── main-header.js
    │   │   ├── main-header.module.css
    │   │   ├── NavLink.js
    │   │   └── NavLink.module.css
    │   └── meals/
    │       ├── image-picker.js
    │       ├── image-picker.module.css
    │       ├── meal-item.js
    │       ├── meal-item.module.css
    │       ├── meals-fotm-submit.js
    │       ├── meals-grid.js
    │       └── meals-grid.module.css
    ├── lib/
    │   ├── actions.js
    │   └── meals.js
    ├── .eslintrc.json
    ├── .gitignore
    ├── initdb.js
    ├── jsconfig.json
    ├── meals.db
    ├── next.config.js
    ├── package-lock.json
    └── package.json
```

---

## 🧾License

[MIT License](https://choosealicense.com/licenses). For more details, refer to the [LICENSE](./LICENSE) file.

---

💖 *Built with love by [Ahmed ELashry](https://github.com/AAshry10)*  

---


