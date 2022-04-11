import './App.css';
import { Chakra } from './components/Chakra'
import { Chakra2 } from './components/Chakra2';
import { Chakra3 } from './components/Chakra3';
import { Chakra4 } from './components/Chakra4';
import { Navbar } from './components/Navbar';


const App = () => {
  return(
    <>
    <Navbar />
    <Chakra />
    <Chakra2 />
    <Chakra3 />
    <Chakra4 />
    </>
    )

}

export default App;
