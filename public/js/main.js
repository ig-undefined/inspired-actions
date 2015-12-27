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
$('#changeTargetPosition').on('click', function (e) {
    e.preventDefault();
    $('#targetPositionForm').submit();
});
$('#targetCategories').on('change', function (e) {
    $.ajax({
        method: "GET",
        url: "/get-positions/" + $(this).val(),
        success: function (positions) {
            var $select = $('#targetPositions');
            $select.empty();
            for (var i = 0; i < positions.length; i++) {
                var option = $('<option></option>').attr('value', positions[i].id).text(positions[i].title);
                $select.append(option);
            }
        }
    });
});