import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CollaboratePage from './components/page/CollaboratePage.tsx';
import EventsPage from './components/page/EventsPage.tsx';
import BlogPage from './components/page/BlogPage.tsx';
import Blog from './components/page/Blog.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
