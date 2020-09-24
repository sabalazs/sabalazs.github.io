$(document).ready(function () {
    //filter
    $(".search-box").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(this).siblings(".card-container").find(".card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //select a game
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


    //navigation
    $('form fieldset:first-child').fadeIn('slow');

    $(".btn-next").on("click", function () {
        let parentFieldset = $(this).parents('fieldset');
        parentFieldset.fadeOut(400, function () {
            $(this).next().fadeIn();
            window.scrollTo(0, 0);
        });
    });

    $(".btn-back").on("click", function () {
        let parentFieldset = $(this).parents('fieldset');
        parentFieldset.fadeOut(400, function () {
            $(this).prev().fadeIn();
            window.scrollTo(0, 0);
        });
    });

    //custom Select2 select menus 
    $('.select2').select2({
        width: 'resolve', // need to override the changed default
        minimumResultsForSearch: -1 //to hide the searchbox
    });

    //delivery page
    $("#courier").change(function () {
        if ($(this).val() == "Foxpost") {
            $('#foxpost-div').show();
            $('#foxpost-div').attr('required', '');
            $('#foxpost-div').attr('data-error', 'This field is required.');
            $('.foxpost-hide').hide();
        } else {
            $('#foxpost-div').hide();
            $('#foxpost-div').removeAttr('required');
            $('#foxpost-div').removeAttr('data-error');
            $('.foxpost-hide').show();
        }
    });
    $("#courier").trigger("change");
    $("#productid").change(function () {
        if ($(this).val() == 4) {
            $('#courier').val('Foxpost');
            $('#courier').trigger('change');
            $("#courier").prop("disabled", true);            
        } else {
            $("#courier").prop("disabled", false);       
            
        }
    });

    //Foxpost plugin
    function receiveMessage(event) {
        // if (event.origin !== 'https://cdn.foxpost.hu') {return};
        var apt = JSON.parse(event.data);
        $('#foxpost').val(apt.name, apt.findme);
        if ($("#foxpost").val()!="") {
            var element = document.getElementById("foxpost");
            element.scrollIntoView();
        }
    }
    window.addEventListener('message', receiveMessage, false);


});