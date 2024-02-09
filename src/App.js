import './App.css';
import About from "./components/About";
import ManagementTeam from './components/ManagementTeam';
import DevelopmentTeam from './components/DevelopmentTeam';
import SalesTeam from './components/SalesTeam';
import Flag from './components/Flag';

function App() {
  return (
    <>
      <About />
      <ManagementTeam />
      <DevelopmentTeam />
      <SalesTeam />
      <Flag  rotationDirection={"bottom"} />
    </>
  );
}

export default App;
