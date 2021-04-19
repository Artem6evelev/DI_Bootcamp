// 1. Change The NavBar
let nav_bar = document.getElementById("navBar");
nav_bar.setAttribute("id", "socialNetworkNavigation");
// console.log(nav_bar);

let new_li = document.createElement("li");
// console.log(new_li);
new_text = document.createTextNode("Logout");
// console.log(new_text);
new_li.append(new_text)
// console.log(new_li);

nav_bar.appendChild(new_li)




