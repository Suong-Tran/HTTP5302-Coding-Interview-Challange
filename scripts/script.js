// api url
const api_url = 
      "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    console.log(data[1]['employeefname']);
    console.log(Object.keys(data).length);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let i = 1; i <= Object.keys(data).length;i++) {
        tab += `<tr> 
        <td>${data[i]['employeeid']} </td>
        <td>${data[i]['employeefname']} ${data[i]['employeelname']}</td>
        <td><button>View</button></td>          
        </tr>`; 

    }

    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}