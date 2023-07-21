import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  LanguageSwitcher
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className='bg-about bg-cover bg-center bg-no-repeat'>
          <About />
        </div>

        <div className='bg-tech bg-cover bg-center bg-no-repeat pb-10'>
          <Tech />
        </div>

        <div className='bg-tech bg-cover bg-center bg-no-repeat'>
          <Projects />
        </div>

        <div
          className='bg-experience bg-cover bg-center bg-no-repeat'>
          <Experience />
        </div>

        <div className='bg-about relative z-0'>
          <Contact />
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
