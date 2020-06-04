
var searchresult=[];


function SearchWord(){
  var searchword = document.getElementById("searchkeyword").value;
  console.log(searchword);
  searchresult =[];
  for(let i =0;i<weibodatabase.length;i++){
    var yeshere = weibodatabase[i]['Weibo'].search(searchword);
    if(yeshere!=-1){
      searchresult.push(weibodatabase[i]['Weibo']);
    }
    
    
  }
  
  document.getElementById("amount").innerHTML = "共搜索到"+ searchresult.length +"篇";
  document.getElementById("searchresult").innerHTML = searchresult.join('<br><br>');
  
}