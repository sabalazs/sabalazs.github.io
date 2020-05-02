let i=0;

$("#add").click(() => {
    i++;
    $(`<input class="player" type="text" name="player-name" value="Name"><br>`).appendTo('#player-names');
});