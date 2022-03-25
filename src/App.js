import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrder from './Pages/MyOrder/MyOrder';
import Customer from './Pages/Customer/Customer';
import AddService from './Pages/AddService/AddService';
import Admin from './Pages/Admin/Admin';
//import Admin from './Pages/Admin/Admin';
// import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header/>
        {/* <Route path="/customer" element={<Customer />} /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/myOrder" element={<MyOrder />} />
        {/* <Route path="/addService" element={<AddService />} />
        <Route path="/admin" element={<Admin />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/addService" element={<AddService />} />
        
        {/* <Route path="users/*" element={<Users />} /> */}
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
