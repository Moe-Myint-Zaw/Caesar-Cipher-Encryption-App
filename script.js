function processText(isEncrypting) {
  const input = document.getElementById('inputText').value;
  const shift = parseInt(document.getElementById('shiftValue').value);
  let output = '';

  if (isNaN(shift)) {
    showToast("Please enter a valid number for shift.");
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
    showToast("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(outputText).then(() => {
    showToast("Output copied to clipboard!");
  }).catch(err => {
    showToast("Failed to copy text: " + err);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.className = "toast show";

  setTimeout(() => {
    toast.className = "toast";
  }, 3000); // Hide after 3 seconds
}
