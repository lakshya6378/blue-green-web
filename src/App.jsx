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
import StateSection from './components/StateSection';
import TagDescription from './components/TagDescription';
import Home from './pages/Home';
import Services from './pages/Services';
library.add(fas,fab,far);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Layout>
        <TagDescription />
        <Pricingpage />
      </Layout>
    ),
  },
  {
    path: "/features",
    element: (
      <Layout>
        <Features />
        <TagDescription />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
        <TagDescription />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
        <TagDescription />
      </Layout>
    ),
  },
  {
    path: "/docs",
    element: (
      <Layout>
        <Docs />
        <TagDescription />
      </Layout>
    ),
  },
  {
    path: "/support",
    element: (
      <Layout>
        <Support />
        <TagDescription />
      </Layout>
    ),
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services />
        <TagDescription />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;