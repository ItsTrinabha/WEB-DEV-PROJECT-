# My Learning Project - React Version

A beginner-friendly React conversion of the interactive learning platform with Roadmap Generator and Quiz Arena.

## Project Structure

```
├── public/
│   └── index.html               # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js            # Navigation header
│   │   ├── Home.js              # Home/welcome section
│   │   ├── Roadmap.js           # Roadmap generator
│   │   ├── Quiz.js              # Quiz functionality
│   │   └── Footer.js            # Footer
│   ├── data.js                  # All quiz and syllabus data
│   ├── App.js                   # Main app component (state management)
│   ├── App.css                  # All styling (same as original)
│   └── index.js                 # React entry point
├── package.json                 # Dependencies
└── README.md                    # This file
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## Key Features

✅ **Same Design & UI** - Identical styling and layout to the original
✅ **Same Logic** - All quiz and roadmap functionality preserved
✅ **React State Management** - Uses `useState` for simple state management
✅ **Component-Based** - Clean separation with Header, Home, Roadmap, Quiz, Footer components
✅ **Pure CSS** - No Tailwind, just custom CSS classes
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
