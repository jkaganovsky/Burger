$(function() {
    $(".addBurger").on("click", (e) => {
        // const id = e.target.dataset.id;
        let id = $(this).data("id");
        // console.log("id:", id);
        // console.log("id: ", e.target.dataset.id);

        let newBurger = $(this).data("newburger");
        // const newBurger = e.target.dataset.newburger;
        console.log("New Burger: ", newBurger);

        let burgerEaten = {
            devoured: newBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        })
        .then(() => {
            console.log("Changed devour to", burgerEaten);
            location.reload();
        });
    });

    $("#create-form").on("submit", (e) => {

        e.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(() => {
            console.log("New burger added!", newBurger);
            location.reload();
            }
        );
    });

});