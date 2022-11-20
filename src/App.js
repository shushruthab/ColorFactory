import logo from './logo.svg';
import './App.css';
import {SketchPicker} from 'react-color'
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav'
import Colors from './Colors';

function App() {
  return (
  <>
    <h1>Welcome to Color Factory</h1>
    {/* <Colors />
    <SketchPicker /> */}
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  </>
  );
}

export default App;
