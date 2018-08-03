self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open("frydenbo").then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/Pages/Router.js',
       '/App.js',
       '/index.js',
     ]).catch(e => console.log(e));
   })
 );
});



self.addEventListener('fetch', function(event) {

    event.respondWith(
      caches.open("frydenbo")
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
    })
  );

  });
  