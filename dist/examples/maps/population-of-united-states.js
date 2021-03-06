/**
* @title Population Density of the United States
* @description Every state of the United States colored by population density.
* @input Input the name of the map you want to see, and the size of the map.
* @tags [maps]
* @weight 1
*/
import { Interactive, getScriptName } from '../../index.js';
import * as data from './maps-json.js';
import { usDensityMap as densityMap } from './us-pop-density.js';
let interactive = new Interactive(getScriptName());
interactive.root.style.border = "1px solid grey";
let map = interactive.map(data.usData);
let hover = interactive.hoverBox("");
hover.setBounds(interactive.width, interactive.height);
let states = map.getAllFeaturePaths();
states.forEach(element => {
    element.setAttribute("style", `stroke:black;stroke-width:0.15px;fill:${getColor(densityMap[element.root.getAttribute("name")])};`);
    element.root.addEventListener('mousemove', e => {
        let x = e.clientX - interactive.root.getBoundingClientRect().left;
        let y = e.clientY - interactive.root.getBoundingClientRect().top;
        hover.updatePosition(x, y);
    });
    element.root.addEventListener("mouseenter", function () {
        element.setAttribute("style", `stroke:black;stroke-width:0.35px;fill:#ff8e61;`);
        hover.setText(element.root.getAttribute('name') + ': ' + densityMap[element.root.getAttribute("name")]);
        hover.showHoverBox();
    });
    element.root.addEventListener("mouseleave", function () {
        element.setAttribute("style", `stroke:black;stroke-width:0.15px;fill:${getColor(densityMap[element.root.getAttribute("name")])};`);
        hover.hideHoverBox();
    });
});
function getColor(d) {
    return d > 1000 ? '#0022ff' :
        d > 500 ? '#1971ff' :
            d > 200 ? '#458cff' :
                d > 100 ? '#6ea5ff' :
                    d > 50 ? '#87b5ff' :
                        d > 20 ? '#a1c5ff' :
                            d > 10 ? '#a1c5ff' :
                                d < 5 ? '#ffffff' :
                                    '#e6efff';
}
//# sourceMappingURL=population-of-united-states.js.map