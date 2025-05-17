const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

let today = new Date();
let modified = new Date(document.lastModified);

currentYearElements.innerHTML = `${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}
).format(today)}`;


modifiedYearElements.innerHTML = `Last Modified ${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}
).format(modified)}`;


menu.addEventListener("click", () => {
    
	navigation.classList.toggle("show");
	menu.classList.toggle("show");
});