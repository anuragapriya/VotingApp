import { createRoot } from "react-dom/client";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(store);
root.render( 
         <Provider store={store}>
             <App />
         </Provider>,
 );
