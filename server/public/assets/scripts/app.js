/* I realize that I don't know how to connect angular with mongoose.
I don't know how to use the information from the form in my angular code.
 */

var app = angularModule('catApp', ['ngRoute']);

app.config(function($routeProvider){
    // set up routes
    $routeProvider.when('/', {
        templateUrl: '/views/index.html',
        controller: 'catCtrl'
    });
});

app.controller('catCtrl', ['$scope', '$http', function($scope, $http){
    $http({
        url:'/',
        method:'get'
    }).then(function(){

    });
}]);

/*
OLD CODE

$(document).ready(function(){

    $("#catform").on("submit", submitCats);

    fetchCats();
});

function submitCats(event){
    event.preventDefault();

    var catObject = {};
    catObject.username = $("#username").val();

    $.ajax({
        type: "POST",
        data: catObject,
        url: "/cat",
        success: function(anythingWeWant){
            console.log(anythingWeWant);
            fetchCats();
        }
    });

}

function fetchCats(){
    $.ajax({
        type: "GET",
        url: "/cat",
        success: function(data){
            appendDom(data);
        }
    });
}

function appendDom(data){
    $("#container").empty();
    for(var i = 0; i < data.length; i++){
        $("#container").append("<div></div>");

        var $el = $("#container").children().last();
        $el.append("<p>" + data[i].username + "</p>");
    }
} */