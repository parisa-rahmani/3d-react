import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-full h-screen">
          <Navbar />
          <Hero />
        </div>
        <div className="text-purple-400">hiuu</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
