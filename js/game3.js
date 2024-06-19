const eredin = document.querySelector('#eredin');
const emgir = document.querySelector('#emgir');
const yennifer = document.querySelector('#yennifer');
const ciri = document.querySelector('#ciri');
const vesimir1 = document.querySelector('#vesimir1');
const triss2 = document.querySelector('#triss2');

const faded = document.querySelectorAll('.faded');
const char_box = document.querySelectorAll('.char_box');

const info_eredin = document.querySelectorAll('.info_eredin');
const info_emgir = document.querySelectorAll('.info_emgir');
const info_yennifer = document.querySelectorAll('.info_yennifer');
const info_ciri = document.querySelectorAll('.info_ciri');
const info_vesimir1 = document.querySelectorAll('.info_vesimir1');
const info_triss2 = document.querySelectorAll('.info_triss2');

eredin.addEventListener('click', function(event) {
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
    info_eredin.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  emgir.addEventListener('click', function(event) {
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
    info_emgir.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  yennifer.addEventListener('click', function(event) {
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
    info_yennifer.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  ciri.addEventListener('click', function(event) {
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
    info_ciri.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  vesimir1.addEventListener('click', function(event) {
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
    info_vesimir1.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  triss2.addEventListener('click', function(event) {
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
    info_triss2.forEach(function(block) {
      block.style.display = 'block';
    });
  });
