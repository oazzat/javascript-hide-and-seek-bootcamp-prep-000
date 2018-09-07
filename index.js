

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var tot = document.querySelectorAll("ul.ranked-list li")
  
  for(var i=0; i<tot.length; i++){
    tot[i].innerHTML = parseInt(tot[i].innerHTML)+n
  }
}

/*
function deepestChild(){
  var gnode = document.querySelector("#grand-node")
  var deepest 
  for(var i=0; i<gnode.length; i++){
    deepest = gnode[i]
  }
  return deepest
}
*/

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}

//var test = getFirstSelector("unranked-list")
//console.log(test)

//var sel = document.getElementById("app").querySelector(selector)
//console.log(sel)
