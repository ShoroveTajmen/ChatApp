
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
