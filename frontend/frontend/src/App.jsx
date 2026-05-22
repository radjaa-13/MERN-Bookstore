
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import {Routes, Route, useLocation } from 'react-router-dom';
import AddBook from './components/admin/AddBook';
import AdminLayout from './components/admin/AdminLayout';
import AllBooks from './components/admin/AllBooks';
import UpdateBook from './components/admin/UpdateBook';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './auth/AuthContext';
import { CartProvider } from './auth/CartContext';
import CartPage from './pages/CartPage';
import BookDetails from './pages/BookDetails';
import OnSaleProducts from './components/admin/OnSaleProducts';
import DiscountPercent from './components/DiscountPercent';







function App() {

const location = useLocation()
const hideHeader = /^\/admin(\/|$)/.test(location.pathname)

  return (
    <AuthProvider>
 
     <CartProvider>
  
 {!hideHeader && <Header />}
 <Routes>

 <Route path="/" element = {<Home/>} />
 <Route path="/login" element = {  <Login/>}/>
 <Route path="/signup" element = {  <Signup/>}/>
 <Route path="/cart" element = {  <CartPage/>}/>
<Route path="/on-sale" element = {  <OnSaleProductsucts/>}/>
 <Route path="/discount" element = {  <DiscountPercentntPercent/>}/>


 <Route path="/bookDetails/:id" element = {  <BookDetails/>}/>



 <Route path="/admin" element={<AdminLayout />}>
  <Route path="add-book" element={<AddBook/>} /> 
  <Route path="books" element={<AllBooks/>} />  
 <Route path="/admin/update-book/:id"  element={<UpdateBook/>} /> 




 </Route>
 
 </Routes>
 </CartProvider>
 </AuthProvider>

  
  
  );

}

export default App

