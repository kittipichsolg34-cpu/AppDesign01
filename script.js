// Starter JavaScript file

console.log("Industrialist Review Website Loaded!");


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
