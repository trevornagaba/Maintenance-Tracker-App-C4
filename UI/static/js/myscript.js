let token

var myObj = {
    createNode : function(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    },
    append : function(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one        
    }
};

function signUp() {
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    }

    function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
    }

    let myform = document.getElementById('signup-form');
    let username = myform.elements.username.value;
    let password = myform.elements.password.value;
    let reenter_password = myform.elements.reenter_password.value; 
    
    let data = {};
    data['username'] = username;
    data['password'] = password;
    data['reenter_password'] = reenter_password;

    let json_data = JSON.stringify(data);

    const ul = document.getElementById('test_div'); // Get the list where we will place our authors
    const url = 'http://127.0.0.1:5000/v1/auth/signup'; // Get 10 random users
    let fetchData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json_data
    }

    fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp) {
        console.log(resp);
        return resp.json();
        }) // Transform the data into json
    .then(function(data) {
        // Your code for handling the data you get from the API
        // Create and append the li's to the ul
        alert(data);
        console.log(data);
        let _requests = data.username; // Get the results
        return _requests.map(function(_request) {
            let li = createNode('li'),
                span = createNode('span');  
            span.innerHTML = `${_request.username}`;
            append(li, span);
        })
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
}

function loginIn() {
    let myform = document.getElementById('login-form');
    let username = myform.elements.username.value;
    let password = myform.elements.password.value;

    let data = {};
    data['username'] = username;
    data['password'] = password;
    
    let json_data = JSON.stringify(data);

    const url = 'http://127.0.0.1:5000/v1/auth/login'; // Get 10 random users
    let fetchData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json_data
    }

    fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp) {
        return resp.json();
        }) // Transform the data into json
    .then(function(data) {
        // Your code for handling the data you get from the API
        myObj.token = data.token
        console.log(data.token)
        window.location.replace("./home.html");
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        alert("Invslid credentials. Please re enter your details")
        console.log(error)
    });
}

function myRequests() {
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    }

    function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
    }

    const table = document.getElementById('requests-table'); // Get the list where we will place our authors
    const url = 'http://127.0.0.1:5000/v1/users/requests'; // Get 10 random users
    let fetchData = {
        method: 'GET',
        headers: { 'x-access-token': myObj.token
        } 
    }

    fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp) {
        console.log(token);
        return resp.json(); 
        }
    ) // Transform the data into json
    .then(function(data) {
        // Your code for handling the data you get from the API
        // Create and append the li's to the ul
        console.log(data);
        let _requests = data.requests; // Get the results
        return _requests.map(function(_request) {
            
            let tr = createNode('tr'),
                td = createNode('td'),
                td_2 = createNode('td'),
                tr_2 = createNode('tr'),
                td_3 = createNode('td'),
                span_1 = createNode('span'),
                span_2 = createNode('span'),
                span_3 = createNode('span');
            span_1.innerHTML = `${_request.device_type}`;
            span_2.innerHTML = `${_request.device_status}`;
            span_3.innerHTML = `<small>${_request.fault_description}</small>`;
            append(tr, td);
            append(td, span_1);
            append(tr, td_2);
            append(td_2, span_2);
            append(tr_2, td_3);
            append(td_3, span_3);
            append(table, tr);
            append(table, tr_2);
        })
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
}

function adminViewRequests() {
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    }

    function createNodeWithId(element, ID=None) {
        myelement = document.createElement(element); // Create the type of element you pass in the parameters
        myelement.setAttribute('id', ID)
        return myelement
    }
    function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
    }

    const table = document.getElementById('requests-table'); // Get the list where we will place our authors
    const url = 'http://127.0.0.1:5000/v1/requests'; // Get 10 random users
    let fetchData = {
        method: 'GET',
        headers: { 'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg1MTI2NWIwLTZhMzAtMTFlOC1iN2EyLWNhY2EzNWQ5YWE2ZCIsImV4cCI6MTUzMDM0ODE0OX0.JMd8DXa7zTH4Eo584-v7mH3rA9blAbdzXyUJ1qa1NVc"
        } 
    }

    fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp) {
        console.log(resp);
        return resp.json(); 
        }
    ) // Transform the data into json
    .then(function(data) {
        // Your code for handling the data you get from the API
        // Create and append the li's to the ul
        console.log(data);
        let _requests = data.requests; // Get the results
        return _requests.map(function(_request) {
            let tr = createNode('tr'),
                td_type = createNodeWithId('td', 'details'),
                td_status = createNodeWithId('td', 'status'),
                td_id = createNodeWithId('td', 'ID'),
                tr_2 = createNode('tr'),
                td_desc = createNode('td'),
                td_empty = createNode('td'),
                span_type = createNode('span'),
                span_status = createNode('span'),
                span_id = createNode('span');
                span_desc = createNode('span');
            span_type.innerHTML = `${_request.device_type}`;
            span_status.innerHTML = `<small><a href='./editstatus.html'>${_request.device_status}</a></small>`;
            span_id.innerHTML = `<small>${_request.id}</small>`;
            span_desc.innerHTML = `<small>${_request.fault_description}</small>`;
            append(tr, td_id)
            append(td_id, span_id)
            append(tr, td_type);
            append(td_type, span_type);
            append(tr, td_status);
            append(td_status, span_status);
            append(tr_2, td_empty);
            append(tr_2, td_desc);
            append(td_desc, span_desc);
            append(table, tr);
            append(table, tr_2);
        })
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
}