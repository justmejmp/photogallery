// JavaScript to handle click event and toggle expansion
const boxes = document.querySelectorAll('.box');

// Ensure no box is expanded initially (except for the first one)
boxes.forEach((box, index) => {
    if (index !== 0) {
        box.classList.remove('expanded'); // Ensure no image is expanded on load
    }
});

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // Remove the 'expanded' class from all boxes
        boxes.forEach((box) => {
            box.classList.remove('expanded');
        });

        // Add the 'expanded' class to the clicked box
        box.classList.add('expanded');
    });
});
