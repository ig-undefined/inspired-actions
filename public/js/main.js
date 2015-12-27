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
$('#addNewSkill').on('click', function (e) {
    var newSkill = $('#newSkillName').val();

    if (!newSkill)
        return false;

    $.ajax({
        method: 'POST',
        url: '/add-new-skill',
        data: {
            skill: newSkill
        },
        success: function (res) {
            var $skill = $('<div></div>').addClass('item')
                , $button = $('<div></div>').addClass('right floated content').append($('<div></div>').addClass('ui button').text('Remove'))
                , $content = $('<div></div>').addClass('content')
                , $inner = $('<div></div>').addClass('header').text(res.name);
            $content.append($inner);
            $content.append(res.level);
            $skill.append($button);
            $skill.append($content);
            $('#skillsList').append($skill);
        }
    });
});
$('.remove-skill').on('click',function (e) {
    var skillLevelID = $(this).parent().siblings().first().text()
        , skillName = $(this).parent().siblings().eq(1).children().text()
        , $self = $(this);
    $.ajax({
        method: 'POST',
        url: '/remove-skill',
        data: {
            skill: skillName,
            skillLevel: skillLevelID
        },
        success: function () {
            $self.parent().parent().remove();
        }
    });
});