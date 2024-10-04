
// https://jsonplaceholder.typicode.com/users.  -use this link 

// Create an Async Function:
// Create a function named fetchUsers.
// Use fetch() to get a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users).
// Use await to wait for the response and convert it to JSON.

// Log the Data as Objects:
// After fetching the data, iterate through the list of users.
// For each user object, log the user's name and email to the console.

async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data)
    // After fetching the data, iterate through the list of users.
// For each user object, log the user's name and email to the console.
    for(let i = 0; i < data.length; i++){
        console.log(data[i].name)
        console.log(data[i].username)
         console.log(data[i].email)
     }

}

fetchUsers()
