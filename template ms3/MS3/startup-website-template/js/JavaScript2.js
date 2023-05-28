
    let users = {
        client: {username: "shahd", password: "1234" },
    banker: {username: "maya", password: "1234" },
    admin: {username: "sara", password: "1234" }
                        };

    function login() {
        let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users.client.username === username && users.client.password === password) {
        window.location.href = "clientView.html";
                            } else if (users.banker.username === username && users.banker.password === password) {
        window.location.href = "bankerView.html";
                            } else if (users.admin.username === username && users.admin.password === password) {
        window.location.href = "adminView.html";
                            } else {
        alert("Invalid username or password");
                            }
                        }
