const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const headLetter = document.querySelector(".headlet");

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
    if (headLetter.style.display === "none") {
        headLetter.style.display = "block";
    } else {
        headLetter.style.display = "none";
    }
});