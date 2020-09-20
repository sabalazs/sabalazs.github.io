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
var numOfSelectedGames = 0;
$(document).ready(function () {

    $(".selectbtn").click(function () {

        if (numOfSelectedGames < 51) {

            let card = $(this).parent();
            let game = $(this).find(".text-center .card-title").text();

            $("#unwanted-games").append("<li class='list-group-item'>" + game + "</li>");

            //remove card from the list
            card.addClass("selected");
            card.removeClass("card");
            card.toggle();
            numOfSelectedGames++;

            //add unselect function
            $("#unwanted-games :last-child").click(function () {
                for (let i = 0; i < $(".selected").length; i++) {
                    if ($($(".selected")[i]).find(".card-title").text() == $(this).text()) {
                        $($(".selected")[i]).addClass("card");
                        $($(".selected")[i]).toggle();
                        $($(".selected")[i]).removeClass("selected");
                        $(this).remove();
                        numOfSelectedGames--;
                    }
                }
            });
        } else {
            alert("Maximum 50 játékot választhatsz ki.");
        }
    });
});

//navigation
$(document).ready(function () {
    $('form fieldset:first-child').fadeIn('slow');

    $(".btn-next").on("click", function () {
        let parentFieldset = $(this).parents('fieldset');
        parentFieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
        })
    });

    $(".btn-back").on("click", function () {
        let parentFieldset = $(this).parents('fieldset');
        parentFieldset.fadeOut(400, function () {
            $(this).prev().fadeIn();
        })
    });
});

