const nav = document.querySelector(".nav"),
    navList = new.querySelectorAll("li"),
    totalNavList = navList.lenght;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        console.log(this);
    })
}



function send(event) {
    event.preventDefault();
    Email.send({
        name: document.getElementById('name').value,
        secureToken: "f05adecb-b4f1-4be1-81ad-bce7309fd811",
        Host: "smtp.gmail.com",
        To: 'nipuchandradas123@gmail.com',
        From: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Body: document.getElementById('message').value,
    }).then(function(response) {
        if (response == 'ok') {
            alert("Mail sent successfully");
        } else {
            throw new Error("Error: " = response.statustext);
        }
    });
}