
const botonUpdate = document.getElementById("updateBtn");




//Actualizar los datos

botonUpdate.addEventListener("click", async () => {
  try {
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("name").value;
    const experience = document.getElementById("experience").value;
    const especialty = document.getElementById("especialty").value;
    const password = document.getElementById("password").value;
    const response = await fetch(`/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, experience, especialty, password }),
    });

    alert("Skater updated successfully");
    window.location.href = "/";
  } catch (error) {
    alert(error.message);
  }
});