const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // Check if shift key is down
  // Check if they are checking it, not unchecking
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      // 1. Check if first checked box is equal to this, or the box that you just checked (This would check for bottom to top shift click)
      // 2. Check if the checkbox is equal to the lastChecked, or this
      if (checkbox === this || checkbox === lastChecked) {
        // If true, set !inBetween to true
        inBetween = !inBetween;
      }
      // Check all boxes next in the loop until an unchecked box is met
      if(inBetween) {
        checkbox.checked = true;
      }
    })
  }
  
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
})