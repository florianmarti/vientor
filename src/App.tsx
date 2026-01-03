import './App.css'

import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Services />
        <Events />
        <BlogPreview />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App