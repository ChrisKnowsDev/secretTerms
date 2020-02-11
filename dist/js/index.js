const terms = document.querySelector('.terms-and-conditions')
const button = document.querySelector('button');

function obCallback(payload) {
  if(payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing
    ob.unobserve(terms.lastElementChild);
  } 
}

const ob = new IntersectionObserver(obCallback);

ob.observe(terms.lastElementChild);