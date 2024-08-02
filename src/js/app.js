import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import modal from "./files/modal.js";
import map from "./files/map.js";

functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
modal();
map();