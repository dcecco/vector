/**
* This interactive demonstrates the SVG ellipse element and its attributes.
*
* @title SVG Ellipse
* @date May 3, 2019
* @author Kurt Bruns
*/
import Interactive from '../../Interactive.js';
let id = 'svg-ellipse';
let interactive = new Interactive(id);
interactive.border = true;
interactive.width = 704;
let ellipse = interactive.ellipse(0, 0, 0, 0);
let l1 = interactive.line(0, 0, 0, 0);
let l2 = interactive.line(0, 0, 0, 0);
l1.stroke = 'cornflowerblue';
l2.stroke = 'cornflowerblue';
let text = interactive.text(25, 275, "");
let c0 = interactive.control(300, 150);
let c1 = interactive.control(450, 150);
let c2 = interactive.control(300, 100);
ellipse.update = function () {
    this.cx = c0.x;
    this.cy = c0.y;
    this.rx = Math.abs(c1.x - c0.x);
    this.ry = Math.abs(c2.y - c0.y);
};
ellipse.update();
ellipse.addDependency(c0);
ellipse.addDependency(c1);
ellipse.addDependency(c2);
c1.update = function () {
    this.x += c0.dx;
    this.y += c0.dy;
};
c1.addDependency(c0);
c1.constrainToX();
c2.update = function () {
    this.x += c0.dx;
    this.y += c0.dy;
};
c2.addDependency(c0);
c2.constrainToY();
l1.update = function () {
    this.x1 = c0.x;
    this.y1 = c0.y;
    this.x2 = c1.x;
    this.y2 = c1.y;
};
l1.update();
l1.addDependency(c0);
l1.addDependency(c1);
l2.update = function () {
    this.x1 = c0.x;
    this.y1 = c0.y;
    this.x2 = c2.x;
    this.y2 = c2.y;
};
l2.update();
l2.addDependency(c0);
l2.addDependency(c2);
// TODO: this is rather hacky, and probably best replaced by implementing the
// tspan element in our SVG wrapper class.
text.update = function () {
    let tag = `<tspan style="fill:purple">ellipse</tspan>`;
    let cx = `<tspan style="fill:#ab6f00">cx</tspan>`;
    let cy = `<tspan style="fill:#ab6f00">cy</tspan>`;
    let rx = `<tspan style="fill:#ab6f00">rx</tspan>`;
    let ry = `<tspan style="fill:#ab6f00">ry</tspan>`;
    this.contents = `&lt;${tag} ${cx}="${ellipse.cx.toFixed(0)}
                              ${cy}="${ellipse.cy.toFixed(0)}
                              ${rx}="${ellipse.rx.toFixed(0)}
                              ${ry}="${ellipse.ry.toFixed(0)}"&gt`;
};
text.update();
text.addDependency(ellipse);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWVsbGlwc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvZXhhbXBsZXMvc3ZnL3N2Zy1lbGxpcHNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRTtBQUVGLE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBRS9DLElBQUksRUFBRSxHQUFHLGFBQWEsQ0FBQztBQUN2QixJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUUxQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QyxFQUFFLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0FBQzdCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0IsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FB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
