// Get reference to the button and the heading element
var button = document.getElementById('changeButton');
var heading = document.getElementById('heading');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Change the text content of the heading element
    heading.textContent = 'New Heading';
});