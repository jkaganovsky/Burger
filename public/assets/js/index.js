$(function() {
    $(".devoured-state").on("click", function(e) {
        let id = $(this).data("id");

        let newBurger = $(this).data("newburger");

        console.log("New Burger: ", newBurger);

        let burgerEaten = {
            devoured: newBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        })
        .then(function() {
            console.log("Changed devour to", burgerEaten);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(e) {

        e.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(function() {
            console.log("New burger added!", newBurger);
            location.reload();
        });
    });

});