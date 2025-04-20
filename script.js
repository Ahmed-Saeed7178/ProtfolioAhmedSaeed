// Show a welcome message in the browser console
console.log("Welcome to Ahmed Saeed's Portfolio!");

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Target the <h1> element with your name
  const nameElement = document.querySelector(".hero h1");

  // Add click event to show an alert
  if (nameElement) {
    nameElement.addEventListener("click", function () {
      alert("Welcome to my portfolio!");
    });
  }

  // Create a button to change background color
  const button = document.createElement("button");
  button.textContent = "Change Background Color";
  button.style.padding = "10px 20px";
  button.style.marginTop = "20px";
  button.style.cursor = "pointer";

  // Add the button to your container
  document.querySelector(".container").appendChild(button);

  // Add click event to the button
  button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });

  // Function to get a random color
  function getRandomColor() {
    const colors = ["#f2f2f2", "#ffe4e1", "#e0ffff", "#fafad2", "#d3ffd3"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
