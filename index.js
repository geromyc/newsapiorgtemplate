/*global $ APIKEY*/
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category: "business", country: "us", language: "en", apiKey: APIKEY},
        success: function(data) {
            if (data.status === "ok") {
                console.log(data)
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].id);
                    source.innerHTML = data.sources[i].name;
                    document.getElementById('selection').appendChild(source);
                }
            } 
        }
    })
    //     .done(function( data ) {
    //         console.log( data );
    //         console.log( data.status );
    //     });
    $('#source').submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources: document.getElementById("selection").value, category: "business", country: "us", language: "en", apiKey: APIKEY},
            success: function(event) {
                if (event.status === "ok") {
                    console.log(event)
                    for (var i = 0; i < event.articles.length; i++) {
                        var source = document.createElement("LI");
                        source.setAttribute("value", event.articles[i].title);
                        source.innerHTML = event.articles[i].title;
                        document.getElementById('display').appendChild(source);
                    }
                }
            }
        })
    })
})