'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd125102a17478729b8a077e995d6f78",
"assets/AssetManifest.bin.json": "603404182b229b1e3e049d0909fd9cb5",
"assets/AssetManifest.json": "f83f1b8299072716fe7da50557ccf5f3",
"assets/assets/animations/cat_animation.json": "9b654fdd079c60db2cc83e2d344c388b",
"assets/assets/animations/error.json": "ff0bc909e087c8f62f9760a004b67856",
"assets/assets/animations/linear_loader.json": "3762ce66d581feccc2261c4904a6224f",
"assets/assets/animations/loader.json": "83ce24db9dd5467ad75cd758c1a9ab5a",
"assets/assets/animations/login_animation.json": "118f8c3c5a102217f3aad48805280add",
"assets/assets/animations/not_found.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/animations/onboarding.json": "a39801cfcce9997b488b5b2264c5a8b7",
"assets/assets/icons/icon.png": "2f8e7bdeddaf63399d7e6654af399ff4",
"assets/assets/icons/logo.png": "30d9a4713e5b8f487ceb5fcec9bb27d6",
"assets/assets/icons/no-connection.png": "0c95563575d448912185cd07dad02c12",
"assets/assets/images/access_denied.png": "5152e6ea5e0b81b7c18e2e4462463c74",
"assets/assets/svgs/my_profile.svg": "4513ac9b06845e18d04164049d51ae75",
"assets/assets/svgs/posts.svg": "81119121525bf07f29bfdb9f397c13f0",
"assets/assets/svgs/super_user.svg": "7e126a3e65af656c861d7f94777d6cb6",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "1b90d3e143bec8250b4626adaa3fbf91",
"assets/NOTICES": "53f6f03a3ab524ec283b56a7fa16b170",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8b53cc9e296283bb85f9274ddcf3e434",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "049ac9660baff1c1a741c54839db0493",
"icons/Icon-512.png": "001c0528258d36f8972e4e6acb2cded3",
"icons/Icon-maskable-192.png": "049ac9660baff1c1a741c54839db0493",
"icons/Icon-maskable-512.png": "001c0528258d36f8972e4e6acb2cded3",
"index.html": "70be1e95e4c4222d1d5acc401b3b603d",
"/": "70be1e95e4c4222d1d5acc401b3b603d",
"main.dart.js": "68dbd8d15ba11cf2e1f01d0359b3b0ce",
"manifest.json": "f3f95faaf56c88d408a2ad59eb4c9117",
"splash/img/dark-1x.png": "a99c71a79ab0f37a5bde31dcee21fb33",
"splash/img/dark-2x.png": "8ff736a912c2102242093dc7cf3b8648",
"splash/img/dark-3x.png": "39a1ae441e664c785255f644c15545b2",
"splash/img/dark-4x.png": "049ac9660baff1c1a741c54839db0493",
"splash/img/light-1x.png": "a99c71a79ab0f37a5bde31dcee21fb33",
"splash/img/light-2x.png": "8ff736a912c2102242093dc7cf3b8648",
"splash/img/light-3x.png": "39a1ae441e664c785255f644c15545b2",
"splash/img/light-4x.png": "049ac9660baff1c1a741c54839db0493",
"version.json": "e3050bd746a9aac84ddf25ce42fc150e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
