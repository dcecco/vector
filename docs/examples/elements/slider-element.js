import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
// Initialize the interactive
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.svg.style.border = "1px solid grey";
let slider = interactive.slider(75, 75, 150, 20);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvZXhhbXBsZXMvZWxlbWVudHMvc2xpZGVyLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5Qyw2QkFBNkI7QUFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUNuRCxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN4QixXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN6QixXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFDaEQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyJ9