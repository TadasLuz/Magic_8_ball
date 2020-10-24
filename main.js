function required() {
    var empty = document.form1.text1.value;
    if (empty === "" || empty === null) {
        alert('Please Ask YES/NO Question');
        return false;
    } else {
        window.location.replace('answer.html');
        return false;
    }
}

/*
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
*/
$(document).ready(function(){
    $('#show').click(function() {
      $('.about').toggle("fast");
    });
});