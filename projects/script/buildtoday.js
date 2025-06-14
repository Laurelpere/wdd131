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

// Add this to your JS file or in a <script> tag

function showWelcomePopup() {
    // Create popup container
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100vw';
    popup.style.height = '100vh';
    popup.style.background = 'rgba(0,0,0,0.5)';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.zIndex = '9999';

    // Create popup content
    const content = document.createElement('div');
    content.style.background = '#fff';
    content.style.padding = '2rem';
    content.style.borderRadius = '8px';
    content.style.textAlign = 'center';
    content.innerHTML = `
        <h2>Welcome!</h2>
        <p>We're glad you're here.</p>
        <button id="closeWelcomeBtn">Close</button>
    `;

    content.querySelector("#closeWelcomeBtn").style.backgroundColor = "#4CAF50";
    content.querySelector("#closeWelcomeBtn").style.color = "white";
    content.querySelector("#closeWelcomeBtn").style.width = "100px";
    content.querySelector("#closeWelcomeBtn").style.height = "40px";
    content.querySelector("#closeWelcomeBtn").style.padding = "10px 20px";
    content.querySelector("#closeWelcomeBtn").style.margin = "10px";

    popup.appendChild(content);
    document.body.appendChild(popup);

    // Close button event
    document.getElementById('closeWelcomeBtn').onclick = function() {
        document.body.removeChild(popup);
    };
}

// Show popup when page loads
window.addEventListener('DOMContentLoaded', showWelcomePopup);