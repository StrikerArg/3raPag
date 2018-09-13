var coll1 = document.getElementsByClassName("abrederecha");
var i;

for (i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var flechaanimada = content.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      flechaanimada.style.display = "block";
    } else {
      content.style.display = "block";
      flechaanimada.style.display = "none";
    }
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      flechaanimada.style.maxHeight = flechaanimada.scrollHeight + "px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      flechaanimada.style.maxHeight = null;
    }
  });
}
/*
for (i = 0; i < coll.length; i++) {
  coll1[i].addEventListener("click", function() {
    this.classList.toggle("activo");
    var flechaanimada = this.nextElementSibling.nextElementSibling;
    if (flechaanimada.style.display === "none") {
      flechaanimada.style.display = "block";
    } else {
      flechaanimada.style.display = "none";
    }
    if (flechaanimada.style.maxHeight){
      flechaanimada.style.maxHeight = null;
    } else {
      flechaanimada.style.maxHeight = flechaanimada.scrollHeight + "px";
    }
  });
}*/
