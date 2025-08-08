
document.addEventListener('DOMContentLoaded', () => {
    console.log("website loaded");
});


const githubBtn = document.getElementById("githubBtn")
const blueskyBtn = document.getElementById("blueskyBtn")
const steamBtn = document.getElementById("steamBtn")


githubBtn.addEventListener("click", function(e) {

    console.log("github button was clicked");
    window.location.href = "https://github.com/antahy";

})

blueskyBtn.addEventListener("click", function(e) {

    console.log("bluesky button was clicked");
    window.location.href = "https://bsky.app/profile/antahy.github.io";

})

steamBtn.addEventListener("click", function(e) {

    console.log("steam button was clicked");
    window.location.href = "https://steamcommunity.com/id/antahy/";

})


