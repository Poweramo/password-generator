const passwordItem = document.getElementById("password");
const passwordLengthItem = document.getElementById("password-length");

passwordItem.textContent = passwordLengthItem.value;

passwordLengthItem.addEventListener("input", () => {
	passwordItem.textContent = passwordLengthItem.value;
});
