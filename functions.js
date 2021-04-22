//Price Range Plugin options
var custom_values = [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1500000, 2000000];

// be careful! FROM and TO should be index of values array
var my_from = custom_values.indexOf(150000);
var my_to = custom_values.indexOf(850000);

$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        hide_min_max: true,
        from: my_from,
        to: my_to,
        values: custom_values,
        grid: false,
        skin: "big",
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




// Type of home active toggle

var header = document.getElementById("typeDIV");
var btns = header.getElementsByClassName("type-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("type-active");
        current[0].className = current[0].className.replace(" type-active", "");
        this.className += " type-active";
    });
}

// Beds and baths active toggle

var header = document.getElementById("bedDiv");
var btns = header.getElementsByClassName("bed-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("bed-active");
        current[0].className = current[0].className.replace(" bed-active", "");
        this.className += " bed-active";
    });
}

var header = document.getElementById("bathDiv");
var btns = header.getElementsByClassName("bath-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("bath-active");
        current[0].className = current[0].className.replace(" bath-active", "");
        this.className += " bath-active";
    });
}

// Credit rating active toggle

var header = document.getElementById("creditDiv");
var btns = header.getElementsByClassName("credit-button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("credit-active");
        current[0].className = current[0].className.replace(" credit-active", "");
        this.className += " credit-active";
    });
}

// Interested in Buying buttons active toggle

var header = document.getElementById("buyingDiv");
var btns = header.getElementsByClassName("buying-button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("buying-active");
        current[0].className = current[0].className.replace(" buying-active", "");
        this.className += " buying-active";
    });
}

// Interested in Buying buttons active toggle

var header = document.getElementById("searchDiv");
var btns = header.getElementsByClassName("search-button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("search-active");
        current[0].className = current[0].className.replace(" search-active", "");
        this.className += " search-active";
    });
}
