$(function () {
    getAllRestaurants();
    restaurantOperationsListeners();
});

function getAllRestaurants() {
    $.ajax({
        url: 'http://localhost:3000/api/restaurants',
        type: 'GET',
        success: function (rests) {
            recreateRestaurantsTable(rests);
        }
    });
}

function getRestaurantById(restaurantId) {
    $.ajax({
        url: `http://localhost:3000/api/restaurants/${restaurantId}`,
        type: 'GET',
        success: function (rest) {
            showRestaurant(rest);
        }
    });
}

function showRestaurant(rest) {
    $("#restaurant-result").empty();

    $("#restaurant-result").append(
        '<p>' +
        'Name: ' + rest.name + '<br>' +
        'Longitude: ' + rest.location[0].lng + '<br>' +
        'Latitude: ' + rest.location[0].lat + '<br>' +
        'Stars: ' + rest.stars + '<br>' +
        '<p>'
    );
}

function recreateRestaurantsTable(rests) {
    $("table").empty().remove();
    // $("#restaurant-result").empty().remove();
    rests.map(item => {
        // console.log(rests);
        // if(item)
        //     item.location[0].lng = 0;
        // console.log(item.location[0]);

        $("#restaurants-list").append(
            '<p>' +
            'Name: ' + item.name + '<br>' +
            'Longitude: ' + item.location[0].lng + '<br>' +
            'Latitude: ' + item.location[0].lat + '<br>' +
            'Stars: ' + item.stars + '<br>' +
            '<p>'
        );
    })

}

function restaurantOperationsListeners() {
    $("#get-button").click(() => {
        $("#get-delete-restaurant").css("display", "block");
        $("#get-delete-do").text("Get");
    });

    $("#delete-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");

        alert("Delete");
    });

    $("#add-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
        alert("Add");
    });

    $("#update-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
        alert("Update");
    });

    $("#get-delete-do").click(() => {
        if ($("#get-delete-do").text() === "Get") {
            const restaurantId = $("#rest-id").val();

            getRestaurantById(restaurantId);
        } else {
            // Delete
        }
    }
    );
}
