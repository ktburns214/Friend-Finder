$("#submit").on("click", function (event) {
    event.preventDefault();

    var newFriend = {
        name: $("#input-name").val().trim(),
        email: $("#input-email").val().trim(),
        scores: []
    }

    for (let i = 1; i < 11; i++) {
        let inputAnswer = $("#input" + i).val();;
        newFriend.scores.push(+inputAnswer);
    }


    $("#input-name").val("");
    $("#input-email").val("");

    for (let i = 1; i < 11; i++) {
        $("#input" + i).val("Choose...");
    }

    $.post("/api/friends", newFriend)
        .then(function (data) {
            let bffName = $("<h3>")
                .text("Name: " + data.name);
            let bffEmail = $("<p>")
                .text(data.email);

            $(".modal-body").empty();
            $(".modal-body").append(bffName, bffEmail, bffImg);

            $('#myModal').modal('show')
        });

})  