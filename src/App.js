import './App.css';

//Components
import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from './components/title-message/my-title.component';
import About from './pages/about/about.component';
import Container from "react-bootstrap/Container";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from "react-parallax";
import background from "./assets/img/parallex/background.webp";
import Skills from './pages/skills/skills.component';
import Services from './pages/Services/services.component';

function App() {
  return (
    <div className="App" style={{position: "relative"}}>
      <Mynavbar/>
      <MyCarousal/>
      <TitleMessage/>
      <div>
        <Parallax 
            blur={{ min: -30, max: 30 }}
            bgImage={background}
            bgImageAlt=""
            strength={-500}>

            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
            
        </Parallax>
      </div>
      
      {/* Skill Section */}
      
      <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
              <Skills/>
              </Fade>
            </Container>
            
        
      </div>

      {/* Services */}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Services/>
          </Slide>
        </Container>
      </div>
    </div>
  );
}

export default App;
