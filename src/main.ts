///<reference path="User.ts"/>
///<reference path="DrawingApp.ts"/>

const app = document.getElementById("app");
if (app === null) {
    throw new Error("Could not find div#app");
}
const p = document.createElement("p");
p.textContent = new User("world").greet();
// 4. Append the p element to the div element
app.appendChild(p);

const canvas = document.createElement("canvas")
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid black";

const button = document.createElement("button");
button.textContent = "Clear";
new DrawingApp(canvas, button);


app.appendChild(canvas);
app.appendChild(document.createElement("br"));
app.appendChild(button);
