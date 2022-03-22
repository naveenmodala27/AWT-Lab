function movie1(){
    var request=new XMLHttpRequest();
    var key='k_ke00iaio';
    var movie=document.getElementById("temp").value;
    var lan=document.getElementById("temp1").value;
   var url='https://imdb-api.com/'+lan+'/API/FullCast/'+key+'/'+movie
    request.open('Get',url);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result.title);
       document.getElementById("result").value=result.actors[0].name;
    }
    request.send();
}