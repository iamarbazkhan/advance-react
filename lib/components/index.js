import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import PureComponent from './PureComponent/PureComponent';
import OrderComponent from './HocComponent/OrderComponent';
import OuterComponent from './Memo/OuterComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const ReactApp=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route path='/hoc' element={<OrderComponent/>}/>
            <Route path='/pure-component' element={<PureComponent/>}/>
            <Route path='/memo' element={<OuterComponent/>}/>
        </Routes>
        </BrowserRouter>
    )

}

ReactDOM.render(<ReactApp/>,document.getElementById('root'))