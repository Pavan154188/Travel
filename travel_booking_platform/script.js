// Open modal
document.getElementById("openLogin").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "block";
});

// Close modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none";
});

// Close when clicking outside the modal
window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Form validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mobile = document.getElementById("mobile").value.trim();

  const isValid = /^[6-9]\d{9}$/.test(mobile);
  if (!isValid) {
    alert("Please enter a valid 10-digit mobile number starting with 6-9.");
    return;
  }

  // Simulate login
  alert("Login request sent to mobile: " + mobile);
  document.getElementById("loginModal").style.display = "none";
});
