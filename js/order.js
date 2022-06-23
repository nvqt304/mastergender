function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML =
        "*The price: " + x + " VNĐ in an hour*";
}

function ourFunction() {
    var a = document.getElementById("mySelects").value;

    var b = document.getElementById("mySelectss").value;

    var t = b * a;

    var x = t / 100;

    document.getElementById("demos").innerHTML = "*The price: " + x + " VNĐ*";
}

function validate() {
    document.getElementById("2---n").innerHTML = "";
    var q = document.getElementById("2--n").value;
    if (q == "") {
        document.getElementById("2---n").innerHTML = "* Please fill out your name.";
    }
    if (q.length > 100) {
        document.getElementById("2---n").innerHTML =
            "* Your name should not exceed 100 characters.";
    }
    //
    document.getElementById("2---e").innerHTML = "";
    var w = document.getElementById("2--e").value;
    if (w == "") {
        document.getElementById("2---e").innerHTML =
            "* Please fill out your email.";
    }
    if (w.length > 100) {
        document.getElementById("2---e").innerHTML =
            "* Your email should not exceed 100 characters.";
    }
    var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(w)) {
        document.getElementById("2---e").innerHTML =
            "You must enter a valid email ";
    }
    //
    document.getElementById("2---p").innerHTML = "";
    var e = document.getElementById("2--p").value;
    if (e == "") {
        document.getElementById("2---p").innerHTML =
            "* Please fill out your phone number.";
    }
    if (e.length > 10) {
        document.getElementById("2---p").innerHTML =
            "* Your phone should not exceed 10 numbers.";
    }
    if (0 < e.length && e.length < 10) {
        document.getElementById("2---p").innerHTML =
            "* Your phone should not be less than 10 numbers.";
    }
    //
    document.getElementById("2---d").innerHTML = "";

    var y = document.getElementById("2--d").value;
    if (y == "") {
        document.getElementById("2---d").innerHTML = "* Please select 1 date.";
    }
    //
    var _y = y.split("-");
    var inpday = _y[2];
    var inpmonth = _y[1];
    var inpyear = _y[0];

    var _day = new Date();
    var newday = _day.getDate();
    var newmonth = _day.getMonth() + 1;
    var newyear = _day.getFullYear();

    if (inpday < newday && inpmonth < newmonth && inpyear < newyear) {
        document.getElementById("2---d").innerHTML =
            "* Please select a date from to day.";
    }
    //
    document.getElementById("2---a").innerHTML = "";

    var r = document.getElementById("2--a").value;
    if (r == "") {
        document.getElementById("2---a").innerHTML =
            "* Please fill out your address.";
    }
    if (r.length > 500) {
        document.getElementById("2---a").innerHTML =
            "* Your address should not exceed 500 characters.";
    }
    if (0 < r.length && r.length < 50) {
        document.getElementById("2---a").innerHTML =
            "* Your address should not be less than 50 characters.";
    }
    //
    document.getElementById("2---m").innerHTML = "";

    var t = document.getElementById("2--m").value;
    if (t == "") {
        document.getElementById("2---m").innerHTML =
            "* Please fill out your message.";
    }
    if (t.length > 500) {
        document.getElementById("2---m").innerHTML =
            "* Your message should not exceed 500 characters.";
    }
    if (0 < t.length && t.length < 50) {
        document.getElementById("2---m").innerHTML =
            "* Your message should not be less than 50 characters.";
    }
    //
    document.getElementById("2---s").innerHTML = "";

    var u = document.getElementById("mySelect").value;
    if (u == 0) {
        document.getElementById("2---s").innerHTML = "* Please select a car.";
    }
    //
    var getSelectedValue = document.querySelector('input[name="check"]:checked');

    if (getSelectedValue != null) {
        document.getElementById("2---h").innerHTML = "";
    } else {
        document.getElementById("2---h").innerHTML =
            "*You have not selected any season";
    }
    //
    var lm = document.getElementById("mySelect").value;
    if (
        q.length != 0 &&
        q.length < 101 &&
        w.length != 0 &&
        w.length < 101 &&
        e.length == 10 &&
        y != 0 &&
        r.length < 501 &&
        r.length > 49 &&
        t.length < 501 &&
        t.length > 49 &&
        u != 0 &&
        getSelectedValue != null &&
        filter.test(w)
    ) {
        var choice = confirm(
            "Continue to register! \n" + "The price: " + lm + " VNĐ"
        );
        if (choice == 1) {
            alert("Thank for your registration! ");
            document.getElementById("myForm").reset();
            document.getElementById("demo").innerHTML = "";
        }
    }
}

