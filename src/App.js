import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myOrder" element={<MyOrder />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="users/*" element={<Users />} /> */}
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
