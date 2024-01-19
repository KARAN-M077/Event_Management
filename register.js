document.addEventListener("readystatechange",
    (event)=>{
        if(event.target.readyState == "complete"){
            console.log("Status: complete");
            initApplication();
        }
    });

function initApplication(){
    console.log("initApplication Begin");

    const form = document.querySelector(".details");

    const name1 = form.querySelector("#name1");
    const roll1 = form.querySelector("#roll1");
    const dept1 = form.querySelector("#dep1");
    const email = form.querySelector("#email");
    const name2 = form.querySelector("#name2");
    const roll2 = form.querySelector("#roll2");
    const dept2 = form.querySelector("#dept2");
    const transaction = form.querySelector("#transaction");
    const regBtn = form.querySelector(".register");

    const warnTxt = form.querySelector(".warnTxt");
    
    regBtn.addEventListener("click",
        (event)=>{
            event.preventDefault();
            const name1 = name1.value;
            const roll1 = roll1.value;
            const dept1 = dept1.value;
            const email = email.value;
            const name2 = name2.value;
            const roll2 = roll2.value;
            const dept2 = dept2.value;
            const transaction = transaction.value;

            if(name1 && roll1 && dept1 && email && name2 && roll2 && dept2 && transaction !=" "){
                warnTxt.textContent = "Successfully registered";
                window.location.replace('/navbar.html');
            }else{
                warnTxt.textContent = "Fields can't be empty";
            }
        })
}