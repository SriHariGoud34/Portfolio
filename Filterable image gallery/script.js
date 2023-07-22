const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    
    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    })
};

// event listener for each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));