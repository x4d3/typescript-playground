import {MusicDrawer} from "./MusicDrawer";
import {User} from "./User";
import {DrawingApp} from "./DrawingApp";

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
const div = document.createElement("div");
div.id = "music-sheet";

app.appendChild(div);

MusicDrawer.generateMusicSheet(div.id);
