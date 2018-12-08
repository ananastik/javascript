$(()=> {

    //DOM elements

    // let element = $(".paragraf");
    // element = $("#naglowek").css("color", "red");
    // element = $("p");

    // element = $("p").css({color:"green", backgroundColor:"yellow"});

    // $("input[type='text']").val("Jakis tekst");

    // $("#naglowek").addClass("blue");
    // $("#naglowek").removeClass("blue");

    // console.log(element);

//         console.log($(".paragraf"));
// // DOM manipulation

//     $(".paragraf").each((index,element) => {
//         if (index !==0) {
//             $(element).css({backgroundColor: "green", fontSize: "3em"});
//         }
//     })
//     console.log($("#paragraf-container").find(".paragraf"));


//jQuery events

// $("#naglowek").mouseenter(()=>{
//     $(".toggle").toggle(()=>{
//         // console.log($(this));
//         $(".toggle").css({color:"red"});
//     })
// })
// $("#naglowek").on({ //laczymy kilka eventow
// "mouseover": () => {
//     $(".toggle").css("background-color", "yellow");
// },
// "dblclick": () => {
//     console.log("click")
// }
// })


//Animations

// $("#naglowek").hide(3000).show(3000);
    // $("#naglowek").fadeOut(3000).fadeIn(3000);
    // $("#naglowek").slideUp(3000).slideDown(3000);


    callbackZwrotny = () => {
        console.log("Zakonczono pierwsza animacje. Uwaga! Startuje druga animacja!");

        $("#naglowek").animate({
            fontSize: "2em",
            marginLeft: "0"
        }, 5000)
    }

    $("#naglowek").animate({fontSize: "4em", marginLeft: "100px"}, 
    5000, callbackZwrotny);
});