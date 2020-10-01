const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const navHead = document.querySelectorAll('nav a');
navHead[0].textContent = siteContent.nav["nav-item-1"];
navHead[1].textContent = siteContent.nav["nav-item-2"];
navHead[2].textContent = siteContent.nav["nav-item-3"];
navHead[3].textContent = siteContent.nav["nav-item-4"];
navHead[4].textContent = siteContent.nav["nav-item-5"];
navHead[5].textContent = siteContent.nav["nav-item-6"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const hText = document.getElementsByClassName('cta-text')[0].children[0];
hText.textContent = siteContent.cta.h1;

const newButton = document.getElementsByClassName('cta-text')[0].children[1];
newButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('scr', siteContent['cta']['img-src']);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const addy = document.querySelector('.contact h4');
contact.textContent = siteContent.contact['contact-h4'];

const addyInfo = document.querySelectorAll('.contact p');
addyInfo[0].textContent = siteContent.contact.address;
addyInfo[1].textContent = siteContent.contact.phone;
addyInfo[2].textContent = siteContent.contact.email;

const foot = document.querySelector('footer p');
foot.textContent = siteContent.footer.copyright;