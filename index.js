function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div div.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);
    lis[i].innerHTML = lis[i].innerHTML + n;
  }
}

increaseRankBy(5);

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

