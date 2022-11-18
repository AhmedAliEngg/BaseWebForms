import React from 'react';
import ReactDOM from 'react-dom/client';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { Home } from "./pages/Home/Home";
const engine = new Styletron();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <App />
          </BaseProvider>
        </StyletronProvider>
  </BrowserRouter>
);


