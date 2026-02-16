import PreLoader from "./components/PreLoader"
import Navbar from "./components/Navbar"
import ParticlesBg from "./components/ParticlesBg"

import Home from "./sections/Home"
import About from "./sections/About"
import Tools from "./sections/Tools"
import Projects from "./sections/Projects"
import Certificates from "./sections/Certificates"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <>
      <PreLoader />
      <ParticlesBg />
      <Navbar />

      <main className="relative z-10">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="tools"><Tools /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}
