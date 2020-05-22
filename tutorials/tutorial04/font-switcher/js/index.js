const makeBigger = () => {
   document.querySelector(".content").style.fontSize = 'larger'
};

const makeSmaller = () => {
   document.querySelector(".content").style.fontSize = 'smaller'
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

