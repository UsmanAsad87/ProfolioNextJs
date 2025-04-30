"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProject from "@/components/RecentProject";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import SEO from '@/components/ui/3d-pin';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="ggWKJgOz1lENFu8n__fDmACwmEPdtGkYRaUOgDXjpvQ" />
        <script src="https://4ai.chat/embed.js?siteId=NEFJQ0hBVEtFWTEwNQ==&app=web"></script>
      </Head>
      <SEO title="Usman Asad - Digifyr Portfolio" description="Explore the portfolio of Usman Asad, a professional at Digifyr and NESCOM. Discover projects, experience, and more." />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProject/>
          <Clients/>
          <Experience/>
          <Approach/>
          <Footer/>
        </div>
        <script src="https://4ai.chat/embed.js?siteId=NEFJQ0hBVEtFWTEwNQ==&app=web"></script>
      </main>
    </>
  );
};

export default Home;
