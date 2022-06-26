const YA_MAP = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A301e4097ea3bd5024008eb8fdf6d3d037757eb5020edc32571f05329b7e96279&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true'
const faqPanels = document.querySelectorAll('.faq__panel');

let ok = false;

window.addEventListener('scroll', function () {
  if (ok === false) {
    ok = true;
    setTimeout(() => {
      let script = document.createElement('script');
      script.src = YA_MAP;
      document.getElementById('map')?.replaceWith(script);
    }, 1000)
  }
});


faqPanels.forEach(faqPanel => {
  faqPanel.addEventListener('click', (event) => {
    const currentPanel = event.target.closest('.faq__panel')

    faqPanels.forEach(panel => {
      panel.classList.remove('faq__panel--active')
      const image = panel?.querySelector('img')
      image.src = './images/faq/plus.svg'
    })

    if (currentPanel) {
      currentPanel.classList.add('faq__panel--active')
      const image = currentPanel?.querySelector('img')
      image.src = './images/faq/minus.svg'
    }
  })
})