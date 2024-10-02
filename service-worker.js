self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('nombre-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',  // Asegúrate de que este archivo esté disponible
        'https://imgur.com/73N7Df1.png', // Cambia esto con la ruta de tu ícono
        'https://imgur.com/73N7Df1.png'  // Cambia esto con la ruta de tu ícono
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
