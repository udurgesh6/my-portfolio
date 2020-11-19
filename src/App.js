import './App.css';

//Components
import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from './components/title-message/my-title.component';
import About from './pages/about/about.component';
import Container from "react-bootstrap/Container";
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import background from "./assets/img/parallex/background.webp";

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
      
    </div>
  );
}

export default App;
