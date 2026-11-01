'use strict';

// O jogo ainda mantém parte dos componentes no <style> de index.html.
// Carregá-lo evita manter uma segunda cópia que se desatualize silenciosamente.
fetch('index.html').then(response => {
  if (!response.ok) throw new Error('Não foi possível ler index.html');
  return response.text();
}).then(html => {
  const source = new DOMParser().parseFromString(html, 'text/html').querySelector('head style');
  if (!source) throw new Error('Estilos do jogo não encontrados');
  const style = document.createElement('style');
  style.textContent = source.textContent;
  document.head.insertBefore(style, document.head.querySelector('link[rel="stylesheet"]'));
}).catch(() => { document.querySelector('#catalog-error').hidden = false; });

document.querySelectorAll('.story-choice').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.story-choice').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    document.querySelector('.demo-feedback').textContent = `Atitude escolhida: ${button.textContent}.`;
  });
});

const examples = [
  {title: 'Escuta acolhedora', lesson: 'Escutar com calma pode ajudar alguém a se sentir acolhido.'},
  {title: 'Rede de apoio', lesson: 'Ofereça companhia e respeite a escolha da outra pessoa.'},
  {title: 'Presença contínua', lesson: 'Manter contato sem pressionar também é uma forma de cuidado.'},
];
let current = 0;
const windowElement = document.querySelector('.card-window');
const previous = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');
function renderCard() {
  const item = examples[current];
  windowElement.innerHTML = `<div class="discovery-card"><button type="button" class="discovery-card-button" aria-expanded="false" aria-label="${item.title}: mostrar lição"><span class="discovery-card-flip"><span class="discovery-face discovery-front"><span class="discovery-number">${current + 1}</span><span class="discovery-illustration icon-${current}" aria-hidden="true"></span><span class="discovery-card-name">${item.title}</span></span><span class="discovery-face discovery-back" aria-hidden="true"><span class="discovery-number">${current + 1}</span><span class="discovery-lesson">${item.lesson}</span></span></span></button></div>`;
  previous.disabled = current === 0;
  next.disabled = current === examples.length - 1;
  document.querySelector('.card-status').textContent = `Carta ${current + 1} de ${examples.length}`;
}
windowElement.addEventListener('click', event => {
  const button = event.target.closest('.discovery-card-button');
  if (!button) return;
  const flipped = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(flipped));
  button.closest('.discovery-card').classList.toggle('is-flipped', flipped);
  button.querySelector('.discovery-front').setAttribute('aria-hidden', String(flipped));
  button.querySelector('.discovery-back').setAttribute('aria-hidden', String(!flipped));
  button.setAttribute('aria-label', flipped ? `${examples[current].title}: ${examples[current].lesson}. Toque para voltar` : `${examples[current].title}: mostrar lição`);
});
previous.addEventListener('click', () => { if (current > 0) { current--; renderCard(); } });
next.addEventListener('click', () => { if (current < examples.length - 1) { current++; renderCard(); } });
renderCard();

const exampleModal = document.querySelector('#example-modal');
document.querySelector('#open-example-modal').addEventListener('click', () => exampleModal.showModal());
document.querySelector('#close-example-modal').addEventListener('click', () => exampleModal.close());
