// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Mock Gmail Login
function loginWithGoogle() {
    alert("Gmail login (mock) - No backend integration in static site.");
}

// Search Functionality
function search() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const blogPosts = document.querySelectorAll("#blog-section article");
    blogPosts.forEach(post => {
        const title = post.querySelector("h3").innerText.toLowerCase();
        post.style.display = title.includes(query) ? "" : "none";
    });
}

// Video Quality Control
function changeQuality(select) {
    const player = document.getElementById("video-player");
    const selectedQuality = select.value;
    const sources = player.querySelectorAll("source");
    sources.forEach(source => {
        if (source.getAttribute("data-quality") === selectedQuality) {
            player.src = source.src;
            player.load();
        }
    });
}
