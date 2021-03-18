//Price Range Options

$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 1000000,
        hide_min_max: true,
        from: 150000,
        to: 850000,
        grid: false,
        skin: "big",
        step: 50000,
        force_edges: true,
        prefix: "$",
        max_postfix: " +",
        prettify: function (num) {
            var n = num.toString();
            n = n.replace(".", ",");
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1\,");
        }
    });
});




// Add active class to the current button (highlight it)

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
