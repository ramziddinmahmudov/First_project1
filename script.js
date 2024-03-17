const darkModeInfo = localStorage.getItem("dark");

if (darkModeInfo === "bexruz") {
  addLocalStorageData();
}

function addLocalStorageData() {
  document.body.classList.add("darkMode");
  document.querySelector(".div1").style.display = "flex";
  document.querySelector(".div2").style.display = "none";
  localStorage.setItem("dark", "bexruz");
}

function removeStorage() {
  document.body.classList.remove("darkMode");
  localStorage.setItem("dark", undefined);
  document.querySelector(".div2").style.display = "flex";
  document.querySelector(".div1").style.display = "none";
}

function ClickAddChange() {
  const darkStorage = localStorage.getItem("dark");
  if (darkStorage !== "bexruz") {
    addLocalStorageData();
  } else {
    removeStorage();
  }
}
