console.log("JS file connected");

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'icon'
    const icons = document.querySelectorAll(".icon");

    // Loop through each icon and add a click event listener
    icons.forEach(icon => {
        icon.addEventListener("click", function() {
            // Log the ID of the clicked element to the console using string templates
            console.log(`You clicked on the logo representing ${this.id}`);
        });
    });
});
