function enableTrackingId() {
    var trackingType = document.getElementById('trackingType').value;
    var trackingIdInput = document.getElementById('trackingId');
    var getCredentialsBtn = document.getElementById('getCredentialsBtn');

    // Set default values based on the selected tracking type
    trackingIdInput.value = trackingType === 'tutorPoint' ? '' : '';

    // Enable the trackingId input when a tracking type is selected
    trackingIdInput.disabled = trackingType === "";

    // Enable the Get Credentials button only when both tracking type and tracking ID are selected
    getCredentialsBtn.disabled = trackingType === "" || trackingIdInput.value.length > 50;
    getCredentialsBtn.style.backgroundColor = trackingIdInput.value.length > 50 ? 'grey' : '#ff7f00'; // Change button color based on input length
}

// Disable the Copy Credentials button initially
copyCredentialsBtn.disabled = true;

function trackPackage() {
    var trackingType = document.getElementById('trackingType').value;
    var trackingId = document.getElementById('trackingId').value;

    if (trackingType === "") {
        alert('Please select a tracking type.');
        return;
    }

    // Search for the trackingId based on the trackingType
    var packageData = getPackageData(trackingId, trackingType);

    if (packageData) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Name: ' + packageData.name + '<br>Gender: ' + packageData.gender + '<br>Credential: ' + packageData.credential + '<br>Age: ' + packageData.age + '<br>GSM: ' + packageData.gsm;;

        // Clear the profile pin input field
        document.getElementById('trackingId').value = "";

        // Enable the Copy Credentials button
        var copyCredentialsBtn = document.getElementById('copyCredentialsBtn');
        copyCredentialsBtn.disabled = false;
        copyCredentialsBtn.dataset.credentials = packageData.credential; // Store credentials in the dataset attribute

    } else {
        alert('Student not found. Please check that the email provided is the same as the email you used to register for a portal. Emails are case sensitive');
    }
}






// Function to limit profile pin input to 50 characters
function limitProfilePin(input) {
    if (input.value.length > 50) {
        input.value = input.value.slice(0, 50);
    }

    // Enable or disable the Get Credentials button based on input length
    var getCredentialsBtn = document.getElementById('getCredentialsBtn');
    getCredentialsBtn.disabled = input.value.length > 50;
    getCredentialsBtn.style.backgroundColor = input.value.length > 50 ? 'grey' : '#ff7f00'; // Change button color based on input length
}

function openDrawer() {
    document.getElementById("drawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}

// Toggle drawer on menu icon click
document.getElementById("menuIcon").addEventListener("click", function () {
    if (document.getElementById("drawer").style.width === "0px") {
        openDrawer();
    } else {
        closeDrawer();
    }
});

// Function to copy credentials to clipboard
function copyCredentials() {
    var copyCredentialsBtn = document.getElementById('copyCredentialsBtn');
    var credentials = copyCredentialsBtn.dataset.credentials; // Retrieve credentials from dataset attribute
    
    navigator.clipboard.writeText(credentials); // Copy credentials to clipboard
    alert('Credentials for copied to clipboard: ' + credentials );
}

function toggleFAQ(faqId) {
            var faq = document.getElementById(faqId);
            var answer = faq.querySelector('.faq-answer');
            var isExpanded = answer.classList.contains('show');

            // Close all other FAQs
            var allFAQs = document.querySelectorAll('.faq');
            allFAQs.forEach(function(faq) {
                var otherAnswer = faq.querySelector('.faq-answer');
                otherAnswer.classList.remove('show');
            });

            // Toggle the clicked FAQ
            if (isExpanded) {
                answer.classList.remove('show');
            } else {
                answer.classList.add('show');
            }
        }