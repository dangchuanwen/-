


function loadAnimation(){                               
    if(!document.getElementById) return false;
    var img_box=document.getElementsByClassName("img-box")[0];
    img_box.style.left="0px";
    img_box.style.top="0px";
    cycle(0);
    addHover();
   
}
function addHover(){                            
    var choose_brand=document.getElementsByClassName("choose-brand")[0];
    var brand=choose_brand.getElementsByTagName("div");
    var img_box=document.getElementsByClassName("img-box")[0];
    var box=document.getElementById("box");
    var all_img=document.getElementsByClassName("img-box")[0].getElementsByTagName("img");
    var add=function(e,i){
        e.onmouseover=function(){
           if(img_box["cycle"]) clearInterval(img_box["cycle"]);
           if(img_box["moveOut"]) clearTimeout(img_box["moveOut"]);
            move(img_box,-i*900,0,i);
            logo(i);
        }
    }
    for(var i=0;i<all_img.length;i++){
        all_img[i].onmousemove=function(){
            if(img_box["cycle"]) clearInterval(img_box["cycle"]);
            if(img_box["moveOut"]) clearTimeout(img_box["moveOut"]);
        }
    }
    for(var i=0;i<brand.length;i++){
        add(brand[i],i);
    }
    choose_brand.onmouseout=function(){
        img_box["moveOut"]=setTimeout(function(){
            if(img_box["cycle"]) clearInterval(img_box["cycle"]);
          // if(img_box["moveOut"]) clearTimeout(img_box["moveOut"]);
           if(img_box["moveTimer"])clearInterval(img_box["moveTimer"]);
          var order=document.getElementsByClassName("img-box")[0]["moveInstance"];
          console.log(order);
         
           cycle(order);
        },3000);
    }
   
}
function cycle(order){                                      //循环
    
    var img_box=document.getElementsByClassName("img-box")[0];
    var img_num=img_box.getElementsByTagName("img").length;
    img_box['moveInstance']=order;
    logo(order);
    img_box["cycle"]=setInterval(function(){
       
        
      
       logo(img_box["moveInstance"]);
        move(img_box,-img_box["moveInstance"]*900,0,img_box["moveInstance"]);
        img_box["moveInstance"]++;
    
    if(img_box["moveInstance"]==img_num) img_box["moveInstance"]=0;
      
       
        
    },2000);
}
function logo(order){                                       //改变图片的 提示框样式
    var choose_brand=document.getElementsByClassName("choose-brand")[0];
    var brands=choose_brand.getElementsByTagName("div");
    for(var i=0,len=brands.length;i<len;i++){
        brands[i].style.backgroundColor="#121112";
        brands[i].style.color="#C4C4C4";
    }
    brands[order].style.backgroundColor="#303030";
    brands[order].style.color="#BF9F5D";
    
}
function moveBasic(e,left,top){                                 //移动的基本操作
    
    var now_left=parseInt(e.style.left);
    var now_top=parseInt(e.style.top);
    if(now_left<left) now_left+=Math.ceil((left-now_left)/10);
    else if(now_left>left) now_left-= Math.ceil((now_left-left)/10);
    if(now_top<top) now_top+=Math.ceil((top-now_top)/10);
    else if(now_top>top) now_top-=Math.ceil((now_top-top)/10);
    e.style.left=now_left+'px';
    e.style.top=now_top+'px';
}
function move(e,left,top,index){                        //移动元素 
    if(e["moveTimer"])clearInterval(e["moveTimer"]);
    e["moveInstance"]=index;
    e["moveTimer"]=setInterval(function(){
        moveBasic(e,left,top);
    },10);
    
    
}
window.onload=function(){
    loadAnimation();
}
