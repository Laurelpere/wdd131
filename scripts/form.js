const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');

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

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// ...existing code...

// Populate Product Name select options from products array
const productSelect = document.getElementById('productName');
if (productSelect) {
    // Remove existing options except the first placeholder
    productSelect.innerHTML = '<option value="" selected disabled>Select a Product</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}





const reviewForm = document.querySelector('form');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        // Get form values
        const product = document.getElementById('productName').value;
        const stars = document.querySelector('input[name="stars"]:checked')?.value || '';
        const features = Array.from(document.querySelectorAll('input[name="feature"]:checked')).map(cb => cb.value);

        // Save to localStorage
        localStorage.setItem('reviewProduct', product);
        localStorage.setItem('reviewStars', stars);
        localStorage.setItem('reviewFeatures', JSON.stringify(features));
        // Allow form to submit normally (GET to review.html)
    });
}

if (window.location.pathname.endsWith('review.html')) {
    // Get data from localStorage
    const product = localStorage.getItem('reviewProduct');
    const stars = localStorage.getItem('reviewStars');
    const features = JSON.parse(localStorage.getItem('reviewFeatures') || '[]');

    // Display in your HTML (add these elements in review.html)
    document.getElementById('displayProduct').textContent = product || '';
    document.getElementById('displayStars').textContent = stars || '';
    document.getElementById('displayFeatures').textContent = features.join(', ');
}