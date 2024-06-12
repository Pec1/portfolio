import { useRef } from 'react';
import { Header } from './components/Header'
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Portfolio } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>


        <div className='wrapper' ref={wrapperRef}>
          <Header.Root>
            <a href="">
              {/* <Image src="/logo.png" alt={'Logo-2'} width={80} height={80}/> */}
            </a>
            
            <Header.List>
              <Header.Iten text='Teste'/>
              <Header.Iten text='Teste'/>
              <Header.Iten text='Teste'/>  
            </Header.List>
            
            <Header.Buttons />
          </Header.Root>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
