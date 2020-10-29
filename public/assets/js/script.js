// Add new movie to list
$(".btn-success").click(function(event) {
    event.preventDefault();
    var newMovie = $("#newTitle").val().trim();
    
    $.ajax("/create", {
        type: "POST",
        data: {
            title: newMovie
        }
    }).then(
        function(){
            console.log("added to list");
            location.reload();
        }
    )
})

// Move watched movie to 'movies to watch' list
$(".unwatchMovie").click(function(){
    var id = $(this).data("id");
    console.log(id);
    var seen = 0;
    var urlString = "/" + id + "/" + seen;

    $.ajax(urlString, {
        type: "PUT"
    }).then(
        function() {
            console.log('Moved to unwatched list');
            location.reload();
        }
    )
})

// move unwatched movie to watched list
$(".watchMovie").click(function(){
    var id = $(this).data("id");
    var seen = 1;
    var urlString = "/" + id + "/" + seen;

    $.ajax(urlString, {
        type: "PUT"
    }).then(
        function() {
            console.log("moved to watched list");
            // refresh the page
            location.reload();
        }
    )
})


