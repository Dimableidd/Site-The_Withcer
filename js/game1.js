const triss = document.querySelector('#triss');
const vesimir = document.querySelector('#vesimir');
const siegfried = document.querySelector('#siegfried');
const toruviel = document.querySelector('#toruviel');

const faded = document.querySelectorAll('.faded');
const char_box = document.querySelectorAll('.char_box');
const info_triss = document.querySelectorAll('.info_triss');
const info_vesimir = document.querySelectorAll('.info_vesimir');
const info_siegfried = document.querySelectorAll('.info_siegfried');
const info_toruviel = document.querySelectorAll('.info_toruviel');

triss.addEventListener('click', function(event) {
    event.preventDefault(); 
  
    faded.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 0.5;
    }, 10);
    });
    char_box.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 1;
    }, 10);
    });
    info_triss.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  
  vesimir.addEventListener('click', function(event) {
    event.preventDefault(); 
  
    faded.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 0.5;
    }, 10);
    });
    char_box.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 1;
    }, 10);
    });
    info_vesimir.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  
  siegfried.addEventListener('click', function(event) {
    event.preventDefault(); 
  
    faded.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 0.5;
    }, 10);
    });
    char_box.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 1;
    }, 10);
    });
    info_siegfried.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  
  toruviel.addEventListener('click', function(event) {
    event.preventDefault(); 
  
    faded.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 0.5;
    }, 10);
    });
    char_box.forEach(function(block) {
      block.style.display = 'block';
      setTimeout(function(){
        block.style.opacity = 1;
    }, 10);
    });
    info_toruviel.forEach(function(block) {
      block.style.display = 'block';
    });
  });
