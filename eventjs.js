var pinkFloyd = document.querySelectorAll("li"); 

for(var i = 0; i < pinkFloyd.length; i++){

pinkFloyd[i].addEventListener("mouseover",function(){
this.classList.add ("selected");
});

pinkFloyd[i].addEventListener("mouseout",function(){
this.classList.remove ("selected");
});

pinkFloyd[i].addEventListener("click",function(){
this.classList.toggle("done");
});

}






