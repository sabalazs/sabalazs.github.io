let imagesData = [{
    photo: "./images/canvas.jpg",
    title: "Canvas",
    description: "In Canvas, you play as a painter competing in an art competition."
}, {
    photo: "./images/everdell.png",
    title: "Everdell",
    description: "Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding."
}, {
    photo: "./images/teotihuacan.jpg",
    title: "Teotihuacan: City of Gods",
    description: "Travel back in time to the greatest city in Mesoamerica."
}, {
    photo: "./images/wingspan.jpg",
    title: "Wingspan",
    description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games."
},  {
    photo: "./images/spirit_island.png",
    title: "Spirit Island",
    description: "Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders"
}];


//creating thumbnails
imagesData.forEach((element, index) => {
    $('#thumbnail_container').append(`
        <div class="thumbnail" data-index=${index}>
            <img src=${element.photo} alt=${element.title} data-index=${index}>
            <div class="thumbnail_title_cont"><div class="thumbnail_title">${element.title}</div></div>
        </div>
    `);
});


//function to show slected image
const loadPhoto = (photoNumber) => {
    $('#photo').attr("src", imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
     
    //highlighting selected thumbnail
    $('.thumbnail img').css('border', 'none');
    $(`.thumbnail[data-index=${photoNumber}] img`).css('border', '3px solid gray');
}

//make the info div the same width as the current image
document.getElementById("photo").onload = () => {
    $(".info").width($("#photo").width()+"px");
    $(".info").css("display","block");
}


//initial view
let currentPhoto = 0;
loadPhoto(currentPhoto);


// navigation events
$('#left').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }    
    loadPhoto(currentPhoto);
});

$('#right').click(() => {
    if (currentPhoto < 4) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }    
    loadPhoto(currentPhoto);
});

$('.thumbnail').click(() => {
    loadPhoto($(event.target).attr('data-index'));
});
