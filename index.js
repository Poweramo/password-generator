const passwordItem = document.getElementById("password");
const copyButton = document.getElementById("copy-button");
const passwordLengthItem = document.getElementById("password-length");
const passwordLengthContainerItem = document.getElementById("password-length-container");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generatePasswordButton = document.getElementById("generate");
const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";

const dataSymbols = `²&é"'(-è_çà)=$*ù^!:;,/.§?%µ£¨+°\`}]@^|[{#~¤`;
const generatePassword = () => {
	let password = "";
	let data = [];

	if (lowerCase.checked) data.push(...dataLowerCase);
	if (upperCase.checked) data.push(...dataUpperCase);
	if (numbers.checked) data.push(...dataNumbers);
	if (symbols.checked) data.push(...dataSymbols);

	if (data.length === 0) {
		alert("You haven't chosen any option!");
		return;
	}

	for (let i = 0; i < Number(passwordLengthItem.value); i++) {
		password += data[Math.floor(Math.random() * data.length)];
	}

	passwordItem.textContent = password;
};

passwordLengthContainerItem.textContent = passwordLengthItem.value;

passwordLengthItem.addEventListener("input", () => {
	passwordLengthContainerItem.textContent = passwordLengthItem.value;
});

generatePasswordButton.addEventListener("click", () => {
	generatePassword();
});

copyButton.addEventListener("click", () => {
	let password = passwordItem.textContent;

	if (password === "") {
		alert("There is nothing to copy!");
	} else {
		navigator.clipboard.writeText(password);
		alert("The password has been copied!");
	}
});
