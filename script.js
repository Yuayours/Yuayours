document.addEventListener("DOMContentLoaded", () => {
    const invitationSection = document.getElementById("invitation");
    const dateSection = document.getElementById("date-selection");
    const foodSection = document.getElementById("food-selection");
    const locationSection = document.getElementById("location-selection");
    const thankYouSection = document.getElementById("thank-you");
    const sadCatSection = document.getElementById("sad-cat");

    const acceptBtn = document.getElementById("accept-btn");
    const rejectBtn = document.getElementById("reject-btn");
    const setDateBtn = document.getElementById("set-date-btn");
    const nextFoodBtn = document.getElementById("next-btn");
    const finalBtn = document.getElementById("final-btn");

    const chosenDateInput = document.getElementById("chosen-date");

    // Variables to store girlfriend's responses
    let chosenDate = "";
    let selectedFoods = [];
    let selectedLocation = "";

    // Handle acceptance of invitation
    acceptBtn.addEventListener("click", () => {
        invitationSection.classList.add("hidden");
        dateSection.classList.remove("hidden");
    });

    // Handle rejection of invitation
    rejectBtn.addEventListener("click", () => {
        invitationSection.classList.add("hidden");
        sadCatSection.classList.remove("hidden");
    });

    // Set date
    setDateBtn.addEventListener("click", () => {
        if (chosenDateInput.value) {
            chosenDate = chosenDateInput.value; // Store the chosen date
            dateSection.classList.add("hidden");
            foodSection.classList.remove("hidden");
        } else {
            alert("tolong diisi tanggalnya sayang");
        }
    });

    // Move to location selection
    nextFoodBtn.addEventListener("click", () => {
        selectedFoods = Array.from(document.querySelectorAll("input[name='food']:checked")).map(
            (checkbox) => checkbox.value
        );

        if (selectedFoods.length === 0) {
            alert("Hlo? gak mau makan date gitu kah kamu sayang?");
        } else {
            foodSection.classList.add("hidden");
            locationSection.classList.remove("hidden");
        }
    });

    // Confirm the date
    finalBtn.addEventListener("click", () => {
        const selectedLocationInput = document.querySelector("input[name='location']:checked");

        if (selectedLocationInput) {
            selectedLocation = selectedLocationInput.value; // Store the chosen location
            locationSection.classList.add("hidden");
            thankYouSection.classList.remove("hidden");

            // Display the responses
            const summary = `
                <p><strong>Date:</strong> ${chosenDate}</p>
                <p><strong>Foods:</strong> ${selectedFoods.join(", ")}</p>
                <p><strong>Location:</strong> ${selectedLocation}</p>
            `;
            thankYouSection.innerHTML += summary;
        } else {
            alert("Dipilih sayangku, jangan di kegelapan yaa!");
        }
    });
});


