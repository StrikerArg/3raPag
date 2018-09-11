var coll1 = document.getElementsByClassName("abrederecha");
var i;

for (i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    //var flechaanimada = document.getElementsByClassName("ico");
    if (content.style.display === "block") { // && flechaanimada.style.display === "none"
      content.style.display = "none";
      //flechaanimada.style.display="block";
    } else {
      content.style.display = "block";
      //flechaanimada.style.display="none";
    }
    if (content.style.maxHeight){ // && flechaanimada.style.maxHeight
      content.style.maxHeight = null;
      //flechaanimada.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      //flechaanimada.style.maxHeight = null;
    }
  });
}

//$('.grande100').animateNumber({ number: 100 });
//$('.grande83').animateNumber({ number: 83 });
