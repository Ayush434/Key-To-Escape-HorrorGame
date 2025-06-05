// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to all phase boxes
  const phaseBoxes = document.querySelectorAll('.phase-box');
  phaseBoxes.forEach(box => {
    box.addEventListener('click', function() {
      const phaseId = this.querySelector('.phase-content').id;
      togglePhase(phaseId);
    });
  });

  // Add click event listeners to all credit boxes
  const creditBoxes = document.querySelectorAll('.credit-box');
  creditBoxes.forEach(box => {
    box.addEventListener('click', function() {
      const content = this.querySelector('.credit-content');
      toggleCredit(content);
    });
  });
});

function togglePhase(phaseId) {
  const phaseContent = document.getElementById(phaseId);
  const allPhases = document.querySelectorAll('.phase-content');
  
  // If the clicked phase is already active, just close it
  if (phaseContent.classList.contains('active')) {
    phaseContent.classList.remove('active');
    return;
  }
  
  // Close all other phases
  allPhases.forEach(phase => {
    phase.classList.remove('active');
  });
  
  // Open only the clicked phase
  phaseContent.classList.add('active');
}

function toggleCredit(content) {
  const allCredits = document.querySelectorAll('.credit-content');
  
  // If the clicked credit is already active, just close it
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Close all other credits
  allCredits.forEach(credit => {
    credit.classList.remove('active');
  });
  
  // Open only the clicked credit
  content.classList.add('active');
} 