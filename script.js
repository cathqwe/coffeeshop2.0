
document.querySelector('.arrow').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.querySelector('#btn').addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#b2744c';
    this.style.color = 'white';
  });
  
  document.querySelector('#btn').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  });
 