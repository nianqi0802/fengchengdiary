var weibodata;
var searchresult;


function preload(){
    weibodata = loadJSON("fengchengdiary.json");
}

function setup(){
  searchresult = weibodata[0]['Weibo'];

}

function draw(){
  
}




function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword);
  document.getElementById("searchresult").innerHTML = searchresult;
  
}