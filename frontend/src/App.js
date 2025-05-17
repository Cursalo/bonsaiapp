import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './utils/supabaseClient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌿 Bonsai Prep</h1>
        <p>Personalized SAT Prep That Grows With You</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Bonsai Prep</h2>
      <p>Your personalized SAT preparation journey starts here.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
    </div>
  );
}

export default App; 