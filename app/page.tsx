import Nav from "@/components/site/Nav"
import Hero from "@/components/site/Hero"
import Ticker from "@/components/site/Ticker"
import Work from "@/components/site/Work"
import Lanes from "@/components/site/Lanes"
import Experience from "@/components/site/Experience"
import Testimonials from "@/components/site/Testimonials"
import Contact from "@/components/site/Contact"
import Footer from "@/components/site/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Lanes />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
