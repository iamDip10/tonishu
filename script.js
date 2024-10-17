const button = document.getElementById('movingButton');
const container = document.querySelector('.container');
const yesButton = document.getElementById('yes');
const messageDisplay = document.querySelector('.ifyes');
const infoMessage = document.getElementById('p');

// Store the last position of the button
let lastPosition = 0;

const moveButton = (event) => {
    // Get the dimensions of the button and container
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Get pointer position (mouse or touch)
    const pointerX = event.clientX || event.touches[0].clientX;

    // Calculate new X position
    let randomX;

    // Move the button away from the pointer
    if (pointerX > buttonRect.left + buttonRect.width / 2) {
        // Move left
        randomX = Math.max(0, buttonRect.left - 100); // Move left by 100px
    } else {
        // Move right
        randomX = Math.min(containerRect.width - buttonRect.width, buttonRect.left + 100); // Move right by 100px
    }

    // If the new position is the same as the last position, randomize a bit
    if (randomX === lastPosition) {
        randomX += randomX > containerRect.width / 2 ? -100 : 100; // Adjust position slightly
    }

    // Set the new position of the button
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${button.style.top || 0}px`; // Keep the Y position the same

    // Update the last position
    lastPosition = randomX;

    // Show the info message
    infoMessage.style.display = "block";
};

// Event listeners for mouse hover and tap
button.addEventListener('mouseover', moveButton);
button.addEventListener('touchstart', moveButton); // Handle touch for mobile devices
button.addEventListener('click', moveButton); // Handle click for mobile devices

// Show the thank you message and hide the buttons when "Yes" is clicked
yesButton.addEventListener('click', () => {
    messageDisplay.style.display = 'flex'; // Show the thank you message
    container.style.display = 'none'; // Hide the container
});
