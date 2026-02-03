import Navbar from "./components/Navbar/Navbar";
import Collaborate from "./sections/Collaborate/Collaborate";
import Creations from "./sections/Creations/Creations";
import Identity from "./sections/Identity/Identity";
import Landing from "./sections/Landing/Landing";
import TechStack from "./sections/TechStack/TechStack";
import StickyCreations from "./sections/StickyCreations/StickyCreations";

function App() {
  return (
    <>
    <Navbar />
      <Landing />
      <Identity/>
      <br />
      <Creations/>
      <br />
      <StickyCreations /> 
      <br />
      <TechStack/>
      <br />
      <Collaborate/>
    </>
  );
}

export default App;
