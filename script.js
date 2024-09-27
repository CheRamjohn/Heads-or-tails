const tally = {
    heads: 0,
    tails: 0
  };
  
  const generate = document.querySelector(".generate");
  const headsCount = document.querySelector(".headCount");
  const tailsCount = document.querySelector(".tailCount");
  const headsList = document.querySelector(".headList");
  const tailsList = document.querySelector(".tailList");
  
  function getHeadsOrTails() {
    return Math.floor(Math.random() * 2) < 0.5 ?  "heads" : "tails";
  
  }
  
  function updateDisplayOfTally() {
    headsCount.textContent = tally.heads;
    tailsCount.textContent = tally.tails;
  
  }
  
  function listUpdater(result) {
    const itemList = document.createElement("li");
    itemList.textContent = result;
  
    if (result === "heads") {
        headList.appendChild(itemList);
  
    } else {
  
        tailList.appendChild(itemList);
    }
  }
  
  function displayResult(result, listElement) {
    const img = document.createElement('img');
    const imgTwo = document.createElemet('img');
    img.src = coinImages[0]; 
    imgTwo.src = coinImages[1];
    listElement.appendChild(img); 
  }
  
  generate.addEventListener('click', function () {
    const result = getHeadsOrTails();
    tally[result]++;
    updateDisplayOfTally();
    listUpdater(result);
  
  });