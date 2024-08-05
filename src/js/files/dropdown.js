export function dropdown() {
  const buttons = document.querySelectorAll(".dropdown__btn");
  const dropdowns = document.querySelectorAll(".drodpown");
  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentDropdown = btn.closest(".dropdown");
        
        if (!currentDropdown.classList.contains("active")) {
          currentDropdown.classList.add("active");
          document.addEventListener("click", () => handleClose(currentDropdown));
        } else {
          handleClose(currentDropdown);
          currentDropdown.addEventListener("click", (e) => e.stopPropagation());
          dropdowns.forEach((d) => d.classList.remove("active"));
        }
      });
    });

    function handleClose(currentDropdown) {
      currentDropdown.classList.remove("active");

      return document.removeEventListener("click", handleClose);
    }
  }
}
