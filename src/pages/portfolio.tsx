import { About, Contact, Hero, Projects } from '@/components/pages/Home';
// import SecModal from '@/components/pages/Home/15SecModal';
import Cursor from '@/components/pages/Home/Cursor';
import Navbar from '@/components/widget/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Landing: NextPage = () => {
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAttention(true);
    }, 15000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono">
      <div className="layout">
        <Head>
          <title>Juan Sanchez Portfolio</title>
        </Head>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      <Cursor />
    </div>
  );
};

export default Landing;
