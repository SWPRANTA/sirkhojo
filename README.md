# SirKhoj

**SirKhoj** is a full-stack web application for discovering professors, their research areas, and scholarship opportunities. Built with React (TypeScript, TailwindCSS) for the frontend and Node.js/Express for the backend.

---

## Features

- 🔍 **Search Professors:** Find professors by name, university, tags, or research area.
- 🏷️ **Tag-based Filtering:** Quickly filter professors by expertise.
- 🏫 **Professor Profiles:** Detailed profile pages with biography, research, publications, and contact info.
- 🎓 **Scholarships:** Browse curated scholarships and grants.
- 📱 **Responsive Design:** Works on desktop and mobile.
- 🗂️ **Context API:** Professors’ data is managed globally for easy access.

---

## Folder Structure

```
SirKhoj/
├── frontend/         # React + TypeScript + TailwindCSS
│   ├── public/       # Static assets (icons, images, etc.)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── types.ts
│   │   └── ...
│   └── ...
├── backend/          # Node.js/Express backend (API, DB, etc.)
│   └── ...
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

---

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/SirKhoj.git
cd SirKhoj
```

---

### 2. Setup Environment Variables

- Create `.env` files in both `frontend/` and `backend/` as needed.
- **Never commit your `.env` files.**

---

### 3. Install Dependencies

#### Frontend

```sh
cd frontend
npm install
# or
yarn
```

#### Backend

```sh
cd ../backend
npm install
# or
yarn
```

---

### 4. Run the App

#### Start Backend

```sh
cd backend
npm run dev
```

#### Start Frontend

```sh
cd ../frontend
npm run dev
```

- The frontend will typically run at [http://localhost:5173](http://localhost:5173)
- The backend will typically run at [http://localhost:3000](http://localhost:3000)

---

## Usage

- Use the search bar to find professors.
- Click on a professor card to view their detailed profile.
- Browse scholarships from the Scholarships page.
- Use the navigation bar to explore different sections.

---

## Technologies Used

- **Frontend:** React, TypeScript, TailwindCSS
- **Backend:** Node.js, Express
- **State Management:** React Context API
- **Icons:** Material Icons, custom SVG/PNG icons

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Credits

- [Material Icons](https://fonts.google.com/icons)
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)
- All contributors and open-source libraries used.

---

**Find your mentor. Unlock your potential. — SirKhoj**