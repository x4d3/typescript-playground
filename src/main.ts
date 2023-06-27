///<reference path="User.ts"/>
///<reference path="DrawingApp.ts"/>

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = new User("world").greet();
// 4. Append the p element to the div element
app?.appendChild(p);

const canvas = document.createElement("canvas")
new DrawingApp(canvas);

app?.appendChild(canvas);

