"use client";

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeaderApp from "@/components/HeaderApp";

import Welcome from '@/components/sections/Welcome';
import FooterApp from '@/components/FooterApp';
import AboutMe from '@/components/sections/AboutMe';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <main className={`relative bg-[#fff] max-w-7xl m-auto px-4 ${isMdUp ? "mt-40" : "mt-36"}`}>
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1200, backgroundColor: 'white', borderBottom: 1, borderColor: "#efefef" }}>
          <Box sx={{ maxWidth: '80rem', margin: '0 auto' }}> {/* ancho del main */}
            <HeaderApp />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', minHeight: 800 }}>
          <Welcome/>
          <section id="presentation" className='w-full'>
            <AboutMe />
          </section>
          <section id="projects" className='w-full'>
            <Projects />
          </section>
          <section id="skills" className='w-full'>
            <Skills />
          </section>
        </Box>
      </main>
      <Box sx={{ borderTop: 1, borderColor: "#efefef", paddingY: 6, paddingX: 10 }}>
        <Box sx={{ maxWidth: '80rem', margin: '0 auto' }}>
          <FooterApp />
        </Box>
      </Box>
    </>
  );
}
