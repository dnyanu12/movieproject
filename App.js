import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SingleMovie from './SingleMovie';
import Error from './Error';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="movie/:id" element={<SingleMovie/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
