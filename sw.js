const CACHE_NAME = "alem-do-silencio-78a83c710ba3fe81";
const APP_SHELL = [
  "./",
  "./index.html",
  "./bundle.js",
  "./components.js",
  "./manifest.webmanifest",
  "./assets/audio/lucas.mp3",
  "./assets/audio/the-budding-of-consciousness.mp3",
  "./assets/avatar-jogador.svg",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/lucas.svg",
  "./assets/style3d/background-acolhimento.webp",
  "./assets/style3d/background-biblioteca.webp",
  "./assets/style3d/background-corredor.webp",
  "./assets/style3d/background-jardim.webp",
  "./assets/style3d/background-quadra.webp",
  "./assets/style3d/background-refeitorio.webp",
  "./assets/style3d/bau-descobertas.png",
  "./assets/style3d/braian-narracao.png",
  "./assets/style3d/brian-sheet.png",
  "./assets/style3d/brian-talking.png",
  "./assets/style3d/brian.jpg",
  "./assets/style3d/buttons.css",
  "./assets/style3d/carta-frente-moldura.png",
  "./assets/style3d/carta-verso-limpo.png",
  "./assets/style3d/carta-verso-moldura.png",
  "./assets/style3d/character-bia.png",
  "./assets/style3d/character-lucas.png",
  "./assets/style3d/character-player.png",
  "./assets/style3d/character-teacher.png",
  "./assets/style3d/components.css",
  "./assets/style3d/design-tokens.css",
  "./assets/style3d/emotion-bia-seated-happy.png",
  "./assets/style3d/emotion-bia-seated-sad.png",
  "./assets/style3d/emotion-bia-seated-shy.png",
  "./assets/style3d/emotion-lucas-seated-happy.png",
  "./assets/style3d/emotion-lucas-seated-sad.png",
  "./assets/style3d/emotion-lucas-seated-shy.png",
  "./assets/style3d/emotion-lucas-standing-happy.png",
  "./assets/style3d/emotion-lucas-standing-sad.png",
  "./assets/style3d/emotion-lucas-standing-shy.png",
  "./assets/style3d/emotion-teacher-standing-happy.png",
  "./assets/style3d/emotion-teacher-standing-sad.png",
  "./assets/style3d/emotion-teacher-standing-shy.png",
  "./assets/style3d/frames.json",
  "./assets/style3d/icones-descobertas.png",
  "./assets/style3d/jornada-quadra.png",
  "./assets/style3d/journey-ui.css",
  "./assets/style3d/logo-jornada.png",
  "./assets/style3d/mago/andando/tile000.png",
  "./assets/style3d/mago/andando/tile001.png",
  "./assets/style3d/mago/andando/tile002.png",
  "./assets/style3d/mago/andando/tile003.png",
  "./assets/style3d/mago/andando/tile004.png",
  "./assets/style3d/mago/andando/tile005.png",
  "./assets/style3d/mago/andando/tile006.png",
  "./assets/style3d/mago/andando/tile007.png",
  "./assets/style3d/mago/andando/tile008.png",
  "./assets/style3d/mago/andando/tile009.png",
  "./assets/style3d/mago/falando/mago000.png",
  "./assets/style3d/mago/falando/mago001.png",
  "./assets/style3d/mago/falando/mago002.png",
  "./assets/style3d/mago/falando/mago003.png",
  "./assets/style3d/mago/falando/mago005.png",
  "./assets/style3d/mago/falando/mago006.png",
  "./assets/style3d/mago/falando/mago007.png",
  "./assets/style3d/mago/falando/mago008.png",
  "./assets/style3d/naila.png",
  "./assets/style3d/naila/tile000.png",
  "./assets/style3d/naila/tile001.png",
  "./assets/style3d/naila/tile002.png",
  "./assets/style3d/naila/tile003.png",
  "./assets/style3d/naila/tile004.png",
  "./assets/style3d/naila/tile005.png",
  "./assets/style3d/naila/tile006.png",
  "./assets/style3d/naila/tile007.png",
  "./assets/style3d/obstacle-backpack.png",
  "./assets/style3d/obstacle-ball.png",
  "./assets/style3d/obstacle-basket.png",
  "./assets/style3d/obstacle-bench.png",
  "./assets/style3d/obstacle-books.png",
  "./assets/style3d/obstacle-cone.png",
  "./assets/style3d/obstacle-cushion.png",
  "./assets/style3d/obstacle-footstool.png",
  "./assets/style3d/obstacle-log.png",
  "./assets/style3d/obstacle-mat.png",
  "./assets/style3d/obstacle-planter.png",
  "./assets/style3d/obstacle-pouf.png",
  "./assets/style3d/obstacle-recyclebin.png",
  "./assets/style3d/obstacle-returnsbox.png",
  "./assets/style3d/obstacle-rock.png",
  "./assets/style3d/obstacle-supplybox.png",
  "./assets/style3d/obstacle-traycart.png",
  "./assets/style3d/obstacle-wetfloor.png",
  "./assets/style3d/pedestal-acolhimento.png",
  "./assets/style3d/pedestal-biblioteca.png",
  "./assets/style3d/pedestal-corredor.png",
  "./assets/style3d/pedestal-jardim.png",
  "./assets/style3d/pedestal-quadra.png",
  "./assets/style3d/pedestal-refeitorio.png",
  "./assets/style3d/pedestal-sala.png",
  "./assets/style3d/portrait-bia.png",
  "./assets/style3d/portrait-lucas.png",
  "./assets/style3d/portrait-player.png",
  "./assets/style3d/portrait-teacher.png",
  "./assets/style3d/presente-conquista.png",
  "./assets/style3d/quadra-center.jpg",
  "./assets/style3d/quadra-left.jpg",
  "./assets/style3d/quadra-right.jpg",
  "./assets/style3d/seated-bia.png",
  "./assets/style3d/seated-lucas.png",
  "./assets/style3d/sofia/sofia001.webp",
  "./assets/style3d/sofia/sofia002.webp",
  "./assets/style3d/sofia/sofia003.webp",
  "./assets/style3d/sofia/sofia005.webp",
  "./assets/style3d/sofia/sofia006.webp",
  "./assets/style3d/sofia/sofia007.webp",
  "./assets/style3d/sofia/sofia008.webp",
  "./assets/style3d/speech-bia-seated-happy.png",
  "./assets/style3d/speech-bia-seated-sad.png",
  "./assets/style3d/speech-bia-seated-shy.png",
  "./assets/style3d/speech-lucas-seated-happy.png",
  "./assets/style3d/speech-lucas-seated-sad.png",
  "./assets/style3d/speech-lucas-seated-shy.png",
  "./assets/style3d/speech-lucas-standing-happy.png",
  "./assets/style3d/speech-lucas-standing-sad.png",
  "./assets/style3d/speech-lucas-standing-shy.png",
  "./assets/style3d/speech-teacher-standing-happy.png",
  "./assets/style3d/speech-teacher-standing-sad.png",
  "./assets/style3d/speech-teacher-standing-shy.png",
  "./assets/style3d/story-lucas.png",
  "./assets/style3d/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // HTML and scripts must refresh online; cached copies remain available offline.
  if (request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith(".js") || url.pathname.endsWith(".css")) {
    event.respondWith(fetch(request, { cache: "no-cache" }).then(async response => {
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    }).catch(async () => (await caches.match(request)) || (request.mode === "navigate" ? caches.match("./index.html") : Response.error())));
    return;
  }
  event.respondWith(caches.match(request).then(cached => {
    if (cached) return cached;
    return fetch(request).then(response => {
      if (response.ok && response.type === "basic") {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    }).catch(() => request.mode === "navigate" ? caches.match("./index.html") : Response.error());
  }));
});
