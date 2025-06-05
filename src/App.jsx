import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import UIDemo from './components/pages/UIDemo';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<UIDemo view="standard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="focus" element={<UIDemo view="focus" />} />
            <Route path="expanded" element={<UIDemo view="expanded" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
