const contentWrapper = document.getElementById('main-content');

const pathname = window.location.pathname;

const pathToHTML = {
  '/': '/modelos.html',
  '/modelos': '/modelos.html',
  '/topologias': '/topologias.html',
  '/protocolos': 'protocolos.html',
};

if (pathname in pathToHTML) {
  fetch(pathToHTML[pathname])
    .then(response => response.text())
    .then(htmlContent => {
      contentWrapper.innerHTML = htmlContent;
    })
    .catch((_) => {
      contentWrapper.innerHTML = `
        <h1>404</h1>
      `
    });
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
