import App from "App";
import en from "lang/en";
import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from "react-intl";

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider messages={en} locale="en">
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById("app")
);
