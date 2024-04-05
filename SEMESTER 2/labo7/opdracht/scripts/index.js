document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    // Randomly select one block to start with as black
    const randomIndex = Math.floor(Math.random() * gridItems.length);
    gridItems[randomIndex].classList.add('clicked');

    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // If clicked block is already clicked, do nothing
            if (this.classList.contains('clicked')) {
                // Reset the clicked block to white
                this.classList.remove('clicked');
                // Randomly select another block to become black
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * gridItems.length);
                } while (gridItems[newIndex].classList.contains('clicked'));
                // Mark the new block as black
                gridItems[newIndex].classList.add('clicked');
            }
        });
    });
});
