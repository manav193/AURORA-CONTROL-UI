document.getElementById("syncButton")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = "Synced";
  setTimeout(() => {
    button.textContent = original;
  }, 1600);
});
