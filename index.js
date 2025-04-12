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
  gsap.ticker.add((time) => {
  });
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

    const text = new SplitTypes(char, { types: "chars" });

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
