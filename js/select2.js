$(document).ready(function(){
    //Standard Dropdown
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: Infinity //Use this to remove search box
    });
    //Standard Dropdown with Search
    $('.js-example-basic-single-search').select2({});
    //Multi-select Dropdown
    $('.js-example-basic-multiple').select2({});
});

document.getElementById("formEmail").value = "wayfinder@gmail.com";
document.getElementById("formEmailError").value = "johnno@gmai.co";