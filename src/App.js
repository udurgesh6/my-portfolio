import './App.css';
//Components
import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from './components/title-message/my-title.component';

function App() {
  return (
    <div className="App">
      <Mynavbar/>
      <MyCarousal/>
      <TitleMessage/>
    </div>
  );
}

export default App;
