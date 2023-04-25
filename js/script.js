$(document).ready(function(){
    // 단뽑
    $(".one").click(function(){
        $(".modal").fadeIn(300);
    });

    $(".modal > .modal_all > button").click(function(){
        $(".modal").hide();
    });

    // 10연뽑
    $(".ten").click(function(){
        $(".modal2").fadeIn(300);
    });

    $(".modal2 > .modal_all2 > button").click(function(){
        $(".modal2").hide();
    });

    // const imagesArray = ["니케.png", "대원모집.png", "로비.png", "스쿼드.png", "인벤토리.png"];
    // const pbtArray = [10, 10, 10, 10, 60];
    // const randomButton = document.querySelector(".one");
    // const oneDrawImg = document.querySelector(".draw");

    // function changeImagesHandler(){
    //     const mainVisual = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    //     oneDrawImg.src = `images/footer_ui/${mainVisual}`;
    // };

    // randomButton.addEventListener('click', changeImagesHandler);


});