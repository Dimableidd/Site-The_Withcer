const lutic = document.querySelector('#lutic');
const triss1 = document.querySelector('#triss1');
const yorweth = document.querySelector('#yorweth');
const letho = document.querySelector('#letho');
const vernon = document.querySelector('#vernon');
const dethmold = document.querySelector('#dethmold');
const zoltan = document.querySelector('#zoltan');

const faded = document.querySelectorAll('.faded');
const char_box = document.querySelectorAll('.char_box');

const info_lutic = document.querySelectorAll('.info_lutic');
const info_triss1 = document.querySelectorAll('.info_triss1');
const info_yorweth = document.querySelectorAll('.info_yorweth');
const info_letho = document.querySelectorAll('.info_letho');
const info_vernon = document.querySelectorAll('.info_vernon');
const info_dethmold = document.querySelectorAll('.info_dethmold');
const info_zoltan = document.querySelectorAll('.info_zoltan');

lutic.addEventListener('click', function(event) {
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
    info_lutic.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  triss1.addEventListener('click', function(event) {
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
    info_triss1.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  yorweth.addEventListener('click', function(event) {
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
    info_yorweth.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  letho.addEventListener('click', function(event) {
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
    info_letho.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  vernon.addEventListener('click', function(event) {
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
    info_vernon.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  dethmold.addEventListener('click', function(event) {
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
    info_dethmold.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  zoltan.addEventListener('click', function(event) {
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
    info_zoltan.forEach(function(block) {
      block.style.display = 'block';
    });
  });
