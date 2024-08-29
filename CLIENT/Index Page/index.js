const userData = async () => {
  try {
    const resp = await fetch("http://localhost:8081", {
      method: "GET",
      credentials: "include",
    });
    if (resp.status !== 200) {
      window.location.href = "http://localhost:5500/client/login.html";
    }
    const { data } = await resp.json();
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userBio = document.getElementById("userBio");
    userName.innerText = data.username;
    userEmail.innerText = data.email;
    userBio.innerText = data.bio;
  } catch (error) {
    console.log(error.message);
    window.location.href = "http://localhost:5500/client/login.html";
  }
};

userData();
