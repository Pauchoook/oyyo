export default function tab() {
  const btnTabs = document.querySelectorAll(".btn-tab");
  const tabs = document.querySelectorAll(".tab");

  if (tabs.length) {
    btnTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const { tab: tabId } = btn.dataset;
        const currentTab = document.querySelector(`.tab[data-tab=${tabId}]`);

        btnTabs.forEach((b) => b.classList.remove("active"));
        tabs.forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }
}