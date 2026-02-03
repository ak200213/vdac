const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionScreen = document.getElementById("question-screen");
const successScreen = document.getElementById("success-screen");

// Get the viewport dimensions
const getDimensions = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};

// Function to move the NO button
const moveButton = () => {
    const { width, height } = getDimensions();
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random position
    // We subtract btnWidth/Height to ensure it stays fully INSIDE the screen
    const newX = Math.random() * (width - btnWidth - 50); 
    const newY = Math.random() * (height - btnHeight - 50);

    // Apply new position
    // We change position to 'fixed' so it breaks out of the flex container
    noBtn.style.position = "fixed";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
};

// Event Listeners for the "NO" button
// Desktop hover
noBtn.addEventListener("mouseover", moveButton);
// Mobile touch (starts moving as soon as they tap)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevents clicking
    moveButton();
});

// Event Listener for "YES" button
yesBtn.addEventListener("click", () => {
    // Hide Question
    questionScreen.classList.add("hidden");
    
    // Show Success
    successScreen.classList.remove("hidden");
    
    // Optional: Add a cute background color change
    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fecfef)";
});