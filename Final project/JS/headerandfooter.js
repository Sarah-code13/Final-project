const head1 = document.getElementById("header1");
const footer1 = document.getElementById("footer1");

const myHeader = `
    <nav>    
        <a href="index.html"><img src="Imagenes/logowithbackground.png" alt="site logo"></a>
        <span class="menu-icon" onclick="toggleMenu()">☰</span>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="aboutus.html">About us</a></li>
            <li><a href="contact.html">Contact Us</a></li></li>
            <a href="#" class="right"><img src="Imagenes/shoppingcart.png" ></a>

        </ul>
    <nav>`;

head1.innerHTML = myHeader;
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.classList.add("custom-footer");
  
    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-intro">
          <img src="Imagenes/logowithbackground.png" class = "footer-logo />
          <p class = "footer-description"> We are a trusted company dedicated to delivering high-quality voice records to change the world!</p>
        </div>
        <div class="footer-contact">
          <p><strong>Phone:</strong> +1-123-456-7890</p>
          <p><strong>Address:</strong> 123 Business Lane, City, State, 45678</p>
        </div>
        <div class="footer-nav">
          <a href="index.html">Home</a>
          <a href="products.html">Products</a>
          <a href="aboutus.html">About Us</a>
          <a href="Contact.html">Contact Us</a>
        </div>
        <div class="footer-social">
        <a href="https://facebook.com" target="_blank">
          <img src="/Imagenes/facebook.png" alt="Facebook" class="social-icon" />
        </a>
        <a href="https://x.com" target="_blank">
          <img src="/Imagenes/twitter.png" alt="X" class="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src="/Imagenes/instagram.png" alt="Instagram" class="social-icon" />
        </a>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2024 TalkBoy. All rights reserved.</p>
        </div>
      </div>
    `;
  
    document.body.appendChild(footer);
  });
    

document.getElementById("year").textContent = new Date().getFullYear();
// Get the current URL path 
const currentPath = window.location.pathname; 
// Extract the file name from the path 
const fileName = currentPath.split('/').pop();

// Get all navigation links 
const navLinks = document.querySelectorAll('nav ul li a'); 
// Loop through each link 
navLinks.forEach(link => { 
    // Check if the link's href matches the current path 
    if (link.getAttribute('href') === fileName) { 
        // Add the 'active' class to the matching link 
        link.classList.add('active'); 
    }});
    function toggleMenu() {
      console.log('Menu toggled');
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('active');
        
    }
    document.addEventListener("DOMContentLoaded", () => {
    const animatedWord = document.getElementById('animated-word');
    const words = ["innovative", "dynamic", "passionate", "creative"];  // Add words here
    let wordIndex = 0;
    let letterIndex = 0;
    
    function animateText() {
        if (letterIndex < words[wordIndex].length) {
            animatedWord.innerHTML += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(animateText, 100);  // Adjust the typing speed
        } else {
            setTimeout(() => {
                letterIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
                animatedWord.innerHTML = "";  // Clear text
                animateText();  // Restart animation
            }, 2000);  // Wait before starting the next word
        }
    }
    
    animateText();
})
    