import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
