'use strict';

// O jogo ainda mantém parte dos componentes no <style> de index.html.
// Carregá-lo evita manter uma segunda cópia que se desatualize silenciosamente.
if (!document.querySelector('#catalog-initial-styles')) fetch('index.html').then(response => {
  if (!response.ok) throw new Error('Não foi possível ler index.html');
  return response.text();
}).then(html => {
  const source = new DOMParser().parseFromString(html, 'text/html').querySelector('head style');
  if (!source) throw new Error('Estilos do jogo não encontrados');
  const style = document.createElement('style');
  style.textContent = source.textContent;
  document.head.insertBefore(style, document.head.querySelector('link[rel="stylesheet"]'));
}).catch(() => { document.querySelector('#catalog-error').hidden = false; });

// Modo de incorporação usado pela documentação gerada pelo Compodoc:
// ?component=<chave> exibe apenas a seção de catálogo que contém a chave
// em data-components (ver CATALOG_SECTIONS em src/ui/components/index.ts).
const previewKey = new URLSearchParams(location.search).get('component');
if (previewKey && /^[a-z0-9-]+$/.test(previewKey)) {
  const section = [...document.querySelectorAll('.catalog-main > section')]
    .find(item => (item.dataset.components || '').split(' ').includes(previewKey));
  if (section) {
    document.body.classList.add('catalog-embedded');
    document.querySelectorAll('.catalog-main > section').forEach(item => { if (item !== section) item.hidden = true; });
    document.title = `Exemplo de ${previewKey}`;
  }
}
