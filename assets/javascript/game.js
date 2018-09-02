$(document).ready(function () {
    var gems = {
        oneGem://
        {
            name: "one",
            value: 0
        },
        twoGem:
        {
            name: "two",
            value: 0
        },
        threeGem:
        {
            name: "three",
            value: 0
        },
        fourGem:
        {
            name: "four",
            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;

    var wins = 0;
    var losses = 0;

    
    function start() {
        counter = 0;
     
        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + targetNum);
       
        $("#targetnum").html(targetNum);

        gems.oneGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;//
        gems.twoGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.threeGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.fourGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#yournum").html(counter);

    };

    function adding(gems) {
        counter = counter + gems.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }
   
    function check() {
        if (counter > targetNum) {
            alert("SORRY, YOU LOST!");

            console.log("YOU LOST");
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            alert("CONGRATS, YOU WON!");
            console.log("YOU WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }

   
    start()

    $("#one").on("click", function () {
        adding(gems.oneGem);//
    });

    $("#two").on("click", function () {
        adding(gems.twoGem);
    });
    $("#three").on("click", function () {
        adding(gems.threeGem);
    });
    $("#four").on("click", function () {
        adding(gems.fourGem);
    });


});





