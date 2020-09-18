//filter
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//select a game
$(document).ready(function () {
    $(".selectbtn").click(function () {
        
        let card = $(this).parent().parent();
        let game = ($(this).siblings(".card-title").text());

        $("#unwanted-games").append("<li class='list-group-item'>" + game + "</li>");

        //remove card from the list
        card.addClass("selected");
        card.removeClass("card");
        card.toggle();

        //add unselect function
        $("#unwanted-games :last-child").click(function () {
            for (let i = 0; i < $(".selected").length; i++) {
                if ($($(".selected")[i]).find(".card-title").text() == $(this).text()) {
                    $($(".selected")[i]).addClass("card");
                    $($(".selected")[i]).toggle();
                    $($(".selected")[i]).removeClass("selected");
                    $(this).remove();                    
                }
            }
        });
    });
});

