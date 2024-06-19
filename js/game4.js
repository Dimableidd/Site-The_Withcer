const reinard = document.querySelector('#reinard');
const broover = document.querySelector('#broover');
const meva = document.querySelector('#meva');
const gaskon = document.querySelector('#gaskon');
const dagi = document.querySelector('#dagi');
const demavend = document.querySelector('#demavend');

const faded = document.querySelectorAll('.faded');
const char_box = document.querySelectorAll('.char_box');

const info_reinard = document.querySelectorAll('.info_reinard');
const info_broover = document.querySelectorAll('.info_broover');
const info_meva = document.querySelectorAll('.info_meva');
const info_gaskon = document.querySelectorAll('.info_gaskon');
const info_dagi = document.querySelectorAll('.info_dagi');
const info_demavend = document.querySelectorAll('.info_demavend');

reinard.addEventListener('click', function(event) {
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
    info_reinard.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  broover.addEventListener('click', function(event) {
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
    info_broover.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  meva.addEventListener('click', function(event) {
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
    info_meva.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  gaskon.addEventListener('click', function(event) {
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
    info_gaskon.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  dagi.addEventListener('click', function(event) {
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
    info_dagi.forEach(function(block) {
      block.style.display = 'block';
    });
  });
  demavend.addEventListener('click', function(event) {
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
    info_demavend.forEach(function(block) {
      block.style.display = 'block';
    });
  });
