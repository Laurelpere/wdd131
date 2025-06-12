const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const visitorName = document.querySelector("#Name");

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

const image = document.querySelector("picture");
window.addEventListener("DOMContentLoaded", () => {
    if (image) {
        image.classList.add("picture-animate");
    }
});

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
        window.addEventListener("scroll", () => {
    if (section) {
        section.classList.add("picture-animate");
    }
    });
});

const products = [
  {
    name: "Rent an apartment"
  },
  {
    name: "Buy a house"
  },
  {
    name: "Sell a house"
  },
  {
    name: "Lease an apartment"
  },
  {
    name: "Lease a land"
  },
  {
    name: "Sell a land"
},
];

// Populate Product Name select options from products array
// Populate Product Name select options from products array
const productSelect = document.querySelector("select");
if (productSelect) {
    // Remove existing options except the first placeholder
    productSelect.innerHTML = '<option value="" selected disabled>Select a Product</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}
 
// use localStorage to save the selected product
const reviewForm = document.querySelector('form');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        // Get form values
        const product = document.querySelector('select').value;
        const stars = document.querySelector('input[name="stars"]:checked')?.value || '';
        const features = Array.from(document.querySelectorAll('input[name="feature"]:checked')).map(cb => cb.value);

        // Save to localStorage
        localStorage.setItem('reviewProduct', product);
        localStorage.setItem('reviewName', visitorName.value);
        localStorage.setItem('reviewEmail', document.querySelector('#email').value);
    });
}