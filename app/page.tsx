import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import MotionPath from "@/components/WavyLine";

export default function Home() {
 return (
  <>
   <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:p-24 font-body">
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
   </main>
   <MotionPath
    shape={0}
    className="top-[500px] sm:top-[450px] md:top-[200px]"
   />
   <MotionPath shape={2} className="bottom-16" />
   <ScrollToTop />
  </>
 );
}
