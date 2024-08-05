export default function tab() {
  const btnTabs = document.querySelectorAll(".btn-tab");

  if (btnTabs.length) {
    btnTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const { tab: tabId } = btn.dataset;
        const parentTab = btn.closest(".tab-parent");
        const currentButtons = parentTab.querySelectorAll(".btn-tab");
        const tabs = parentTab.querySelectorAll(".tab");
        const currentTab = document.querySelector(`.tab[data-tab=${tabId}]`);

        currentButtons.forEach((b) => b.classList.remove("active"));
        tabs.forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }
}
