const formSubmit = document.getElementById("submit");

const registerUser = async (payload) => {
  try {
    const resp = await fetch("http://localhost:8081/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    console.log(data);
    window.location.href = "http://localhost:5500/client/login.html";
  } catch (error) {
    console.log(error.message);
  }
};

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = document.getElementById("username").value;
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const nameOfUser = document.getElementById("name").value;
  const userBio = document.getElementById("bio").value;

  if (
    !userName &&
    userEmail &&
    userEmail &&
    userPassword &&
    nameOfUser &&
    userBio
  ) {
    alert("All input fields are required");
    return;
  }

  const userData = {
    name: nameOfUser,
    email: userEmail,
    bio: userBio,
    password: userPassword,
    username: userName,
  };

  registerUser(userData);
});
