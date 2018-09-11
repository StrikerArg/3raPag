// When the user scrolls down 20px from the top of the document, show the button-----------------------------------------------------------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document-----------------------------------------------------------------------------------
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Collapsible button-----------------------------------------------------------------------------------
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// So vw units work.
// Thanks for this, Mr Coyier.

    // Chrome 26 needs this
    // Safari 6 needs this

    // Firefox 19 doesn't need it
    // IE 10 doesn't need it

        $(function() {

            causeRepaintsOn = $("h1, h2, h3, p");

            $(window).resize(function() {
                causeRepaintsOn.css("z-index", 1);
            });

        });
