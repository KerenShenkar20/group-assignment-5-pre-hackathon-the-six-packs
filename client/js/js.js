$(function () {
    getAllUsers();
    restaurantOperationsListeners();
});

function getAllUsers() {
    $.ajax({
        url: 'http://localhost:3000/users',
        type: 'GET',
        success: function (rests) {
            recreateUsersTable(rests);
            //console.log(rests);
        }
    });
}

/////////////////////////////////////////////////////////////////////////////////////

function getRestaurantById(userId) {
    $.ajax({
        url: `http://localhost:3000/users/${userId}`,
        type: 'GET',
        success: function (rest) {
            showRestaurant(rest);
        }
    });
}

/////////////////////////////////////////////////////////////////////////////////////

function showRestaurant(user) {
    $("#restaurant-result").empty();

    $("#restaurant-result").append(
        '<p>' +
        'id" ' + user.id + '<br>' +
        'Name: ' + user.first_name + ";" + user.last_name + '<br>' +
        'email: ' + user.email + '<br>' +
        'gender: ' + user.gender + '<br>' +
        'avatar: ' + user.avatar + '<br>' +
        'color: ' + user.color + '<br>' +
        'job: ' + user.job + '<br>' +
        '<p>'
    );
}

/////////////////////////////////////////////////////////////////////////////////////

function recreateUsersTable(rests) {
    $("table").empty().remove();

    console.log(rests);
    rests.map(user => {

        $("#restaurants-list").append(
            '<p>' +
            'id" ' + user.id + '<br>' +
            'Name: ' + user.first_name + ";" + user.last_name + '<br>' +
            'email: ' + user.email + '<br>' +
            'gender: ' + user.gender + '<br>' +
            'avatar: ' + user.avatar + '<br>' +
            'color: ' + user.color + '<br>' +
            'job: ' + user.job + '<br>' +
            '<p>'
        );
    })

}

/////////////////////////////////////////////////////////////////////////////////////

function deleteRestaurantById(userId) {
    $.ajax({
        url: `http://localhost:3000/users/${userId}`,
        type: 'DELETE',
        success: function (rest) {
            console.log(`User - ${userId} Deleted!!!`)
        }
    });
}
/////////////////////////////////////////////////////////////////////////////////////

function updateUserById(userId, obj) {
    $.ajax({
        url: `http://localhost:3000/users/${userId}`,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(obj),
        success: function () {
            console.log(`User - ${userId} Updated!!!`, obj)
            getAllUsers();
        }
    });
}

function updatedUser(UserId) {
    user = new Object();
    if ($("#first_name").val())
        user.first_name = $("#first_name").val();
    if ($("#last_name").val())
        user.last_name = $("#last_name").val();
    if ($("#email").val())
        user.email = $("#email").val();
    if ($("#gender").val())
        user.gender = $("#gender").val();
    if ($("#avatar").val())
        user.avatar = $("#avatar").val();
    if ($("#color").val())
        user.color = $("#color").val();
    if ($("#job").val())
        user.job = $("#job").val();

    console.log(user);
    updateUserById(UserId, user);
}

function updateForm() {
    $("#get-delete-restaurant").hide();
    $("#test").append(
       ` <label for="first_name">First name:</label><br>
        <input type="text" id="first_name" name="first_name"><br>
        <label for="last_name">Last name:</label><br>
        <input type="text" id="last_name" name="last_name">
        <button id="submit" type="submit">Send!</button>`
    
    );
}

function resetView() {
    $("#test").empty();
}

/////////////////////////////////////////////////////////////////////////////////////

function restaurantOperationsListeners() {
    $("#get-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Get");
    });

    $("#delete-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Delete");
    });

    $("#add-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
    });

    $("#update-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Update");
    });

    $("#get-delete-do").click(() => {
        if ($("#get-delete-do").text() === "Get") {
            const UserId = $("#rest-id").val();
            getRestaurantById(UserId);
        } else if ($("#get-delete-do").text() === "Delete") {
            const UserId = $("#rest-id").val();
            deleteRestaurantById(UserId);
        } else if ($("#get-delete-do").text() === "Update") {
            const UserId = $("#rest-id").val();
            updateForm();
            $("#submit").click(() => {
                updatedUser(UserId)
                resetView();
            });
        }
    });
}