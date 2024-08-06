export default function smoothScroll() {
  document.querySelectorAll(".anchor").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const offsetPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });

        document.querySelector("#burger").classList.remove("open");
        document.body.classList.remove("body-hidden");
      }
    });
  });
}