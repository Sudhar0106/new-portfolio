import { Fragment, useEffect } from 'react'
import Footer from './components/footer'
import Aboutme from './pages/aboutme'
import Contactme from './pages/contactme'
import PersonalDetails from './pages/expDetails'
import Introduction from './pages/introduction'
import Knowledge from './pages/knowledge'
import Projects from './pages/projects'
import Skills from './pages/skills'
import 'aos/dist/aos.css';
import Header from './components/header'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  return (
    <Fragment>
      <ParallaxProvider>
        <Header />
        <main className='container'>
          <Introduction />
          <Aboutme />
          <Skills />
          <PersonalDetails />
          <Projects />
          <Contactme />
          <Knowledge />
        </main>
        <Footer />
      </ParallaxProvider>
    </Fragment>
  )
}

export default App
