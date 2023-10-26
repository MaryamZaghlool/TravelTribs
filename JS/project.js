document.getElementsByClassName("humbg")[0].onclick = function () {
  document.getElementById("comp").classList.toggle("collap");
};
document.getElementsByClassName("arrow")[0].onclick = function () {
  document.getElementsByClassName("list")[0].classList.toggle("viewing");
};
let imgs = document.getElementsByClassName("img2");
let mg=document.getElementsByClassName("img1")[0];
function img() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
      for (let j = 0; j < imgs.length; j++) {
        imgs[j].classList.remove("hover");
      }
      this.classList.add("hover");
      if(this.src==="file:///E:/Maryam/frontend%20projects/project/Images/slide-1.jpg")
         mg.style.backgroundImage="url('Images/slide-1.jpg')";
     else if(this.src==="file:///E:/Maryam/frontend%20projects/project/Images/tri2.jpg")
     mg.style.backgroundImage ="url('Images/tri2.jpg')";
     else if(this.src==="file:///E:/Maryam/frontend%20projects/project/Images/tri3.jpg")
     mg.style.backgroundImage="url('Images/tri3.jpg')";
     else if(this.src==="file:///E:/Maryam/frontend%20projects/project/Images/tri4.jpg")
     mg.style.backgroundImage="url('Images/tri4.jpg')";
     else if(this.src==="file:///E:/Maryam/frontend%20projects/project/Images/sh-7.jpg")
     mg.style.backgroundImage ="url('Images/sh-7.jpg')";
    };
  }
}
img();
document.getElementsByClassName("right")[0].onclick=function(){
  for (let i = 0; i < imgs.length; i++) {
    if(imgs[i].classList.contains("hover"))
    {
      if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/slide-1.jpg"){
        mg.style.backgroundImage="url('Images/tri2.jpg')";
        imgs[i].classList.remove("hover");
        imgs[i+1].classList.add("hover");
        break;
      }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri2.jpg")
     {
      mg.style.backgroundImage ="url('Images/tri3.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i+1].classList.add("hover");
      break;
     }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri3.jpg"){
      mg.style.backgroundImage="url('Images/tri4.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i+1].classList.add("hover");
      break;
     }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri4.jpg"){
      mg.style.backgroundImage="url('Images/sh-7.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i+1].classList.add("hover");
      break;
     }
    }

  }
}
document.getElementsByClassName("left")[0].onclick=function(){
  for (let i = 0; i < imgs.length; i++) {
    if(imgs[i].classList.contains("hover"))
    {
     if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri2.jpg")
     {
      mg.style.backgroundImage ="url('Images/slide-1.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i-1].classList.add("hover");
      break;
     }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri3.jpg"){
      mg.style.backgroundImage="url('Images/tri2.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i-1].classList.add("hover");
      break;
     }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/tri4.jpg"){
      mg.style.backgroundImage="url('Images/tri3.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i-1].classList.add("hover");
      break;
     }
     else if(imgs[i].src==="file:///E:/Maryam/frontend%20projects/project/Images/sh-7.jpg"){
      mg.style.backgroundImage="url('Images/tri4.jpg')";
      imgs[i].classList.remove("hover");
      imgs[i-1].classList.add("hover");
      break;
    }
    }

  }
}
let list = document.getElementsByClassName("items");
function select() { 
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove("select");
      }
      this.classList.add("select");
      console.log(this);
      window.localStorage.setItem("ele",this.getAttribute("data-index"))
      document.getElementById("img").src = this.children[0].src;
      document.getElementsByClassName("list")[0].classList.toggle("viewing");
    };
  }
}
select();
let local=Number(localStorage.getItem("ele"))-1;
if(local!=null){
  for(let i=0;i<list.length;i++){
    if(local===i){
      list[i].classList.add("select");
      document.getElementById("img").src = list[i].children[0].src;
    }
    else{
      list[i].classList.remove("select");
    }
  }
}
let up=document.getElementsByClassName("up")[0];
window.addEventListener("scroll",()=>{
  if(document.body.scrollTop>=250 || document.documentElement.scrollTop>=250){
    up.classList.remove("hide");
  }else{
    up.classList.add("hide");
  }
})
up.onclick=function(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
