const getInfo = e => {
  let formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    adress: document.getElementById('adress').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  }
  localStorage.setItem('formData', JSON.stringify(formData));
  displayData();
  e.preventDefault();
}

function changeVisibility(){
  var x = document.getElementById("container");
  var y = document.getElementById("displayData");
  x.style.display = "none";
  y.style.display = "block";
}

function displayData(){
  if(localStorage.getItem('formData')){
    let {fname, lname, adress, email, phone} = JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById('output');
    output.innerHTML = `
      <table>
        <body>
          <tr>
            <td>Förnamn:</td>
            <td>${fname}</td>
          </tr>
          <tr>
            <td>Efternamn:</td>
            <td>${lname}</td>
          </tr>
          <tr>
            <td>Adress:</td>
            <td>${adress}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Telefonnummer:</td>
            <td>${phone}</td>
          </tr>
        </body>
      </table>
    `
  }
}
