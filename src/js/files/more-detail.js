export default function moreDetail() {
  const buttons = document.querySelectorAll(".more-detail-btn");
  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const {more: idShow} = btn.dataset;
        console.log(idShow)
        const showItem = document.querySelector(`.more-detail[data-more="${idShow}"]`);

        showItem.classList.remove("more-detail");
        btn.remove();
      })
    })
  }
}