function check() {
  const n = document.getElementById("num").value;  // get input
  document.getElementById("result").innerText =
    n === "" ? "Please enter a number." : n % 2 === 0 ? "EVEN" : "ODD";  // display result
}