//

var day = new Date();
var date = day.getDate();
var month = day.getMonth() + 1;
var year = day.getFullYear();
if (month < 10) {
    month = "0" + month;
}
if (date < 10) {
    date = "0" + date;
}
var _date = year + "-" + month + "-" + date;
document.getElementById("2--d").min = year + "-" + month + "-" + date;

//

function validateform() {
    document.getElementById("3---n").innerHTML = "";
    var q = document.getElementById("3--n").value;
    if (q == "") {
        document.getElementById("3---n").innerHTML = "* Please fill out your name.";
    }
    if (q.length > 100) {
        document.getElementById("3---n").innerHTML =
            "* Your name should not exceed 100 characters.";
    }
    //
    document.getElementById("3---e").innerHTML = "";
    var w = document.getElementById("3--e").value;
    if (w == "") {
        document.getElementById("3---e").innerHTML =
            "* Please fill out your email.";
    }
    if (w.length > 100) {
        document.getElementById("3---e").innerHTML =
            "* Your email should not exceed 100 characters.";
    }
    var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(w)) {
        document.getElementById("3---e").innerHTML =
            "You must enter a valid email ";
    }
    //
    document.getElementById("3---p").innerHTML = "";
    var e = document.getElementById("3--p").value;
    if (e == "") {
        document.getElementById("3---p").innerHTML =
            "* Please fill out your phone number.";
    }
    if (e.length > 10) {
        document.getElementById("3---p").innerHTML =
            "* Your phone should not exceed 10 numbers.";
    }
    if (0 < e.length && e.length < 10) {
        document.getElementById("3---p").innerHTML =
            "* Your phone should not be less than 10 numbers.";
    }
    //
    document.getElementById("3---ss").innerHTML = "";
    var y = document.getElementById("mySelectss").value;
    if (y == 0) {
        document.getElementById("3---ss").innerHTML = "* Please select a provide.";
    }
    //
    document.getElementById("3---a").innerHTML = "";
    var r = document.getElementById("3--a").value;
    if (r == "") {
        document.getElementById("3---a").innerHTML =
            "* Please fill out your address.";
    }
    if (r.length > 500) {
        document.getElementById("3---a").innerHTML =
            "* Your address should not exceed 500 characters.";
    }
    if (0 < r.length && r.length < 50) {
        document.getElementById("3---a").innerHTML =
            "* Your address should not be less than 50 characters.";
    }
    //
    document.getElementById("3---m").innerHTML = "";
    var t = document.getElementById("3--m").value;
    if (t == "") {
        document.getElementById("3---m").innerHTML =
            "* Please fill out your message.";
    }
    if (t.length > 500) {
        document.getElementById("3---m").innerHTML =
            "* Your message should not exceed 500 characters.";
    }
    if (0 < t.length && t.length < 50) {
        document.getElementById("3---m").innerHTML =
            "* Your message should not be less than 50 characters.";
    }
    //
    document.getElementById("3---s").innerHTML = "";
    var u = document.getElementById("mySelects").value;
    if (u == 0) {
        document.getElementById("3---s").innerHTML = "* Please select a car.";
    }
    //
    var getSelectedValue = document.querySelector('input[name="checks"]:checked');

    if (getSelectedValue != null) {
        document.getElementById("3---h").innerHTML = "";
    } else {
        document.getElementById("3---h").innerHTML =
            "*You have not selected any season";
    }
    //
    var a = document.getElementById("mySelects").value;

    var b = document.getElementById("mySelectss").value;

    var j = b * a;

    var l = j / 100;
    if (
        q.length != 0 &&
        q.length < 101 &&
        w.length != 0 &&
        w.length < 101 &&
        e.length == 10 &&
        y != 0 &&
        r.length < 501 &&
        r.length > 49 &&
        t.length < 501 &&
        t.length > 49 &&
        u != 0 &&
        getSelectedValue != null &&
        filter.test(w)
    ) {
        var choice = confirm("Continue to order! \n" + "The price: " + l + " VNĐ");
        if (choice == 1) {
            alert("Thank for your ordering! ");
            document.getElementById("myForms").reset();
            document.getElementById("demos").innerHTML = "";
        }
    }
}