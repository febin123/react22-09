import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
        <Navbar sub1="HOME" sub2="ABOUT"/>
        <div className="container my-4">
        <TextForm heading="Enter the value to be evalued" />
        </div>

       <div className="container my-4">
        <About/>
        </div>

       
    </>
          
  );
}

export default App;
