import { Route, Switch } from "react-router";
import Header from './Components/Header/Header/Header'
import Nav from './Components/Header/Nav/Navbar'
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer"
import ProductDesc from "./Components/ProductDesc/ProductDesc";
import AddToCart from "./Components/AddToCart/AddToCart";
import Register from "./Components/Register/Register";
import Profile  from "./Components/Profile/Profile";



function App() {
  
 return(
    <>
      <Header/>
      <Nav/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/product/:productTitle" component={ProductDesc}/>
          <Route exact path="/add-to-cart" component={AddToCart}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path = "/profile" component ={Profile}/>
      </Switch>
      <Footer/>
    </>
  
 )
}

export default App;
