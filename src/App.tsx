import React from 'react';
import Home from "./screens/home";
import './index.scss'
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNewProduct from "./screens/create_new_product";
import NewProductList from "./screens/new_products_list";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <div className={"gradient"} />
          <div className={"main"}>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create_product" element={<CreateNewProduct />} />
              <Route path="new_product" element={<NewProductList />} />

            </Routes>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
  );
}

export default App;
