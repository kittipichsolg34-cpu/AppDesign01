// Starter JavaScript file

console.log("Industrialist Review Website Loaded!");


// Example: Gallery image click effect
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        alert("Replace this with a lightbox or image viewer later.");
    });
}); // <-- THIS WAS MISSING

const steps = document.querySelectorAll(".step-title");

steps.forEach((step) => {
    step.addEventListener("click", () => {
        const content = step.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
            step.textContent = step.textContent.replace("▼", "▶");
        } else {
            content.style.display = "block";
            step.textContent = step.textContent.replace("▶", "▼");
        }
    });
});
