function validateForm() {
  console.log("Validating function is running");
    var name1 = document.getElementById('name1').value;
    var roll1 = document.getElementById('roll1').value;
    var dept1 = document.getElementById('dept1').value;
    var email = document.getElementById('email').value;
    var name2 = document.getElementById('name2').value;
    var roll2 = document.getElementById('roll2').value;
    var dept2 = document.getElementById('dept2').value;
    var transaction = document.getElementById('transaction').value;
    var file = document.getElementById('file').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;

    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" ||(transaction !== "" && !transactionRegex.test(transaction))|| (transaction === "" && file === "")) {
        alert("Please fill in all fields and provide a valid email address and Transaction ID.");
        return false;
    }
    if (transaction !== "" && !transactionRegex.test(transaction)) {
      alert("Please enter a valid transaction ID (alphanumeric characters only).");
      return false;
    }
    else{
      async function postData(url = "", data = {}) {
    
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return response.json();
      }
    
      postData("http://localhost:4500/paper", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
      }).then((data) => {
          console.log(data);
        });
        postData("http://localhost:4500/bun", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
        
        postData("http://localhost:4500/code", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
        postData("http://localhost:4500/datahack", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
        postData("http://localhost:4500/elec", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
        postData("http://localhost:4500/future", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
      
      
        postData("http://localhost:4500/ideathon", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
        postData("http://localhost:4500/quiz", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      
      
      
        postData("http://localhost:4500/tech", { 
          name1: name1,
          roll1 :roll1,
          dept1:dept1,
          email:email,
          name2:name2,
          roll2:roll2,
          dept2:dept2,
       }).then((data) => {
          console.log(data);
        });
      openPopup() ;
     }
  }
  
  
  
 
let popup=document.getElementById("popup");
function openPopup()
{
  popup.classList.add("open-popup");
}
function closePopup()
{
  popup.classList.remove("open-popup");
}