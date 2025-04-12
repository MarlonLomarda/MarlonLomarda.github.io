// NAVBAR
console.log("JavaScript Loaded!"); // To confirm script execution
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
    navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
  .querySelectorAll(".menu a")
  .forEach((link) => link.addEventListener("click", toggleMenu));

  // LENIS FOR SMOOTH SCROLLING
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {});
  gsap.ticker.lagSmoothing(0);

  // SCROLL REVEAL
  const sr = ScrollReveal ({
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
  });

  gsap.to("nav", {
    opacity: 1,
    duration: 2,
  });
sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: "500" });
sr.reveal(".hero-headlines-buttons", { delay: "1000" });
gsap.from(".hero-images img", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
});
sr.reveal(".requirements-headlines h1");
sr.reveal(".requirements-headlines p", { delay: "500 "});
sr.reveal(".requirements img", { delay: "500" });
sr.reveal(".r-item-container", { delay: "1000" });
sr.reveal(".pets-headlines");
sr.reveal(".pet-item h3");
sr.reveal(".about-headlines");
sr.reveal(".about img");
sr.reveal(".testimonials h1", { delay: "500" });
sr.reveal(".testimonials h6");
sr.reveal(".testimony-item", { delay: "1000" });
sr.reveal(".footer-brand");
sr.reveal(".footer-links", { delay: "500", origin: "left" });
sr.reveal(".footer-contact-info", { delay: "500", origin: "right" });
sr.reveal(".copyright", { delay: "600" });

// GSAP SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: ".heropage",
    start: "top center",
    end: "center center",
    scrub: 1,
    onToogle: (self) => {
        if (self.isActive) {
            gsap.to(".hero-images img", { scale: 1, gap: "64px", duration: 0.5 });
        } else {
            gsap.to(".hero-images img", {
                scale: "1.2",
                gap: "35px",
                duration: 0.5,
            });
        }
    },
});

// GSAP ScrollTrigger for Hero Images Zoom Effect
gsap.utils.toArray(".hero-images img").forEach((img) => {
  gsap.fromTo(
    img,
    { scale: 1 }, // Initial scale
    {
      scale: 1.2, // Zoomed-in scale
      scrollTrigger: {
        trigger: img, // Trigger animation when the image enters the viewport
        start: "top 80%", // Start animation when the top of the image is 80% down the viewport
        end: "top 20%", // End animation when the top of the image is 20% down the viewport
        scrub: true, // Smoothly tie animation to scroll
      },
    }
  );
});

// ABOUT SPLIT TYPES
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    const text = new splitTypes(char, { types: "chars" });

    gsap.fromTo(
        text.chars,
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger: {
                trigger: char,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                markers: false,
                toggleActions: "play play reverse reverse",
            },
        }
    );
});

document.addEventListener("DOMContentLoaded", () => {
  const petDetails = {
    "sir-woofs": {
      name: "Sir Woofs",
      image: "img/pet-item-1.png",
      breed: "Shiba Inu",
      gender: "Male",
      age: "3 years old",
      description: "Sir Woofs is a playful and loyal companion who loves long walks and belly rubs.",
      funFacts: "He knows over 20 tricks and loves playing fetch.",
    },
    "captain-squaks": {
      name: "Captain Squaks",
      image: "img/pet-item-2.png",
      breed: "Rainbow Lorikeet",
      gender: "Male",
      age: "5 years old",
      description: "Captain Squaks is a talkative parrot who enjoys mimicking sounds and eating sunflower seeds.",
      funFacts: "He can mimic over 50 words and loves dancing to music.",
    },
    "professor-meow": {
      name: "Professor Meow",
      image: "img/pet-item-3.png",
      breed: "Orange Tabby Cat",
      gender: "Male",
      age: "4 years old",
      description: "Professor Meow is a wise and curious cat who loves solving puzzles and napping in the sun.",
      funFacts: "He has a knack for opening doors and enjoys watching birds from the window.",
    },
  };

  const petDetailsSection = document.getElementById("pet-details");
  const petImage = document.getElementById("pet-image");
  const petName = document.getElementById("pet-name");
  const petBreed = document.getElementById("pet-breed");
  const petAge = document.getElementById("pet-age");
  const petDescription = document.getElementById("pet-description");
  const petFunFacts = document.getElementById("pet-fun-facts");
  const closeDetailsButton = document.getElementById("close-details");

  // Add click event listeners to each pet
  document.querySelectorAll(".pet-item a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default navigation
      console.log("Pet link clicked!"); // Debug log
      const petId = event.currentTarget.getAttribute("data-pet-id");
      console.log("Pet ID:", petId); // Debug log
      const pet = petDetails[petId];

      if (pet) {
        console.log("Pet details found:", pet); // Debug log
        petImage.src = pet.image;
        petName.textContent = pet.name;
        petBreed.textContent = pet.breed;
        petAge.textContent = pet.age;
        petDescription.textContent = pet.description;
        petFunFacts.textContent = pet.funFacts;
        petDetailsSection.style.display = "block";
      } else {
        console.log("No pet details found for ID:", petId); // Debug log
      }
    });
  });
});