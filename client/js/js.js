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

function restaurantOperationsListeners() {

    $("#update-button").click(() => {
        $("#get-delete-restaurant").css("display", "none");
        alert("Update");
    });
}
