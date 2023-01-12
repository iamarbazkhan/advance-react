import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import HocComponent from "./HocComponent/HocComponent"
import OrderComponent from './HocComponent/OrderComponent';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const ReactApp=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route path='/hoc' element={<OrderComponent/>}/>
        </Routes>
        </BrowserRouter>
    )

}

ReactDOM.render(<ReactApp/>,document.getElementById('root'))