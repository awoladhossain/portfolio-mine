import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      {/* Ambient background glow blobs */}
      <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <div className="animate-float-slow absolute -left-[10%] -top-[10%] size-[500px] rounded-full bg-primary/8 blur-[120px] dark:bg-primary/12" />
        <div className="animate-float-medium absolute -bottom-[10%] -right-[10%] size-[600px] rounded-full bg-violet-600/5 blur-[130px] dark:bg-indigo-500/8" />
        <div className="absolute left-[35%] top-[35%] size-[350px] rounded-full bg-pink-500/5 blur-[100px] dark:bg-purple-500/5" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-grid opacity-75" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-8">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
