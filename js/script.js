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

    // 인벤토리
    $(".inven").click(function(){
            $(".modal3").fadeIn(300);
    });
    
    $(".modal3 > .modal_all3 > button").click(function(){
        $(".modal3").hide();
    });

    // 필그림몰드
    $("#pilgrimBtn").click(function(){
        $(".modal_pilgrim").fadeIn(300);
    });

    $(".modal_pilgrim > .modal_all_pilgrim > button").click(function(){
        $(".modal_pilgrim").hide();
    });


                                // 필그림
                                pilgrimBtn.addEventListener("click", function() {
                                    var resultThree = selectItemWithProbability();
                                    var drawElementThree = document.querySelector(".draw_pilgrim");
                                    drawElementThree.src = "images/nikke/" + resultThree + ".jpg";
                                });
                    
                                function selectItemWithProbability() {
                                    var itemsThree = ["iDoll썬", "iDoll오션", "iDoll플라워", "솔져O.W.", "솔져F.A.", "솔져E.G.", "프로덕트23", "프로덕트12", "프로덕트08", "미카", "벨로타", "아니스", "델타", "네온", "라피", "에테르", "미하라", "N102", "모더니아", "라푼젤", "이사벨", "홍련", "노아", "스노우화이트", "하란"];
                                    var probabilitiesThree = [0.022216, 0.022216, 0.022216, 0.022216, 0.022216, 0.022216, 0.022216, 0.022216, 0.022216, 0.033323, 0.033323, 0.033323, 0.033323, 0.033323, 0.033323, 0.033323, 0.033323, 0.033323, 0.07145, 0.07145, 0.07145, 0.07145, 0.07145, 0.07145, 0.07145];
                    
                                    for (var i = 1; i < probabilitiesThree.length; i++) {
                                        probabilitiesThree[i] += probabilitiesThree[i - 1];
                                    }
                                    var randomValueThree = Math.random();
                    
                                    for (var i = 0; i < probabilitiesThree.length; i++) {
                                        if (randomValueThree < probabilitiesThree[i]) {
                                        return itemsThree[i];
                                        }
                                    }
                                        return itemsThree[itemsThree.length - 1];
                                }


});