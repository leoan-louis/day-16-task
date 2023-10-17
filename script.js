function countdown(callback) {
    let count = 10;
  
    function startCountdown() {
      if (count >= 1) {
        console.log(count);
        count--;
        setTimeout(startCountdown, 1000); // Wait for 1 second
      } else {
        callback();
      }
    }
  
    startCountdown();
  }
  
  function displayMessage() {
    console.log("Happy Independence Day!");
  }
  
  // Start the countdown
  countdown(displayMessage);
  
  