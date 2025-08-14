import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ArticlePage from './pages/ArticlePage';
import AuthorProfile from './pages/AuthorPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>
    </Router>
  )
}

export default App;
