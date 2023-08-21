// mainpage.js
document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.getElementById("userIcon");
    const dropdownContent = document.getElementById("dropdownContent");

    userIcon.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", (event) => {
        if (!event.target.matches("#userIcon") && !event.target.matches(".dropdown-content")) {
            dropdownContent.classList.remove("show");
        }
    });
});
