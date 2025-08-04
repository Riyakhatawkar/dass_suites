
  function attachDateFormat(id) {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
      input.value = input.value
        .replace(/[^0-9-]/g, "") // allow only numbers and dash
        .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"); // format yyyy-mm-dd
    });
  }

  attachDateFormat("checkin");
  attachDateFormat("checkout");

  fetch('http://localhost:8080/booking')
  .then(res => res.json())
  .then(data => {
    document.getElementById('output').innerText = data.message;
  })
  .catch(err => console.error(err));
