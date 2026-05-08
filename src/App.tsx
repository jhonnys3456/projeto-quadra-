/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { dbService } from './services/dbService';
import { AppState } from './types';

// Pages
import PublicLayout from './components/layouts/PublicLayout';
import AdminLayout from './components/layouts/AdminLayout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Structure from './pages/public/Structure';
import Events from './pages/public/Events';
import Gallery from './pages/public/Gallery';
import Rules from './pages/public/Rules';
import Contact from './pages/public/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Agenda from './pages/admin/Agenda';
import Customers from './pages/admin/Customers';
import Finances from './pages/admin/Finances';
import Files from './pages/admin/Files';
import Rentals from './pages/admin/Rentals';
import Login from './pages/auth/Login';

export default function App() {
  const [state, setState] = useState<AppState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dbService.getState().then(data => {
      setState(data);
      setLoading(false);
    });
  }, []);

  if (loading || !state) {
    return <div className="flex h-screen items-center justify-center bg-gray-50 text-gray-400">Carregando...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout state={state} />}>
          <Route path="/" element={<Home state={state} />} />
          <Route path="/sobre" element={<About state={state} />} />
          <Route path="/estrutura" element={<Structure state={state} />} />
          <Route path="/eventos" element={<Events state={state} />} />
          <Route path="/galeria" element={<Gallery state={state} />} />
          <Route path="/regras" element={<Rules state={state} />} />
          <Route path="/contato" element={<Contact state={state} />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout state={state} setState={setState} />}>
          <Route index element={<Dashboard state={state} />} />
          <Route path="agenda" element={<Agenda state={state} setState={setState} />} />
          <Route path="clientes" element={<Customers state={state} setState={setState} />} />
          <Route path="financeiro" element={<Finances state={state} setState={setState} />} />
          <Route path="arquivos" element={<Files state={state} setState={setState} />} />
          <Route path="alugueis" element={<Rentals state={state} setState={setState} />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

