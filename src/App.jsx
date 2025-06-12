import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import Workforce from './components/pages/Workforce';
import ComponentShowcase from './components/pages/ComponentShowcase';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to="/workforce" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="components" element={<ComponentShowcase />} />
            <Route path="workforce" element={<Workforce view="standard" />} />
            <Route path="workforce/:workerId" element={<Workforce view="standard" />} />
            <Route path="workforce/focus" element={<Workforce view="focus" />} />
            <Route path="workforce/focus/:workerId" element={<Workforce view="focus" />} />
            <Route path="workforce/expanded" element={<Workforce view="expanded" />} />
            <Route path="workforce/expanded/:workerId" element={<Workforce view="expanded" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
