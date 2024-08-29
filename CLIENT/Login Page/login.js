const formSubmit = document.getElementById("submit");

const loginUser = async (payload) => {
  try {
    const resp = await fetch("http://localhost:8081/login", {
      method: "POST",
      credentials: "include",
      redirect: "follow",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    console.log(data);
    window.location.href = "http://localhost:5500/client/index.html";
  } catch (error) {
    console.log(error.message);
  }
};

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const userName = document.getElementById("username").value;
  const userPassword = document.getElementById("password").value;
  const userData = {
    username: userName,
    password: userPassword,
  };

  loginUser(userData);
});
