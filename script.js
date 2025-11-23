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
// PLAYER SEARCH ON INDEX PAGE
// -------------------------
const searchInput = document.getElementById("search-input");

// Player-to-page mapping
const statPlayers = {
  "pointstat.html": [
    "Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant",
    "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain", "Shaquille O'Neal",
    "Moses Malone", "Elvin Hayes", "Hakeem Olajuwon", "Oscar Robertson",
    "Kevin Garnett", "Tim Duncan", "Dominique Wilkins", "Paul Pierce",
    "John Havlicek", "Kevin Durant", "George Gervin", "Allen Iverson",
    "Carmelo Anthony", "Vince Carter", "Alex English", "Reggie Miller",
    "James Harden"
  ],

  "rebstat.html": [
    "Wilt Chamberlain", "Bill Russell", "Kareem Abdul-Jabbar", "Elvin Hayes",
    "Moses Malone", "Tim Duncan", "Karl Malone", "Robert Parish",
    "Kevin Garnett", "Dwight Howard", "Bob Pettit", "Wes Unseld",
    "Hakeem Olajuwon", "Shaquille O'Neal", "David Robinson",
    "Patrick Ewing", "Charles Barkley", "Artis Gilmore", "Dikembe Mutombo",
    "Pau Gasol", "Dennis Rodman", "Larry Foust", "Zelmo Beaty", "Jerry Lucas",
    "Bill Laimbeer"
  ],

  "aststat.html": [
    "John Stockton", "Chris Paul", "Jason Kidd", "LeBron James", "Steve Nash",
    "Mark Jackson", "Magic Johnson", "Russell Westbrook", "Oscar Robertson",
    "Isiah Thomas", "Gary Payton", "Andre Miller", "James Harden",
    "Rod Strickland", "Rajon Rondo", "Maurice Cheeks", "Lenny Wilkens",
    "Terry Porter", "Kyle Lowry", "Tim Hardaway", "Tony Parker", "Bob Cousy",
    "Guy Rodgers", "Deron Williams", "Muggsy Bogues"
  ],

  "stlstat.html": [
    "John Stockton", "Jason Kidd", "Chris Paul", "Michael Jordan",
    "Gary Payton", "Maurice Cheeks", "Scottie Pippen", "Clyde Drexler",
    "Hakeem Olajuwon", "Alvin Robertson", "Karl Malone", "Allen Iverson",
    "Kobe Bryant", "Shaquille O’Neal", "Mookie Blaylock", "LeBron James",
    "Paul Pierce", "Kevin Garnett", "Manu Ginóbili", "Jimmy Butler",
    "Russell Westbrook", "Kawhi Leonard", "Baron Davis", "Andre Iguodala",
    "Jason Terry"
  ],

  "blkstat.html": [
    "Hakeem Olajuwon", "Dikembe Mutombo", "Kareem Abdul-Jabbar", "Mark Eaton",
    "Tim Duncan", "David Robinson", "Patrick Ewing", "Shaquille O’Neal",
    "Tree Rollins", "Robert Parish", "Kevin Garnett", "Marcus Camby",
    "Theo Ratliff", "Ben Wallace", "Rudy Gobert", "Alonzo Mourning",
    "Serge Ibaka", "Dwight Howard", "Manute Bol", "Artis Gilmore",
    "Shawn Bradley", "Bam Adebayo", "Anthony Davis", "Pau Gasol",
    "Hassan Whiteside"
  ]
};

// Search logic
searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();

  // Get all <a> links under the stat list
  const links = document.querySelectorAll("h2 + a");

  links.forEach(link => {
    const page = link.getAttribute("href");

    // Check if this page contains any matching player
    const match = statPlayers[page].some(player =>
      player.toLowerCase().includes(query)
    );

    // Show link only if it matches
    link.style.display = match || query === "" ? "block" : "none";
  });
});
