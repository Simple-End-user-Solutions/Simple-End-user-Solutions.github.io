'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/rms_logo.jpg": "384d9c545a768ce69cf8f82fed69a85b",
"icons/rms_logo.png": "4f48a9e79a7d6d37fb46154ecdcad9be",
"version.json": "79896efb15686ae72b94a2660119f64f",
"manifest.json": "4dcf72d7738ab0527702c5702a808d59",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"index.html": "cc9b1de267fe11f033f461afc022f890",
"/": "cc9b1de267fe11f033f461afc022f890",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"rms_logo.jpg": "0eaba497669fa7762cff4c64aa2998a6",
"main.dart.js": "459220478412b6fdb28e5e4f00826b14",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/AssetManifest.bin": "25b2867cc1c68483ebb76651ea1dd82f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "e45b0a1a7f0f45ef895206e365873d49",
"assets/FontManifest.json": "7499ba614e0eeaf522713c7a112e56a6",
"assets/rms_logo.jpg": "0eaba497669fa7762cff4c64aa2998a6",
"assets/fonts/Roboto_Mono/static/RobotoMono-SemiBoldItalic.ttf": "d6cd56b24c1859f3e01ec50684338882",
"assets/fonts/Roboto_Mono/static/RobotoMono-ExtraLightItalic.ttf": "6fe6edf7704d61127966047e0ee05e7e",
"assets/fonts/Roboto_Mono/static/RobotoMono-Thin.ttf": "564755b4222c6321216f1e764c9204f9",
"assets/fonts/Roboto_Mono/static/RobotoMono-LightItalic.ttf": "029bc3c3cc4278d2e0830f4240c9903d",
"assets/fonts/Roboto_Mono/static/RobotoMono-SemiBold.ttf": "eabbacb68fea19c24a80eaed6715ca4a",
"assets/fonts/Roboto_Mono/static/RobotoMono-ThinItalic.ttf": "a114a11bf7df312c7c0ca28a8ed848a6",
"assets/fonts/Roboto_Mono/static/RobotoMono-MediumItalic.ttf": "6bea71cb28b47720d7d1298dc6e30842",
"assets/fonts/Roboto_Mono/static/RobotoMono-BoldItalic.ttf": "ff657358db1650242d3896f4e6a17cb1",
"assets/fonts/Roboto_Mono/static/RobotoMono-Bold.ttf": "90190d91283189e340b2a44fe560f2cd",
"assets/fonts/Roboto_Mono/static/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/fonts/Roboto_Mono/static/RobotoMono-Light.ttf": "c9166464b1db95fc3cdf9b50fc7f98e2",
"assets/fonts/Roboto_Mono/static/RobotoMono-Medium.ttf": "0eaa3f458fb2611ca44b021db3db09a8",
"assets/fonts/Roboto_Mono/static/RobotoMono-ExtraLight.ttf": "642c61c3093f360ebfe8c96dce691e21",
"assets/fonts/Roboto_Mono/static/RobotoMono-Italic.ttf": "0c4f4d670401518c500b1132d217fcab",
"assets/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf": "336102a48d996db3d945a346b1790b1f",
"assets/fonts/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf": "e2a43959c0a8c62aa65dc5160efb15d9",
"assets/fonts/Roboto_Mono/LICENSE.txt": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/fonts/Roboto_Mono/README.txt": "73e0946e30966fd4f97f941a329c34ad",
"assets/fonts/MaterialIcons-Regular.otf": "df2a36cbd81702bc82d9f75cc3b0e38b",
"assets/AssetManifest.bin.json": "8dd691f082b6208516646bbb9e83eb75",
"assets/NOTICES": "544894b93280a254aa7fa363a4557fc3",
"assets/assets/images/rms_logo2.png": "4f48a9e79a7d6d37fb46154ecdcad9be",
"assets/assets/images/rms_logo1.jpg": "0eaba497669fa7762cff4c64aa2998a6",
"assets/assets/images/rms_nobg.png": "5e1c8884109566f6d28a415f329a5791",
"assets/assets/images/rms_color.png": "a46e644747de6214d6a98a3f781d054b",
"assets/assets/images/error_route.gif": "713ac49716b7746cf8e78310447a0624",
"assets/assets/images/rms_original.jpg": "7a0162c0238bc34d37b934f5f525f707",
"assets/assets/fonts/Roboto_Mono/static/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/documents/rules_and_reg/RulesAndRegulations.pdf": "2a3aa5867555f7f2ede6d117cffe3021",
"assets/documents/rules_and_reg/images/4.png": "ddf9d786a8bf7bedd7a0b88ea53b9daf",
"assets/documents/rules_and_reg/images/10.png": "de26c0da33c83199d3f0ffc7ab41aacf",
"assets/documents/rules_and_reg/images/6.png": "80e071a22caade0c047bbfa782bc7537",
"assets/documents/rules_and_reg/images/2.png": "75434540df1d76a5f8940d4e47acbec4",
"assets/documents/rules_and_reg/images/13.png": "eb7b7e8eb0475b4c90a0977df8f7b3e4",
"assets/documents/rules_and_reg/images/12.jpg": "73f901580362bf2fd5e6942844fad2c2",
"assets/documents/rules_and_reg/images/15.jpg": "bb0505e0e9189827adc831c3cf098100",
"assets/documents/rules_and_reg/images/8.png": "a96f790d99b33cdb6e9f3b29fa70d6f9",
"assets/documents/rules_and_reg/images/1.jpg": "f9a6691251aee49d88a03c858553de48",
"assets/documents/rules_and_reg/images/13.jpg": "c85fe559e5aabdda4ff10311c547206c",
"assets/documents/rules_and_reg/images/7.png": "b6bcee9aad817e989e819ddf70c6f011",
"assets/documents/rules_and_reg/images/11.png": "15a5ca910074a2c7897d14176231369d",
"assets/documents/rules_and_reg/images/9.jpg": "a53408a27aaf5664817b3077671b7018",
"assets/documents/rules_and_reg/images/12.png": "0b86dc724efc67518d505d0134587d8f",
"assets/documents/rules_and_reg/images/3.png": "c5576b873d472f5c38e0e923a81ff9c4",
"assets/documents/rules_and_reg/images/10.jpg": "00b6ad83425b03d6d884192b934c3f93",
"assets/documents/rules_and_reg/images/5.png": "ba0863b4f1e25dae710682150f2ad9e1",
"assets/documents/rules_and_reg/images/5.jpg": "a4627c88a26e2bd95c290059640a483a",
"assets/documents/rules_and_reg/images/14.png": "6ee52be1e1c5509675526df4d0caf366",
"assets/documents/rules_and_reg/images/15.png": "cbeefb6fc60ccdad1c3ead01a0f51092",
"assets/documents/rules_and_reg/images/1.png": "133f8874e55a88e9107b2243fb143ef2",
"assets/documents/rules_and_reg/images/4.jpg": "58315da390638d6f9a22686f104c284e",
"assets/documents/rules_and_reg/images/6.jpg": "e348a7f57bf9caa0b64447a3a3b92de9",
"assets/documents/rules_and_reg/images/9.png": "ab9ac373929c0a5d25863ab079f21f56",
"assets/documents/rules_and_reg/images/2.jpg": "c2058891c4a70a87a95c369c8d7d0700",
"assets/documents/rules_and_reg/images/14.jpg": "80e2c6fdcc2fa6e887b8534c1f62c5df",
"assets/documents/rules_and_reg/images/7.jpg": "9f6df820f9b454bcbb216d528ef7cf5a",
"assets/documents/rules_and_reg/images/8.jpg": "2d2b655b1a61feb53c132742071de069",
"assets/documents/rules_and_reg/images/3.jpg": "4f252337bd2add7dfec4407a7ba1e3d0",
"assets/documents/rules_and_reg/images/11.jpg": "4955bd43bf429daff0b75a7efa1076c9",
"assets/cj_students_logo.jpg": "c6f91f714027c85000d7dec72a7ba7f6"};
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
