// $(document).ready(function() {
//     $(function () {
//     var flame = $("#flame");
//     var txt = $("h1");

//     flame.on({
//         click: function () {
//         flame.removeClass("burn").addClass("puff");
//         $(".smoke").each(function () {
//             $(this).addClass("puff-bubble");
//         });
//         $("#glow").remove();
//         txt.hide().html("i wish you happy birthday").delay(750).fadeIn(300);
//         $("#candle").animate(
//             {
//             opacity: ".5"
//             },
//             100
//         );
//         }
//     });
// });});

$(document).ready(function () {
    var flame = $("#flame");
    var txt = $("h1");

    setTimeout(function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Happy Birthday Mr/Ahmed").delay(1000).fadeIn(300);
        $("#candle").animate(
            {
                opacity: ".5"
            },
            100
        );
    }, 5000); // Timer set for 5 seconds (5000 ms)
});
