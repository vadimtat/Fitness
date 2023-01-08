const tabsBtn = document.querySelectorAll('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs__block');

export function initTabs() {
  tabsBtn.forEach((e) => {
    e.addEventListener('click', () => {
      let currentBtn = e;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('tabs__item--active')) {
        tabsBtn.forEach((e) => {
          e.classList.remove('tabs__item--active');
        });
        tabsItems.forEach((e) => {
          e.classList.remove('tabs__block--active');
        });
        currentBtn.classList.add('tabs__item--active');
        currentTab.classList.add('tabs__block--active');
      }
    });
  });
  document.querySelector('.tabs__item').click();
}
