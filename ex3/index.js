const passwordLengthInput = document.getElementById("password-length");
const includeUppercaseInput = document.getElementById("include-uppercase");
const includeLowercaseInput = document.getElementById("include-lowercase");
const includeNumbersInput = document.getElementById("include-numbers");
const includeSymbolsInput = document.getElementById("include-symbols");
const generateButton = document.getElementById("generate-password");
const passwordDisplay = document.getElementById("password-display");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  const passwordLength = passwordLengthInput.value;
  const includeUppercase = includeUppercaseInput.checked;
  const includeLowercase = includeLowercaseInput.checked;
  const includeNumbers = includeNumbersInput.checked;
  const includeSymbols = includeSymbolsInput.checked;

  let charSet = "";
  if (includeUppercase) charSet += uppercaseChars; //todas os if abaixo são em caso de TRUE, se FALSE (not check, os chars não são setados)
  if (includeLowercase) charSet += lowercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSymbols) charSet += symbolChars;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {  //porque não "i <= passwordLength"?
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordDisplay.textContent = password;
}

document.getElementById('generate-password').onclick = generatePassword;
//generateButton.addEventListener("click", generatePassword); //entender melhor essa função

// Peguei no stackoverflow
/* function copyPasswordToClipboard() {
  const password = passwordDisplay.textContent;
  if (!password) return;

  const textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  alert("Senha copiada para a área de transferência.");
}

const copyButton = document.getElementById("copy-password");
copyButton.addEventListener("click", copyPasswordToClipboard); */
