const getInfo = e => {
  let formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    adress: document.getElementById('adress').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  }
  sessionStorage.setItem('formData', JSON.stringify(formData));
  createData();
  e.preventDefault();
}


function createData(){
  if(sessionStorage.getItem('formData')){
    let {fname, lname, adress, email, phone} = JSON.parse(sessionStorage.getItem('formData'));
    let output = document.getElementById('output');
    output.innerHTML = `
      <table>
        <body>
          <tr>
            <caption>BEKRÄFTELSE KUNDUPPGIFTER:
            </caption>
          </tr>
          <tr>
            <td>
            </td>
          </tr>
          <tr>
            <td>
            </td>
          </tr>
          <tr>
            <td>
            </td>
          </tr>
          <tr>
            <td>Förnamn:\xa0\xa0</td>
            <td>${fname}</td>
          </tr>
          <tr>
            <td>Efternamn:\xa0\xa0</td>
            <td>${lname}</td>
          </tr>
          <tr>
            <td>Adress:\xa0\xa0</td>
            <td>${adress}</td>
          </tr>
          <tr>
            <td>Email:\xa0\xa0</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Telefonnummer:\xa0\xa0</td>
            <td>${phone}</td>
          </tr>
        </body>
      </table>
    `
  }
}
