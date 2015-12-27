$('#login').on('click', function (e) {
    e.preventDefault();
    $('#loginForm').submit();
});
$('#signUp').on('click', function (e) {
    e.preventDefault();
    $('#signUpForm').submit();
});
$('#changeAccountSettings').on('click', function (e) {
    e.preventDefault();
    $('#accountSettings').submit();
});