var modal = document.getElementById("myModal");
var buttons = document.getElementsByClassName("btn-click");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        modal.style.display = "flex";
    };
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("submit-btn")[0].addEventListener("click", handleSubmit);
});

async function handleSubmit() {
    // Collect form data
    const email = document.getElementById("email").value;
    const alternativeContact = document.getElementById("alternative-contact").value;
    const hashrate = document.getElementById("hashrate").value;
    const companyName = document.getElementById("company-name").value;
    const questionsThoughts = document.getElementById("questions-thoughts").value;
    const buildOwnBlock = document.querySelector('input[name="build_blocks"]:checked')?.value || "";

    // Construct the data to send
    const data = {
        properties: {
            name: companyName,
            company: companyName,
            email: email,
            alternative_contact: alternativeContact,
            hashrate: hashrate,
            build_own_block: buildOwnBlock,
            questions___thoughts: questionsThoughts,
        }
    };

    console.log("Sending data:", data);

    try {
        const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
                "Authorization": "Bearer pat-na1-6a39e094-b8e7-419d-b0a1-2b2a53c70b8c",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json(); // ✅ Properly await the response

        if (response.ok) {
            console.log("Success:", responseData);
            // window.location.href = "https://dmnd.work/success.html";
        } else {
            console.error("Error response:", responseData);
            alert(`Error: ${responseData.message}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred: " + error.message);
    }
}