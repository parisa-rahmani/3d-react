import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  Hero,
  About,
  Tech,
  Works,
  Experience,
  Feedbacks,
  Contact,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-full h-screen">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
