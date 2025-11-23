// THEME TOGGLE -------------------------------------------------
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Change text based on mode
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});


// RANDOM STAT HIGHLIGHT ----------------------------------------
const statBtn = document.getElementById("random-stat");
const statLinks = [
  { name: "Career Points Leaders", url: "pointstat.html" },
  { name: "Career Rebounds Leaders", url: "rebstat.html" },
  { name: "Career Assists Leaders", url: "aststat.html" },
  { name: "Career Steals Leaders", url: "stlstat.html" },
  { name: "Career Blocks Leaders", url: "blkstat.html" }
];

statBtn.addEventListener("click", () => {
  const random = statLinks[Math.floor(Math.random() * statLinks.length)];

  // Create a popup-like alert using CSS
  alert(`Random Stat Selected:\n${random.name}\n\nClick OK to visit the page.`);

  // redirect
  window.location.href = random.url;
});