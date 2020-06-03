var weibodata;


function preload(){
    weibodata = loadJSON("/home/fengchengdiary.json");
}

function setup(){
  console.log(weibodata[0]);
}

function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword);
  
  
}