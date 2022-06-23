function Form() {
    document.getElementById('1---n').innerHTML = '';
    var q = document.getElementById('1--n').value;
    if (q == '') {
        document.getElementById('1---n').innerHTML = '* Please fill out your name.';
    }
    if (q.length > 100) {
        document.getElementById('1---n').innerHTML = '* Your name should not exceed 100 characters.';
    }
    //
    document.getElementById('1---e').innerHTML = '';
    var w = document.getElementById('1--e').value;
    if (w == '') {
        document.getElementById('1---e').innerHTML = '* Please fill out your email.';
    }
    if (w.length > 100) {
        document.getElementById('1---e').innerHTML = '* Your email should not exceed 100 characters.';
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(w)) {
        document.getElementById('1---e').innerHTML = 'You must enter a valid email ';
    }
    //
    document.getElementById('1---p').innerHTML = '';
    var e = document.getElementById('1--p').value;
    if (e == '') {
        document.getElementById('1---p').innerHTML = '* Please fill out your phone number.';
    }
    if (e.length > 10) {
        document.getElementById('1---p').innerHTML = '* Your phone should not exceed 10 numbers.';
    }
    if (0 < e.length && e.length < 10) {
        document.getElementById('1---p').innerHTML = '* Your phone should not be less than 10 numbers.';
    }
    //
    document.getElementById('1---m').innerHTML = '';
    var t = document.getElementById('1--m').value;
    if (t == '') {
        document.getElementById('1---m').innerHTML = '* Please fill out your message.';
    }
    if (t.length > 500) {
        document.getElementById('1---m').innerHTML = '* Your message should not exceed 500 characters.';
    }
    if (0 < t.length && t.length < 50) {
        document.getElementById('1---m').innerHTML = '* Your message should not be less than 50 characters.';
    }
    //
    if (q.length != 0 && q.length < 101 && w.length != 0 && w.length < 101 && e.length == 10 && t.length < 501 && t.length > 49 && filter.test(w)) {
        var choice = confirm('Continue to send your messages!');
        if (choice == 1) {
            alert('Thank for your messages! ');
            document.getElementById('myForm-1').reset();
        }
    }
}