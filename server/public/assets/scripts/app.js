$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/cat/dog",
        success: function(data){
            console.log(data);
        }
    });
});