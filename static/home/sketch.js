var weibodata;


function preload(){
    weibodata = loadJSON("/home/test.json");
}

function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword[0]["Weibo"]);
  
}