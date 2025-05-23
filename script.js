function processText(isEncrypting) {
  const input = document.getElementById('inputText').value;
  const shift = parseInt(document.getElementById('shiftValue').value);
  let output = '';

  if (isNaN(shift)) {
    document.getElementById('output').innerText = "Please enter a valid number for shift.";
    return;
  }

  const actualShift = isEncrypting ? shift : -shift;

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    output += String.fromCharCode(charCode + actualShift);
  }

  document.getElementById('output').innerText = output;
}

function copyToClipboard() {
  const outputText = document.getElementById('output').innerText;

  if (!outputText) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(outputText).then(() => {
    alert("Output copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
}
