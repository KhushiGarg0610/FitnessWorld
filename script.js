
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;

  startButton.addEventListener('click', () => {
   
    startButton.style.pointerEvents = 'none';
    
    deg = Math.floor(500 + Math.random() * 1500);
  
    wheel.style.transition = 'all 10s ease-out';

    wheel.style.transform = `rotate(${deg}deg)`;

  });

  wheel.addEventListener('transitionend', () => {
    
	wheel.classList.remove('blur');
    
	startButton.style.pointerEvents = 'auto';
    
	wheel.style.transition = 'none';
    
	const actualDeg = deg % 360;
    
	wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
