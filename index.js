// Add your code here
function submitData(name, email) {
  const url = "http://localhost:3000/users";
  const data = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, configurationObject)
    .then((response) => response.json())
    .then((json) => {
      const id = json.id;
      const p = document.createElement("p");
      p.textContent = id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
