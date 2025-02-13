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

async function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect form data
    const email = document.getElementById("email").value;
    const alternativeContact = document.getElementById("alternative-contact").value;
    const hashrate = document.getElementById("hashrate").value;
    const companyName = document.getElementById("company-name").value;
    const questionsThoughts = document.getElementById("questions-thoughts").value;
    const buildOwnBlock = document.querySelector('input[name="build_blocks"]:checked').value;

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

    console.log(data);

    try {
        const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
                "Authorization": "Bearer pat-na1-6a39e094-b8e7-419d-b0a1-2b2a53c70b8c",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // window.location.href = "https://dmnd.work/success.html";
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
}
