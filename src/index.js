import React from "react";
import ReactDOM from "react-dom";
import { DiemerCodes } from "./Site";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<DiemerCodes />, document.getElementById("root"));
registerServiceWorker();
