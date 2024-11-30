// Function to store data in localStorage
function storeData() {
    let input = document.getElementById('dataInput').value;
    
    if (input) {
        // Retrieve the current data from localStorage or initialize an empty array
        let storedData = JSON.parse(localStorage.getItem('data')) || [];

        // Add new data to the array
        storedData.push(input);

        // Save the updated array back to localStorage
        localStorage.setItem('data', JSON.stringify(storedData));

        // Update the display of stored data
        displayData();
    } else {
        alert("Please enter some data!");
    }

    // Clear the input field
    document.getElementById('dataInput').value = '';
}

// Function to display data from localStorage
function displayData() {
    let storedData = JSON.parse(localStorage.getItem('data')) || [];
    
    let displayDiv = document.getElementById('storedData');
    displayDiv.innerHTML = '';

    if (storedData.length > 0) {
        let list = document.createElement('ul');
        
        storedData.forEach((data, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = data;
            list.appendChild(listItem);
        });
        
        displayDiv.appendChild(list);
    } else {
        displayDiv.innerHTML = 'No data stored.';
    }
}

// Function to clear all data from localStorage
function clearData() {
    if (confirm("Are you sure you want to clear all stored data?")) {
        localStorage.removeItem('data');
        displayData();
    }
}

// Display the data when the page loads
window.onload = displayData;
