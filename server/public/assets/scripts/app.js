$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/kitties",
        success: function(data){
            console.log(data);
        }
    });
});