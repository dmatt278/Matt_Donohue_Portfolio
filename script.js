document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    document.querySelector("header").appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
});