# 🌟 MINDRA - Student Learning Hub

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/npm-9+-red?style=for-the-badge&logo=npm" alt="npm Badge"/>
  <br>
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License"/>
</div>

---

## 📖 About

A beginner-friendly **React** conversion of the interactive learning platform featuring a **Roadmap Generator** and **Quiz Arena**. Perfect for students looking to organize their study plans and test their knowledge! 🎓📚

---

## 🏗️ Project Structure

```
📁 MINDRA/
├── 🌐 public/
│   └── 📄 index.html               # HTML template
├── 📂 src/
│   ├── 🧩 components/
│   │   ├── 🧭 Header.js            # Navigation header
│   │   ├── 🏠 Home.js              # Home/welcome section
│   │   ├── 🗺️ Roadmap.js           # Roadmap generator
│   │   ├── ❓ Quiz.js              # Quiz functionality
│   │   ├── 🦶 Footer.js            # Footer
│   │   ├── 📅 StudyPlanner.js      # Study planner component
│   │   ├── 👤 Profile.js           # User profile
│   │   └── ℹ️ About.js             # About page
│   ├── 📊 data.js                  # All quiz and syllabus data
│   ├── ⚛️ App.js                   # Main app component (state management)
│   ├── 🎨 App.css                  # All styling (same as original)
│   └── 🚀 index.js                 # React entry point
├── 📦 package.json                 # Dependencies
└── 📝 README.md                    # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) 🟢
- **npm** or **yarn** 📦

### Installation & Setup

1. **Clone the repository** 📥
   ```bash
   git clone https://github.com/ItsTrinabha/WEB-DEV-PROJECT-.git
   cd WEB-DEV-PROJECT-
   ```

2. **Install Dependencies** ⚙️
   ```bash
   npm install
   ```

3. **Start Development Server** ▶️
   ```bash
   npm start
   ```

4. **Open in Browser** 🌐
   - The app will automatically open at `http://localhost:3000`
   - If not, navigate to the URL manually

### Build for Production 🏗️
```bash
npm run build
```

---

## ✨ Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🎨 **Same Design & UI** | Identical styling and layout to the original | ✅ Complete |
| 🧠 **Same Logic** | All quiz and roadmap functionality preserved | ✅ Complete |
| ⚛️ **React State Management** | Uses `useState` for simple state management | ✅ Complete |
| 🧩 **Component-Based Architecture** | Clean separation with Header, Home, Roadmap, Quiz, Footer components | ✅ Complete |
| 🎨 **Pure CSS** | No external frameworks, just custom CSS classes | ✅ Complete |
| 📱 **Responsive Design** | Works on desktop and mobile devices | ✅ Complete |
| 🗺️ **Roadmap Generator** | Interactive learning path creation | ✅ Complete |
| ❓ **Quiz Arena** | Comprehensive quiz system with multiple topics | ✅ Complete |
| 📅 **Study Planner** | Organize your study schedule | ✅ Complete |
| 👤 **Profile Management** | User profile and progress tracking | ✅ Complete |

---

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 ⚛️
- **Styling**: Pure CSS 🎨
- **Routing**: React Router DOM 7.14.0 🧭
- **PDF Generation**: jsPDF 2.5.1 📄
- **Build Tool**: Create React App 5.0.1 🏗️

---

## 📱 Screenshots

*Coming soon - Add some beautiful screenshots of your app here!*

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 📝

1. Fork the project 🍴
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request ✨

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by <strong>ItsTrinabha</strong>
  
  <br>
  
  🌟 If you found this helpful, please give it a star! 🌟
</div>
✅ **Beginner-Friendly** - Simple React patterns, easy to understand

## Component Details

### App.js
- Main component that manages which section to display
- Handles section switching logic
- Wraps Header, main content, and Footer

### Header.js
- Navigation buttons to switch between sections
- Same design as original

### Home.js
- Welcome/landing page
- Buttons to access Roadmap and Quiz
- Creator information

### Roadmap.js
- Interactive roadmap generator
- Domain selection (Web, Frontend, Full Stack)
- Dynamic rendering of syllabus data

### Quiz.js
- Quiz functionality with timer
- Question shuffling
- Score calculation and display
- Multiple quiz categories

### Footer.js
- Footer with creator credits

### data.js
- Centralized data file
- Contains syllabusData and quizQuestions
- Easy to modify and expand

## How React Changed the Code

### Before (Vanilla JS):
```javascript
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}
```

### After (React):
```javascript
const [currentSection, setCurrentSection] = useState('home');

// Conditional rendering in JSX
{currentSection === 'home' && <Home showSection={showSection} />}
{currentSection === 'roadmap' && <Roadmap showSection={showSection} />}
```

## Notes for Beginners

1. **State Management**: Uses `useState` hook for simple state
2. **Props**: Components receive functions and data through props
3. **JSX**: Looks like HTML but it's JavaScript
4. **Conditional Rendering**: Uses `&&` operator and ternary for showing/hiding content
5. **useEffect**: Used for timer management in Quiz component

## Browser Compatibility

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT - Free to use and modify

## Credits

- TRINABHA DIXIT - 24BYB0026
- SHIKHAR SAHAY - 24BYB0029
- BHARGAV MAHANTA - 24BYB0046
