//filter
$(document).ready(function () {
    $(".search-box").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(this).siblings(".card-container").find(".card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//select a game
$(document).ready(function () {
    var numOfSelectedGames = 0;
    $(".selectbtn").click(function () {
        let containerId = $(this).parents(".list-container").attr("id");
        if (numOfSelectedGames < 51) {

            let card = $(this).parent();
            let game = $(this).find(".text-center .card-title").text();
            $(`#${containerId} .game-list`).append("<li class='list-group-item'>" + game + "</li>");

            //remove card from the list
            card.addClass("selected");
            card.removeClass("card");
            card.toggle();
            numOfSelectedGames++;

            //add unselect function
            $(`#${containerId} .game-list :last-child`).click(function () {
                for (let i = 0; i < $(`#${containerId} .selected`).length; i++) {
                    if ($($(`#${containerId} .selected`)[i]).find(".card-title").text() == $(this).text()) {
                        $($(`#${containerId} .selected`)[i]).addClass("card");
                        $($(`#${containerId} .selected`)[i]).toggle();
                        $($(`#${containerId} .selected`)[i]).removeClass("selected");
                        $(this).remove();
                        numOfSelectedGames--;
                    }
                }
            });
        } else {
            alert("Maximum 50 játékot választhatsz ki.");
        };
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


//Foxpost plugin
function receiveMessage(event) {
    // if (event.origin !== 'https://cdn.foxpost.hu') {return};
    var apt = JSON.parse(event.data);

    $('textarea').val(apt.name, apt.findme);
}

window.addEventListener('message', receiveMessage, false);

