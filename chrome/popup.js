const name = document.querySelector("#name");

if (name === null) {
  throw new Error("Missing #name");
}

name.textContent = "Unlost";
