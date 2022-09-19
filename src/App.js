
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import List from './pages/list/List';
import Edusoftde from './pages/home/edusoftde/edusoftde';

function App() {
  return (
    <Router>
      < Routes>
        <Route path="/">
          < Route index element={<Edusoftde/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="users">
          <Route index  element={<List/>} />
          <Route path=":userId"  element={<Single/>}/>
          <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
          <Route index  element={<List/>} />
          <Route path=":productId"  element={<Single/>}/>
          <Route path="new" element={<New/>}/>
          </Route>
        </Route>  
      </Routes>
    </Router>
    
   
   
  );
}

export default App;
