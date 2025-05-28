// Age Calculator Logic
document.getElementById('calculate-btn').addEventListener('click', function() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate.getTime())) {
      document.getElementById('result').innerHTML = '<p style="color:red">Please select a valid date</p>';
      return;
    }
  
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('result').innerHTML = `
      <p>Your age is:</p>
      <h4>${years} years, ${months} months, ${days} days</h4>
    `;
  });
