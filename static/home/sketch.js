var weibodata;


function preload(){
    weibodata = loadJSON("/home/fengchengdiary.json");
}

function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword);
  console.log(weibodata[0]['Weibo']);
}