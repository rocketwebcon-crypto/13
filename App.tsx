
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/ServiceDetail';
import FAQ from './pages/FAQ';
import AdminLeads from './pages/AdminLeads';
import { servicesData } from './data';

// Scroll to top component to ensure navigation feels like a real page load
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/admin" element={<AdminLeads />} />
          {/* Generate routes for each service based on data to ensure strict SEO structure */}
          {servicesData.map((service) => (
            <Route 
              key={service.id} 
              path={`/services/${service.slug}`} 
              element={<ServiceDetail service={service} />} 
            />
          ))}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
