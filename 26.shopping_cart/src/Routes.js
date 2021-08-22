import React, { BrowserRouter, Switch, Route, } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Detail from './components/Detail';
import './App.css';

const Routes = () => {
    return(
        <BrowserRouter >
        <Nav />
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
        </BrowserRouter >
    )
}

export default Routes;