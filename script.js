document.addEventListener("DOMContentLoaded", function() {
    const workInProgressMessage = document.getElementById("workInProgressMessage");
    
    // Function to show the message
    function showMessage() {
        const isWorkInProgress = true; // Change this to false when your portfolio is complete
    
        if (isWorkInProgress) {
            workInProgressMessage.textContent = "This portfolio is a work in progress. Check back later for updates.";
        } else {
            workInProgressMessage.textContent = "Welcome to my completed portfolio!";
        }
    }
    
    // Delay the message by 5 seconds (5000 milliseconds)
    setTimeout(showMessage, 5000);
});



// Function to scroll to the target element smoothly
// Function to scroll to the target element smoothly
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to scroll to the target element smoothly
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add a click event listener to all links with href starting with #
var scrollLinks = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        var targetId = this.getAttribute('href').substring(1); // Get the target ID (remove #)
        scrollToElement(targetId); // Scroll to the target section
    });
}


