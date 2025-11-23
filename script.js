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

// -------------------------
// LIVE PLAYER SEARCH PREVIEW ON INDEX PAGE
// -------------------------
const searchInput = document.getElementById("search-input");
const previewBox = document.getElementById("search-preview");

// Player-to-page mapping
const statPlayers = {
  "pointstat.html": [...],
  "rebstat.html": [...],
  "aststat.html": [...],
  "stlstat.html": [...],
  "blkstat.html": [...]
};

// Convert entries into a searchable list
const playerIndex = [];
Object.keys(statPlayers).forEach(page => {
  statPlayers[page].forEach(player => {
    playerIndex.push({
      name: player,
      page: page
    });
  });
});

// Live preview logic
searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  previewBox.innerHTML = "";

  if (query === "") {
    previewBox.style.display = "none";
    return;
  }

  // Find matches
  const matches = playerIndex.filter(entry =>
    entry.name.toLowerCase().includes(query)
  ).slice(0, 20); // max 20 results

  if (matches.length === 0) {
    previewBox.innerHTML = "<p style='padding:8px;'>No results found.</p>";
    previewBox.style.display = "block";
    return;
  }

  // Build preview items
  matches.forEach(m => {
    const div = document.createElement("div");
    div.classList.add("preview-item");

    div.innerHTML = `
      <div class="preview-player">${m.name}</div>
      <div class="preview-category">${m.page.replace(".html","").toUpperCase()}</div>
    `;

    // Click to go to that stat page
    div.addEventListener("click", () => {
      window.location.href = m.page;
    });

    previewBox.appendChild(div);
  });

  previewBox.style.display = "block";
});

// Hide preview when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !previewBox.contains(e.target)) {
    previewBox.style.display = "none";
  }
});
