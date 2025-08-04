function attachDateFormat(id) {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
      input.value = input.value
        .replace(/[^0-9-]/g, "") 
        .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"); // format yyyy-mm-dd
    });
  }

  attachDateFormat("checkin");
  attachDateFormat("checkout");

  function sendBookingRequest() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    fetch("http://localhost:8080/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ checkin, checkout })
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.message;
    })
    .catch(err => console.error(err));
  }
 document.getElementById("submitBtn").addEventListener("click", sendBookingRequest);
