/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// Per menú navegació toggle mobile

document.querySelector('.nav__toggle').addEventListener('click', () => {
  document.querySelector('.nav__list').classList.toggle('nav__list--visible');
});