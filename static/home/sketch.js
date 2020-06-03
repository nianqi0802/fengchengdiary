var weibodata;
var searchresult;


function preload(){
    weibodata = loadJSON("/home/fengchengdiary.json");
}

function setup(){
  searchresult = weibodata[0]['Weibo'];

}





function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword);
  document.getElementById("searchresult").innerHTML = searchresult;
  
}