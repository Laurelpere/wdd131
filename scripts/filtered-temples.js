const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const headLetter = document.querySelector(".headlet");

let today = new Date();
let modified = new Date(document.lastModified);

currentYearElements.innerHTML = `${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}).format(today)}`;


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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Apia Samoa Temple",
    location: "Pesega, Apia Samoa",
    dedicated: "1983, August, 5-7",
    area: 18691,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Ogden Utah Temple",
    location: "Ogden, Utah, United States",
    dedicated: "1972, January, 18-20",
    area: 112232,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-38445-main.jpg"
  },
  {
    templeName: "Columbia River Washington Temple",
    location: "Richland, Washington, United States",
    dedicated: "2001, November, 18",
    area: 16880,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/columbia-river-washington-temple/columbia-river-washington-temple-39505-main.jpg"
  }
];

// Loop through the array and create "temple cards" for each temple by displaying

// Select the container where you want to display the temple cards
const templeContainer = document.querySelector("#temple-cards");

// Clear the container (optional, if you want to refresh)
templeContainer.innerHTML = "";

// Loop through the array and create a card for each temple
temples.forEach(temple => {
    // Create a div for the card
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    // Set the inner HTML with the required details
    templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    // Add the card to the container
    templeContainer.appendChild(templeCard);
});

//     Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.
// Helper function to render temple cards
function renderTemples(templeArray) {
    templeContainer.innerHTML = ""; // Clear existing cards
    templeArray.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeContainer.appendChild(templeCard);
    });
}

// Initial render (Home)
renderTemples(temples);

// Filter buttons
const filterLinks = document.querySelectorAll(".filter-link");
filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page jump if using <a>
        const filter = link.dataset.filter;
        let filteredTemples = temples;
        switch (filter) {
            case "old":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // Home
        }
        renderTemples(filteredTemples);
    });
});