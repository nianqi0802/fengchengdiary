var weibopost;


function preload(){
    weibopost = loadJSON("test.json");
}



function SearchWord(){
    var keyword = document.getElementById("keyword").value;
    console.log(keyword);
    console.log(weibopost);
}