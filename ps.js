// ps.js - now TikTok redirect + dropdown fix

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// TikTok redirect for buy-now (your TikTok profile link - CHANGE THIS)
const tiktokProfile = "https://www.tiktok.com/@zenithgoodstorscompany6";  // ← put your real TikTok here 

const buyNowButtons = document.querySelectorAll(".buy-now");
buyNowButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product") || "this fire pallet";
        const message = encodeURIComponent(`Yo I want this → ${product} 🔥 DM me prices`);
        const url = `${tiktokProfile}?text=${message}`;   // TikTok doesn't have direct text like WA, so we go to profile

        window.open(url, "_blank");
    });
});

// Search
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');
searchInput?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    products.forEach(p => {
        const name = p.querySelector('p')?.textContent.toLowerCase() || "";
        p.style.display = name.includes(term) ? 'block' : 'none';
    });
});

// Dropdown toggle (fixed your id issue)
document.querySelectorAll('.more').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product');
        const cleanId = `dropdown-${productName.replace(/[^a-zA-Z0-9]/g, '-')}`;
        const dropdown = document.getElementById(cleanId);
        if (dropdown) {
            dropdown.classList.toggle('open');
        }
    });
});