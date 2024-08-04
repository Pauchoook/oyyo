import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import modal from "./files/modal.js";
import map from "./files/map.js";
import slider from "./files/slider.js";
import moreDetail from "./files/more-detail.js";
import tab from "./files/tab.js";

functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
modal();
map();
slider();
moreDetail();
tab();