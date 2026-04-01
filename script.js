// =============================================
// 1. DOM ELEMENTS
// =============================================

const progressBar = document.getElementById("progressBar");
const header = document.querySelector(".header");

// =============================================
// 2. SCROLL PROGRESS BAR
// =============================================

function updateProgressBar() {
  const scrollTop = window.scrollY;

  const maxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (maxScroll === 0) return;

  const progress = (scrollTop / maxScroll) * 100;

  progressBar.style.width = progress + "%";
}

// =============================================
// 3. HEADER SCROLL EFFECT
// =============================================

function updateHeaderOnScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// =============================================
// 4. INTERSECTION OBSERVER
// =============================================

function createObserver(thresholdValue) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: thresholdValue,
    },
  );
}

// =============================================
// 5. MULTIPLE OBSERVERS
// =============================================

const observerLow = createObserver(0.2);
const observerMedium = createObserver(0.4);
const observerHigh = createObserver(0.6);

// =============================================
// 6. THRESHOLD ELEMENTS
// =============================================

const lowThresholdElements = document.querySelectorAll(".threshold-low");
const mediumThresholdElements = document.querySelectorAll(".threshold-medium");
const highThresholdElements = document.querySelectorAll(".threshold-high");

// =============================================
// 7. OBSERVE ELEMENTS
// =============================================

lowThresholdElements.forEach((element) => {
  observerLow.observe(element);
});

mediumThresholdElements.forEach((element) => {
  observerMedium.observe(element);
});

highThresholdElements.forEach((element) => {
  observerHigh.observe(element);
});

// =============================================
// 8. EVENT LISTENERS
// =============================================

window.addEventListener("scroll", () => {
  updateProgressBar();
  updateHeaderOnScroll();
});

updateProgressBar();
updateHeaderOnScroll();
