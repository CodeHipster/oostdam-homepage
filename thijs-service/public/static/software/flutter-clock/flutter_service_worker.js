'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e474464a6f5de5b7451c8dc6c6852315",
"assets/assets/images/dark/background/background.png": "f64139b52d23a8d8a985eff861109a46",
"assets/assets/images/dark/colon.png": "da85ae8624da808eae30f25c0dc28702",
"assets/assets/images/dark/digit1/1_0-1.webp": "3409724fa36b64380395fd9198dedc46",
"assets/assets/images/dark/digit1/1_1-2.webp": "88ba63f8015bdded6016a9f373116295",
"assets/assets/images/dark/digit1/1_2-0.webp": "17901d9cf77c4482703bbfeced5c1d59",
"assets/assets/images/dark/digit2/2_0-1.webp": "cd376466a524d1347bf1d52eb1c51c1b",
"assets/assets/images/dark/digit2/2_1-2.webp": "e089f2235052e88fb0a79feb318fc8dc",
"assets/assets/images/dark/digit2/2_2-3.webp": "555e673a868218967d5642a347f8a014",
"assets/assets/images/dark/digit2/2_3-0.webp": "022bf71884765521595cdb5ffc9b313f",
"assets/assets/images/dark/digit2/2_3-4.webp": "66b3a54485e4d3a420b03160845071d1",
"assets/assets/images/dark/digit2/2_4-5.webp": "6d7547fb0c16bf73d5661b7dea35b2c5",
"assets/assets/images/dark/digit2/2_5-6.webp": "0baf00db79472cae3c03f70806a0558d",
"assets/assets/images/dark/digit2/2_6-7.webp": "08ec8df79bcbf65d7056bd3e7e73f6b9",
"assets/assets/images/dark/digit2/2_7-8.webp": "bbd065d3dc957892ab238c88b89261fa",
"assets/assets/images/dark/digit2/2_8-9.webp": "5903cdd5a7c05574e8e3732c1a2d179e",
"assets/assets/images/dark/digit2/2_9-0.webp": "5d661c26d793243781b8b2e92b0cbbde",
"assets/assets/images/dark/digit3/3_0-1.webp": "b4ada11f56645f3e6740c80d058acab5",
"assets/assets/images/dark/digit3/3_1-2.webp": "09d6d199fcb8d1851cd4cf29e07820fc",
"assets/assets/images/dark/digit3/3_2-3.webp": "815468db654302ebb31bd4c98acec166",
"assets/assets/images/dark/digit3/3_3-4.webp": "f62499cc13b5bdd047206f8648decfec",
"assets/assets/images/dark/digit3/3_4-5.webp": "cdb279a3a6e0d193bf74275a07145681",
"assets/assets/images/dark/digit3/3_5-0.webp": "7d58ca40a1b3511b3c1019d3974c62b1",
"assets/assets/images/dark/digit4/4_0-1.webp": "23dfb914974b8a81ec9326c7176697c1",
"assets/assets/images/dark/digit4/4_1-2.webp": "9038f4f5156b91736244b679af488825",
"assets/assets/images/dark/digit4/4_2-3.webp": "0a132200c2e76417857c285ff26e909f",
"assets/assets/images/dark/digit4/4_3-4.webp": "e370ca1552e1acc044a80243f68d06ea",
"assets/assets/images/dark/digit4/4_4-5.webp": "fbe3962a1a17a1de1f3fda35e7bcbeb7",
"assets/assets/images/dark/digit4/4_5-6.webp": "51dde4e114ff57610fa9453002b75bf1",
"assets/assets/images/dark/digit4/4_6-7.webp": "7535172cf728db6d93c342629aac27b2",
"assets/assets/images/dark/digit4/4_7-8.webp": "5659f7efff7ee25cbf2276e4b4872cd7",
"assets/assets/images/dark/digit4/4_8-9.webp": "8c29eefe67d2271b84a65e29bd6b28d8",
"assets/assets/images/dark/digit4/4_9-0.webp": "bb9cb378bdfc13be15a2f1e6cd987c1f",
"assets/assets/images/light/background/background.png": "0d08b24f1db7274e24caf6d3a6d6b72d",
"assets/assets/images/light/colon.png": "da85ae8624da808eae30f25c0dc28702",
"assets/assets/images/light/digit1/1_0-1.webp": "3409724fa36b64380395fd9198dedc46",
"assets/assets/images/light/digit1/1_1-2.webp": "88ba63f8015bdded6016a9f373116295",
"assets/assets/images/light/digit1/1_2-0.webp": "17901d9cf77c4482703bbfeced5c1d59",
"assets/assets/images/light/digit2/2_0-1.webp": "cd376466a524d1347bf1d52eb1c51c1b",
"assets/assets/images/light/digit2/2_1-2.webp": "e089f2235052e88fb0a79feb318fc8dc",
"assets/assets/images/light/digit2/2_2-3.webp": "555e673a868218967d5642a347f8a014",
"assets/assets/images/light/digit2/2_3-0.webp": "022bf71884765521595cdb5ffc9b313f",
"assets/assets/images/light/digit2/2_3-4.webp": "66b3a54485e4d3a420b03160845071d1",
"assets/assets/images/light/digit2/2_4-5.webp": "6d7547fb0c16bf73d5661b7dea35b2c5",
"assets/assets/images/light/digit2/2_5-6.webp": "0baf00db79472cae3c03f70806a0558d",
"assets/assets/images/light/digit2/2_6-7.webp": "08ec8df79bcbf65d7056bd3e7e73f6b9",
"assets/assets/images/light/digit2/2_7-8.webp": "bbd065d3dc957892ab238c88b89261fa",
"assets/assets/images/light/digit2/2_8-9.webp": "5903cdd5a7c05574e8e3732c1a2d179e",
"assets/assets/images/light/digit2/2_9-0.webp": "5d661c26d793243781b8b2e92b0cbbde",
"assets/assets/images/light/digit3/3_0-1.webp": "b4ada11f56645f3e6740c80d058acab5",
"assets/assets/images/light/digit3/3_1-2.webp": "09d6d199fcb8d1851cd4cf29e07820fc",
"assets/assets/images/light/digit3/3_2-3.webp": "815468db654302ebb31bd4c98acec166",
"assets/assets/images/light/digit3/3_3-4.webp": "f62499cc13b5bdd047206f8648decfec",
"assets/assets/images/light/digit3/3_4-5.webp": "cdb279a3a6e0d193bf74275a07145681",
"assets/assets/images/light/digit3/3_5-0.webp": "7d58ca40a1b3511b3c1019d3974c62b1",
"assets/assets/images/light/digit4/4_0-1.webp": "23dfb914974b8a81ec9326c7176697c1",
"assets/assets/images/light/digit4/4_1-2.webp": "9038f4f5156b91736244b679af488825",
"assets/assets/images/light/digit4/4_2-3.webp": "0a132200c2e76417857c285ff26e909f",
"assets/assets/images/light/digit4/4_3-4.webp": "e370ca1552e1acc044a80243f68d06ea",
"assets/assets/images/light/digit4/4_4-5.webp": "fbe3962a1a17a1de1f3fda35e7bcbeb7",
"assets/assets/images/light/digit4/4_5-6.webp": "51dde4e114ff57610fa9453002b75bf1",
"assets/assets/images/light/digit4/4_6-7.webp": "7535172cf728db6d93c342629aac27b2",
"assets/assets/images/light/digit4/4_7-8.webp": "5659f7efff7ee25cbf2276e4b4872cd7",
"assets/assets/images/light/digit4/4_8-9.webp": "8c29eefe67d2271b84a65e29bd6b28d8",
"assets/assets/images/light/digit4/4_9-0.webp": "bb9cb378bdfc13be15a2f1e6cd987c1f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "873dc1df69eeb9b187c3d85296c78163",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ffd0ee275065385d24a01cc3ca58a37a",
"/": "ffd0ee275065385d24a01cc3ca58a37a",
"main.dart.js": "9e2b0cef9f97cc5123d91478a85a18a3",
"manifest.json": "0c6ea7590c231101d3029799c59c5cd8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
