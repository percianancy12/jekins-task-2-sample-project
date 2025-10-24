function showMessage() {
  const output = document.getElementById("output");
  const now = new Date();
  output.innerText = `You clicked the button! Current time: ${now.toLocaleTimeString()}`;
}