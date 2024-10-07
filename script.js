let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

function doRequest() {
    let options = {
        method: requestMethod.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 354b0325da3c929029dac2fd344e2cfaaa45ea5c20140995fd6b3ef6331e95a5",
        }
    };

    if (requestMethod.value === 'POST' || requestMethod.value === 'PUT') {
        options.body = requestBody.value;
    }

    fetch(requestUrl.value, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData);
        });
}

function validateUrlValue() {
    if (requestUrl.value === "") {
        requestUrlErrMsg.textContent = "Required*";
        return false;
    } else {
        requestUrlErrMsg.textContent = "";
        return true;
    }
}

requestUrl.addEventListener("change", validateUrlValue);

consoleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateUrlValue()) {
        doRequest();
    }
});