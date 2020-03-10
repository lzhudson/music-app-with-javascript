window.addEventListener('load', () => {
  console.log('hello');
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    "#60D394",
    "#D36060",
    "#C060D3",
    "#D3D160",
    "#6860D3",
    "#60B2D3"
  ];
  // Lets get going going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function (e) {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  function createBubbles(index) {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', (e) => {
      visual.removeChild();
    })
  }
});
