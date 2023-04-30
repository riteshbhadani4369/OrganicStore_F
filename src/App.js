import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './page/Login';
import Home from './component/Home';
import Register from './page/Register';
import Error404 from './page/Error404';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Dashboard from './Admin/Dashboard';
import Footer from './page/Footer';
import Privacypolicy from './page/Privacypolicy';
import FAQs from './page/FAQs';
import AddProduct from './Admin/AddProduct';
import Viewproduct from './Admin/Viewproduct';
import Editproduct from './Admin/Editproduct';
import AddCatagory from './Admin/AddCatagory';
import Buynow from './page/Buynow';
import Allproduct from './component/Allproduct';
import { FloatButton } from 'antd';
import Termsandcondition from './page/Termsandcondition';
import EditCatagory from './Admin/EditCatagory';
import Payment from './page/Payment';
import Paymentsuccess from './page/Paymentsuccess';
import Cart from "./cart/Cart"
import Shipping from "./cart/Shipping"
import ConfirmOrder from './cart/ConfirmOrder';
import Myorders from './page/Myorders';
import OrderDetails from './page/OrderDetails';
import Orderlist from './Admin/Orderlist';
import ProcessOrder from './Admin/ProcessOrder';
import Users from './Admin/Users';

function App() {

  const username = localStorage.getItem("Username");

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/dashboard" element={username === "Admin" ? <Dashboard /> : <Error404 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/dashboard/addproduct" element={<AddProduct />} />
        <Route path="/dashboard/viewproduct" element={<Viewproduct />} />
        <Route path="/dashboard/editproduct/:id" element={<Editproduct />} />
        <Route path="/dashboard/addcatagory" element={<AddCatagory />} />
        <Route path="/buynow/:id" element={<Buynow />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route path="/termsandcondition" element={<Termsandcondition />} />
        <Route path="/editCatagory/:id" element={<EditCatagory />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/paymentsuccess/:id" element={<Paymentsuccess />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/orders" element={<Myorders />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/dashboard/orders" element={<Orderlist />} />
        <Route path="/dashboard/order/:id" element={<ProcessOrder />} />
        <Route path="/dashboard/user" element={<Users />} />
      </Routes>
      <FloatButton.BackTop />
    </div>

  );
}

export default App;
