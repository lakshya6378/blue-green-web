import React, { useState } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Collaboration from './components/Collaboration';
import Pricing from './components/Pricing';
import CompanyLogos from './components/CompanyLogos';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About"
import Layout from './Layout';
import  Contact from './pages/ContactForm';
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import Pricingpage from "./pages/PricingPage"
library.add(fas,fab,far);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hero />
        <Features />
        <Collaboration />
        <Pricing />
        <Testimonials />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        
      </Layout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Layout>
        <Pricingpage />
      </Layout>
    ),
  },
  {
    path: "/features",
    element: (
      <Layout>
        <Features />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/docs",
    element: (
      <Layout>
        <Docs />
      </Layout>
    ),
  },
  {
    path: "/support",
    element: (
      <Layout>
        <Support />
      </Layout>
    ),
  },
]);

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ContactForm triggerfunction={setShowModal} />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;