const contentWrapper = document.getElementById('main-content');

const pathname = window.location.pathname;

const pathToHTML = {
  '/': '/modelos.html',
  '/modelos': '/modelos.html',
  '/topologias': '/topologias.html',
  '/protocolos': 'protocolos.html',
};

if (pathname in pathToHTML) {
  (async () => {
    await new Promise((resolve) => {
      fetch(pathToHTML[pathname])
        .then(response => response.text())
        .then(htmlContent => {
          contentWrapper.innerHTML = htmlContent;
          resolve();
        })
        .catch((_) => {
          contentWrapper.innerHTML = `
            <h1>404</h1>
            `
          resolve();
        });
    })

    if (pathname === '/topologias') {
      const accordionTriggers = document.querySelectorAll('.accordion-trigger');

      accordionTriggers.forEach(trigger => {
        const arrow = trigger.getElementsByClassName('arrow')[0];
        const accordion = trigger.getElementsByClassName('accordion')[0];
        accordion.classList.add('deactive');
        arrow.classList.add('arrow-down');

        trigger.addEventListener('click', () => {
          accordion.classList.toggle('deactive');
          arrow.classList.toggle('arrow-down');
          arrow.classList.toggle('arrow-up');
        });
      });
    }
  })()

} else {
  contentWrapper.innerHTML = `
    <h1>404</h1>
  `
}

window.onscroll = function onScrollHandler() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('header').style.top = '0';
  } else {
    document.querySelector('header').style.top = '-100px';
  }

  prevScrollPos = currentScrollPos;
};
