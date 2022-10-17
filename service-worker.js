/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8f7cf8f8b5279695a93a261641a59b95"
  },
  {
    "url": "agenda.svg",
    "revision": "1cdb3ee54460e1b37b1a23fae0ffdb49"
  },
  {
    "url": "ajv_logo.png",
    "revision": "0eea34da468eeeeacb1203d940e9956d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "ef32096f0356bcc24fbb05923de934a8"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "3a696e8f3f93851050d8cf718dcbab79"
  },
  {
    "url": "apollo-graphql-1.svg",
    "revision": "9086960b926427485f6647fa421c677d"
  },
  {
    "url": "apollo-graphql-compact.svg",
    "revision": "393e9a672ee8cc3d6c93dcee8aa29e33"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2bd360921c440880ed011e5ce177d7b1"
  },
  {
    "url": "assets/fonts/boxicons.afbad0fa.eot",
    "revision": "afbad0fa2cbbb785e034ae3e3bb328ff"
  },
  {
    "url": "assets/fonts/boxicons.deea39cb.woff",
    "revision": "deea39cb9dc8b17f9d640014ca2f87af"
  },
  {
    "url": "assets/fonts/boxicons.f46ca69e.ttf",
    "revision": "f46ca69e63f9c5f080203c3f510b4110"
  },
  {
    "url": "assets/img/boxicons.ac68c5be.svg",
    "revision": "ac68c5bee58c439e4c2851555d41be8b"
  },
  {
    "url": "assets/img/client-controllers.6d7f6640.png",
    "revision": "6d7f6640fb5f9de3911e71b7634caecd"
  },
  {
    "url": "assets/img/hooks-in-sequence.c4f287f6.png",
    "revision": "c4f287f6e61aca7297cf49a55116100b"
  },
  {
    "url": "assets/img/invalid.41be58de.svg",
    "revision": "41be58deae51feff0d52b23ba55267bb"
  },
  {
    "url": "assets/img/middleware-in-sequence.b2978130.svg",
    "revision": "b2978130bdc2fbb8c92f888dcbe8bfc5"
  },
  {
    "url": "assets/img/middleware.0ddb812b.png",
    "revision": "0ddb812b6c3d3083902afed18cb4146b"
  },
  {
    "url": "assets/img/npm.68b58fb3.svg",
    "revision": "68b58fb3ec9c563fa1202fb343d3ba7e"
  },
  {
    "url": "assets/img/official.be85e546.svg",
    "revision": "be85e546a3f076756c6671ddfac0b43c"
  },
  {
    "url": "assets/img/providers.3d1881c2.png",
    "revision": "3d1881c2ed84ba491696de4958c386bf"
  },
  {
    "url": "assets/img/signin-page.e5cb5f7e.png",
    "revision": "e5cb5f7e90677a8f1f5633b737a1e740"
  },
  {
    "url": "assets/img/socketio.f76a6256.png",
    "revision": "f76a6256e475dd5e50524a65f64d87ce"
  },
  {
    "url": "assets/img/star.e7194b5b.svg",
    "revision": "e7194b5b7057b26406a5d0c9fc9707a8"
  },
  {
    "url": "assets/img/templating-engine.041778e2.png",
    "revision": "041778e2d51bbcd3b5ec1dcff0c6f955"
  },
  {
    "url": "assets/img/valid.36052327.svg",
    "revision": "360523273738006fb14d43ef3cc082ea"
  },
  {
    "url": "assets/js/10.c77a750e.js",
    "revision": "1e9d23e6aa0eeeb741e93a3603037a04"
  },
  {
    "url": "assets/js/11.1dcd2ba0.js",
    "revision": "6537b1d6c992561b8e1eeff02fd69f5a"
  },
  {
    "url": "assets/js/12.f3fde4d2.js",
    "revision": "7620532a28da6e141d9296e1fa0e5249"
  },
  {
    "url": "assets/js/13.e6fef132.js",
    "revision": "02ec0e02dc4fe26b687fae4c9a61cc88"
  },
  {
    "url": "assets/js/14.23afdba2.js",
    "revision": "c201f4e4e1189e5aecb0c03524693d1a"
  },
  {
    "url": "assets/js/15.fd618c66.js",
    "revision": "5f1b0150cf5d01f969200627e9a70cc3"
  },
  {
    "url": "assets/js/16.e2d0e567.js",
    "revision": "0b244f990d32f1af78aba4fd6bd62b16"
  },
  {
    "url": "assets/js/17.eb042110.js",
    "revision": "392f4165121b5067363e633682d9583a"
  },
  {
    "url": "assets/js/18.32f653a3.js",
    "revision": "f857984d98719a2634e495ccf10a35e5"
  },
  {
    "url": "assets/js/19.135088b7.js",
    "revision": "9f738c60e3a709db084c1908ed73851f"
  },
  {
    "url": "assets/js/20.44aadb41.js",
    "revision": "a2aa2b5a69308dbc65c2508c672ea09e"
  },
  {
    "url": "assets/js/21.42b78da4.js",
    "revision": "3e0aa35ff9fb9860a75a4a64ac793353"
  },
  {
    "url": "assets/js/22.e7763366.js",
    "revision": "4d22bdcb465e2eb1e864d83f67dcc9f3"
  },
  {
    "url": "assets/js/23.e03cb7d9.js",
    "revision": "cd67203a1be9b1b08560fcb8a7c48e7e"
  },
  {
    "url": "assets/js/24.ad26a85a.js",
    "revision": "1e9e20ca898057a946432f9f2cba204b"
  },
  {
    "url": "assets/js/25.78118e61.js",
    "revision": "4ae4d83d2053d06e38da9baa9dd5763b"
  },
  {
    "url": "assets/js/26.f76b4465.js",
    "revision": "acae42034824c58e505f2856af486936"
  },
  {
    "url": "assets/js/27.dbe76cb6.js",
    "revision": "cb22c5655f70ea1d36588807f01c4262"
  },
  {
    "url": "assets/js/28.65d7bb4f.js",
    "revision": "8b5dd6bce51a155149fa7eccf2b2c402"
  },
  {
    "url": "assets/js/29.aa3f6d77.js",
    "revision": "9cbd090a271fe27c46c8109cf1f2ec9e"
  },
  {
    "url": "assets/js/3.fd9e0ddd.js",
    "revision": "ad6b5aef20c0837393c8b0275956a023"
  },
  {
    "url": "assets/js/30.072ed628.js",
    "revision": "1854e52c9e8c5335da771415b9236b75"
  },
  {
    "url": "assets/js/31.4ae425dd.js",
    "revision": "d317840a531993ce10f5838d2a44ca84"
  },
  {
    "url": "assets/js/32.ad084d68.js",
    "revision": "260cf689a790a20b5472a2f2611dcae8"
  },
  {
    "url": "assets/js/33.ad061b72.js",
    "revision": "51eef3f2cd81a205ac79189f8e48fef2"
  },
  {
    "url": "assets/js/34.f40b798f.js",
    "revision": "10f0be657a8178e039283f440529d948"
  },
  {
    "url": "assets/js/35.55455390.js",
    "revision": "2398992e4c7c8b13c8c0cda352e969ab"
  },
  {
    "url": "assets/js/36.d36ef9a3.js",
    "revision": "b019f8b81aa1df02330f000bd40a8c5f"
  },
  {
    "url": "assets/js/37.8c6a6975.js",
    "revision": "f368d0ca91601abe083d96425319fb9d"
  },
  {
    "url": "assets/js/38.0170036c.js",
    "revision": "d4e801be150ad3d3f24daabc569f1be3"
  },
  {
    "url": "assets/js/39.3ebcc195.js",
    "revision": "6fd0e3f8d6fe84e9d5704c17371c9e01"
  },
  {
    "url": "assets/js/4.b1d855eb.js",
    "revision": "408e300a7acb61b36d18a3b4db66b9fd"
  },
  {
    "url": "assets/js/40.7e6e9af7.js",
    "revision": "9b3f468516e1bab1764b04f547b788e1"
  },
  {
    "url": "assets/js/41.987aa955.js",
    "revision": "773147cd474a505b5e7c70a2c2c16ade"
  },
  {
    "url": "assets/js/42.8763688d.js",
    "revision": "21060f0d4b0d537d22a267f13a8f1e66"
  },
  {
    "url": "assets/js/43.891b45aa.js",
    "revision": "147b389dc2dabafc8301d10b4ceb2b33"
  },
  {
    "url": "assets/js/44.5aae4f8f.js",
    "revision": "75785d9515782afafa3303b7e25adf0d"
  },
  {
    "url": "assets/js/45.ea95bc81.js",
    "revision": "b19fe3423963fae3543496a2d060e5de"
  },
  {
    "url": "assets/js/46.df02f3ae.js",
    "revision": "c3a34cd5975ccd98a0bce93d0fe5baa1"
  },
  {
    "url": "assets/js/47.1493320e.js",
    "revision": "be337c15767d861ad12a189595fdd296"
  },
  {
    "url": "assets/js/48.6c1d11ce.js",
    "revision": "08728b0377c32f9a1127bdccd5f6c68f"
  },
  {
    "url": "assets/js/49.b224054c.js",
    "revision": "4bd8f761874e608bf91d4937afbbf0c5"
  },
  {
    "url": "assets/js/5.a91297fe.js",
    "revision": "98f738202815bfcc3041c21aefdb0b4e"
  },
  {
    "url": "assets/js/50.32d1d1ca.js",
    "revision": "88d14476c574be53d7f10663e02318fd"
  },
  {
    "url": "assets/js/51.a223079d.js",
    "revision": "f70f60f310cb7af43b1359fb81cf4f58"
  },
  {
    "url": "assets/js/52.922f159b.js",
    "revision": "2a034b82d57f22ac8e6c5d8baa1a0f90"
  },
  {
    "url": "assets/js/53.48b393bc.js",
    "revision": "00ba407c805df138b6ce71cb168e7c5a"
  },
  {
    "url": "assets/js/54.53482c99.js",
    "revision": "afe98e309ed5859ebb248ef352d52dc9"
  },
  {
    "url": "assets/js/55.ff988bbd.js",
    "revision": "6fa00f80a694958ee2797d389f5f297b"
  },
  {
    "url": "assets/js/56.b88966b7.js",
    "revision": "b499c4f0eb1a983d6ecc7d0c7ade66eb"
  },
  {
    "url": "assets/js/57.edc508cd.js",
    "revision": "9c4b3b629f6ea920532108db192bb1ef"
  },
  {
    "url": "assets/js/58.250daf84.js",
    "revision": "c859e27608e76e722788426255895fb1"
  },
  {
    "url": "assets/js/59.00080e7a.js",
    "revision": "e1c91e0ab87b6069fa70629f8c8ccd84"
  },
  {
    "url": "assets/js/6.bfeabb6a.js",
    "revision": "01d402fcf6fdecf11d051362474294dc"
  },
  {
    "url": "assets/js/60.b145fdbe.js",
    "revision": "ea2658ec414f02c3a12db15a03661443"
  },
  {
    "url": "assets/js/61.a2355884.js",
    "revision": "cae1cf5264236e5a98105e3f06b0d95b"
  },
  {
    "url": "assets/js/62.d318ffa0.js",
    "revision": "b2e0aa355971789184cd690912442cf5"
  },
  {
    "url": "assets/js/63.1e28ed7e.js",
    "revision": "e393784862cb4fcc83213b316f3d30c9"
  },
  {
    "url": "assets/js/64.0f66753a.js",
    "revision": "9c0b5bf08ebf96890fc28c220b313cd1"
  },
  {
    "url": "assets/js/65.0a816544.js",
    "revision": "36d34ee34692f413050635f6d99f05f4"
  },
  {
    "url": "assets/js/66.951e9343.js",
    "revision": "9e0c19017adca0da0a163d36966f523c"
  },
  {
    "url": "assets/js/67.ffe6eca4.js",
    "revision": "c6b5121dbdf5655bfe2280644b874ab6"
  },
  {
    "url": "assets/js/68.e1f38798.js",
    "revision": "0d2b38a1197f540ad62b0b4a2fd20874"
  },
  {
    "url": "assets/js/69.bc6e8836.js",
    "revision": "ba4cd0a663e91698538ad0e1ca01f960"
  },
  {
    "url": "assets/js/7.b1cce794.js",
    "revision": "e0c8fee5d9d8e03861fc3936bc879f74"
  },
  {
    "url": "assets/js/70.699d1618.js",
    "revision": "7bfb66ac663a04b461cb578fc407fa8e"
  },
  {
    "url": "assets/js/71.883af9d0.js",
    "revision": "24e697f5459ccea0fe113c4f79201d24"
  },
  {
    "url": "assets/js/72.a0502092.js",
    "revision": "4ef4e35e2b116ba0fa1e859c84f6d9ff"
  },
  {
    "url": "assets/js/73.48dae338.js",
    "revision": "9a9ab8f1218ca04ad54935f6fa74f28a"
  },
  {
    "url": "assets/js/74.2c79c2f1.js",
    "revision": "b9c6ba68cd8a6369847e8c742b9daf3e"
  },
  {
    "url": "assets/js/75.9233bf93.js",
    "revision": "e5c0d2020c03793f049db78ca906863b"
  },
  {
    "url": "assets/js/76.07169d50.js",
    "revision": "c2a16fecc38182295bd741fe1d604b10"
  },
  {
    "url": "assets/js/77.4f6e8f14.js",
    "revision": "272666e0c4ed198ddd6b6973d47a1d6f"
  },
  {
    "url": "assets/js/8.532b809d.js",
    "revision": "d95f5e6d5058d21aece6a7619c47a7bc"
  },
  {
    "url": "assets/js/9.00f9d90f.js",
    "revision": "9e0cf1d03c14601333d006b1a4d47027"
  },
  {
    "url": "assets/js/app.031cbf02.js",
    "revision": "71408790ec8a7294ce42ffb3844c5ca8"
  },
  {
    "url": "assets/js/vendors~docsearch.28354384.js",
    "revision": "572f8b14b7568d974a010bc0441d7041"
  },
  {
    "url": "aws.png",
    "revision": "0c234b5d57f00ca68dfb3b3cfc5e8f51"
  },
  {
    "url": "azure.png",
    "revision": "2ab4ccd7a23e22b54e90ddbda5f7e480"
  },
  {
    "url": "babel.svg",
    "revision": "1441142edc8c8eb20f1a38bf22fb26e8"
  },
  {
    "url": "bg.svg",
    "revision": "627266770d0e7f34fa0a178513013a52"
  },
  {
    "url": "codesanbox.svg",
    "revision": "4b5fd814b19006c77a916e84ddea5732"
  },
  {
    "url": "codesandbox.svg",
    "revision": "7aaaef45844803b13cab0883c05d09b1"
  },
  {
    "url": "configuration.html",
    "revision": "144a25e45ba88136c2e2342a2af978b0"
  },
  {
    "url": "contributing.html",
    "revision": "b2057d58e9db154b04237afd9756bf4f"
  },
  {
    "url": "docs/authentication.html",
    "revision": "ff1f9eafb9b9a74250414ce05378b8a5"
  },
  {
    "url": "docs/cache.html",
    "revision": "40e817fd7ee5efb5b57a68eecd98f2c2"
  },
  {
    "url": "docs/command.html",
    "revision": "a6104f4dbb90f1518f196d27a07bb6ff"
  },
  {
    "url": "docs/configuration.html",
    "revision": "d1f6a9cf7c83794fcf05334a4a511e5e"
  },
  {
    "url": "docs/controllers.html",
    "revision": "ffc4fa71104a19b0e5389382de2d0999"
  },
  {
    "url": "docs/converter.html",
    "revision": "f604d03504a9f93d2f91c1dd562e3306"
  },
  {
    "url": "docs/custom-endpoint-decorators.html",
    "revision": "fe0807c21636644298a9a7dd0249a2ac"
  },
  {
    "url": "docs/custom-providers.html",
    "revision": "4315341fb4958bf6ee7b7e77343f0505"
  },
  {
    "url": "docs/exceptions.html",
    "revision": "3971d0f54874a4802cd246ce9c081b4f"
  },
  {
    "url": "docs/factory.html",
    "revision": "a957dd449faeae4491f690c14ee22927"
  },
  {
    "url": "docs/hooks.html",
    "revision": "e6300a2ee8fa86c98d61bfb7fee0b466"
  },
  {
    "url": "docs/injection-scopes.html",
    "revision": "966c3cd8e530e9e65e888eb33496e3a2"
  },
  {
    "url": "docs/interceptors.html",
    "revision": "dd79c2156de3df5334915b8d1eacf3c2"
  },
  {
    "url": "docs/json-mapper.html",
    "revision": "6688d56d1920aa107850eca1dedf42a2"
  },
  {
    "url": "docs/logger.html",
    "revision": "964691ddf63532e4e4b4e2e35ba4093a"
  },
  {
    "url": "docs/middlewares.html",
    "revision": "2925f94c8cb53c954ea3cf32b9658b96"
  },
  {
    "url": "docs/migration.html",
    "revision": "36589fe9478800b8886634e896c6772e"
  },
  {
    "url": "docs/model.html",
    "revision": "2273a410835ab07c1d509c3656df438c"
  },
  {
    "url": "docs/modules.html",
    "revision": "4b55b18484e1cbdd0a8447387d863f2a"
  },
  {
    "url": "docs/not-found-page.html",
    "revision": "0423e2376d72593d1c5fc21670b9e341"
  },
  {
    "url": "docs/pipes.html",
    "revision": "d27afe03b74f30a5c3275abdaee585ee"
  },
  {
    "url": "docs/platform-api.html",
    "revision": "b62a71abc77f288cd45589ac904ad799"
  },
  {
    "url": "docs/providers-lazy-loading.html",
    "revision": "7232b2fc2ff7ee2eba5a0fcc3333b8cd"
  },
  {
    "url": "docs/providers.html",
    "revision": "56ddc517ce112f55615c9213454e2a19"
  },
  {
    "url": "docs/request-context.html",
    "revision": "6d4e451b02b4ddc27c50c776b5fb831c"
  },
  {
    "url": "docs/response-filter.html",
    "revision": "913b55bead30b2c73e9361516441e688"
  },
  {
    "url": "docs/serve-files.html",
    "revision": "e78b5b6e086a41594a4131955a261269"
  },
  {
    "url": "docs/services.html",
    "revision": "c9b396a8d6557c0857b48ac36eae65c0"
  },
  {
    "url": "docs/templating.html",
    "revision": "82bf788a98dc67c99293c2ad79454651"
  },
  {
    "url": "docs/testing.html",
    "revision": "b1c4db0723d13e260d81b31c9fe35fd2"
  },
  {
    "url": "docs/throw-http-exceptions.html",
    "revision": "52b6b216f027f7da378663ebefb26d8f"
  },
  {
    "url": "docs/upload-files.html",
    "revision": "81f0b287d6d45e85d585cc1d4eec0340"
  },
  {
    "url": "docs/validation.html",
    "revision": "226697f300ed3864ac89d81c2b024fa3"
  },
  {
    "url": "elastic-logstash.svg",
    "revision": "39e646a7f5e6fc7cf9e57502a11e77b1"
  },
  {
    "url": "express.png",
    "revision": "177bb6f67c4d179bc2145b206f751fd7"
  },
  {
    "url": "expressjs.svg",
    "revision": "91157328ea3140cff26e66386d673998"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4cf47eff0c0d0d7c1a1eca0593bd4508"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "67207fa4b833919cd8e16af9d1e62733"
  },
  {
    "url": "getting-started/cli-selected-features.png",
    "revision": "4606aca078eaa020e89aa7b204ff51db"
  },
  {
    "url": "getting-started/create-your-first-controller.html",
    "revision": "d00d19786e42b62a1755feb9dca0a15a"
  },
  {
    "url": "getting-started/index.html",
    "revision": "62779b941c5e2efc25b53d9adb35e0e6"
  },
  {
    "url": "getting-started/migrate-from-express.html",
    "revision": "6e1dab3f7390deb877d2a139e50e85e3"
  },
  {
    "url": "getting-started/migration-from-v6.html",
    "revision": "2c11df7d196c197ef58e23432309ee84"
  },
  {
    "url": "getting-started/migration-workflow.png",
    "revision": "f5b2334a39cac925d999570f210446a9"
  },
  {
    "url": "getting-started/server-start.png",
    "revision": "6e8f62a51aec9106afd4c316fb496e3e"
  },
  {
    "url": "getting-started/start-from-scratch.html",
    "revision": "eecd4f1fef49833016f6ad1353b7402b"
  },
  {
    "url": "getting-started/start-with-cli.html",
    "revision": "8aadd645dc7415a35505206f3943e342"
  },
  {
    "url": "graphql.svg",
    "revision": "6270a2d4757a839d4653c02f3db32e2f"
  },
  {
    "url": "hero-bg.svg",
    "revision": "86a81d807a0434005e193f16ecab9298"
  },
  {
    "url": "index.html",
    "revision": "47876d9a0909b7f519464d5952036302"
  },
  {
    "url": "ioredis.svg",
    "revision": "0460cb8db3e30ae96d00f9d4f82dd029"
  },
  {
    "url": "jest.svg",
    "revision": "131690707f4bef04f0fda37cf3ec6ef5"
  },
  {
    "url": "keycloak_icon.svg",
    "revision": "551d4a112f4544564b7b5d0ad652b5c2"
  },
  {
    "url": "keycloak.svg",
    "revision": "f50bd48e8aaf5f7f9d4578c0054e5160"
  },
  {
    "url": "koa.svg",
    "revision": "62af385028c883ad8d31da5aae232ac7"
  },
  {
    "url": "license.html",
    "revision": "3ef977a053648c758d32b854a720ea24"
  },
  {
    "url": "logentries.svg",
    "revision": "c2b01b56058d4d8642d6bc1ac2d445ac"
  },
  {
    "url": "loggly.svg",
    "revision": "e714a8ff3baf7e366246769e6b727b3e"
  },
  {
    "url": "meetup.png",
    "revision": "4a524099d42afcea50615302d9877c6b"
  },
  {
    "url": "mochajs.svg",
    "revision": "0493ae31c60109eadf99e902b2711bf7"
  },
  {
    "url": "mongoose.png",
    "revision": "baad9b475e92ad28a84e1c40a38fd551"
  },
  {
    "url": "nexus.png",
    "revision": "37d830678140b080ad13a1e997b0c0c5"
  },
  {
    "url": "our-team.png",
    "revision": "18ee30a2e0dd427260def769f7961225"
  },
  {
    "url": "package.svg",
    "revision": "2b5870d739dfe062a4e4ebb8061e102e"
  },
  {
    "url": "partners/artips.png",
    "revision": "60e537b48744da2822063020756a95da"
  },
  {
    "url": "partners/schnell.svg",
    "revision": "da6070c91af67360f90bb1f004e0e461"
  },
  {
    "url": "passportjs.png",
    "revision": "3c4e380e6c0da1da329b6d780f543125"
  },
  {
    "url": "prisma-2.png",
    "revision": "722446ffb492c2e357a12c78f07ff0bc"
  },
  {
    "url": "prisma-2.svg",
    "revision": "ece734638af321cb392e377d43a632e3"
  },
  {
    "url": "prisma-3.svg",
    "revision": "973b701601ce879e4880a88d218a7248"
  },
  {
    "url": "rabbitmq.svg",
    "revision": "0e43817b743528cfac9f67ad36fb0b35"
  },
  {
    "url": "rapid7.svg",
    "revision": "268047f0fbe17dac944e5648544d8134"
  },
  {
    "url": "react.png",
    "revision": "1e9d10a77c464d818e7c6cd3c5a3f259"
  },
  {
    "url": "screens/opencollective-tiers.png",
    "revision": "55d24c1bd8b74a097c7e2f67619cd17b"
  },
  {
    "url": "serverless.png",
    "revision": "52572b708bd3c2e46a221e157e9debdb"
  },
  {
    "url": "serverless.svg",
    "revision": "832bb3164714db34fc2480a09ed8b0f6"
  },
  {
    "url": "slack.svg",
    "revision": "4db20049c6e466d3d4b34bbc7b6edc3e"
  },
  {
    "url": "socket-io.png",
    "revision": "4cb9ecf17526b09e164702939c0018d0"
  },
  {
    "url": "socketio.png",
    "revision": "fba517c4c075d458b826f2bac55c41e8"
  },
  {
    "url": "socketio.svg",
    "revision": "5dc4ade3acf6b3836ab45becc3d07fef"
  },
  {
    "url": "sponsors.svg",
    "revision": "3cd1255c162104e46a0f046a301554b6"
  },
  {
    "url": "stripe.svg",
    "revision": "2d7f562527f8630a7f0eb4a9fbd71324"
  },
  {
    "url": "support.html",
    "revision": "d7c8c5403434d872e495e7a6fe06bdd4"
  },
  {
    "url": "swagger.svg",
    "revision": "ee5300f60d0ba789478ec58a5349d10d"
  },
  {
    "url": "team.html",
    "revision": "9a167f0ed3e473ac2ae241a21f7016c0"
  },
  {
    "url": "tsed-og.png",
    "revision": "04d5349862d2a9c8325ab2c330aa9c86"
  },
  {
    "url": "tsed.png",
    "revision": "bcd670cd3906e592683e60465feab493"
  },
  {
    "url": "tutorials/agenda.html",
    "revision": "bc0286d06a0ecae9e0d8ad4e384a8faa"
  },
  {
    "url": "tutorials/ajv.html",
    "revision": "b8678e8d367a79c9413006bea10a552b"
  },
  {
    "url": "tutorials/aws.html",
    "revision": "1ce6bf88fe56fad8a5203651f9980147"
  },
  {
    "url": "tutorials/graphql.html",
    "revision": "21f20a9c6e92aa64f36cdd21b974ed59"
  },
  {
    "url": "tutorials/index.html",
    "revision": "130e44e758cf385e5ddffae1f78235fb"
  },
  {
    "url": "tutorials/ioredis.html",
    "revision": "51f757cd1d0294379b883a72511a58f4"
  },
  {
    "url": "tutorials/keycloak.html",
    "revision": "05ee6729e44954b73934a63d6926f65c"
  },
  {
    "url": "tutorials/mikroorm.html",
    "revision": "e4b5ee9689afe205e1f5ed3099a7e8c9"
  },
  {
    "url": "tutorials/mongoose.html",
    "revision": "29d227305c010d13866a2c933918a912"
  },
  {
    "url": "tutorials/multer.html",
    "revision": "c4eb98be5664cb21db84b41d530985d8"
  },
  {
    "url": "tutorials/objection.html",
    "revision": "e6d1b5611602a5f03936fd5706887b86"
  },
  {
    "url": "tutorials/oidc.html",
    "revision": "0489adc77d4c2f3282d92d03c0a56b35"
  },
  {
    "url": "tutorials/passport.html",
    "revision": "27fe1276b4457802bb19ad97d878e1d1"
  },
  {
    "url": "tutorials/prisma-client.html",
    "revision": "821974d8d56da0b1cceea03c94f8e8a1"
  },
  {
    "url": "tutorials/prisma.html",
    "revision": "152322b3fdfa52d2c5d16b434399f03a"
  },
  {
    "url": "tutorials/seq.html",
    "revision": "177582c9c32d5ac15fde62b2ce4f6489"
  },
  {
    "url": "tutorials/serve-static-files.html",
    "revision": "218cc839079aeeac0391b26ebbff3b38"
  },
  {
    "url": "tutorials/serverless.html",
    "revision": "ce8198cf0d98cda7eee8d742d2715ffc"
  },
  {
    "url": "tutorials/session.html",
    "revision": "aeb3e85fa31309cb239df967cef57820"
  },
  {
    "url": "tutorials/socket-io.html",
    "revision": "afee66f44b6ce09082ddc5c2ac2a72db"
  },
  {
    "url": "tutorials/stripe.html",
    "revision": "47aa0dafa70086ef51246f4851a80977"
  },
  {
    "url": "tutorials/swagger.html",
    "revision": "fc5083a1cef0a678fec50b77a13403ff"
  },
  {
    "url": "tutorials/templating.html",
    "revision": "4fdc4f9daaae709410e3ff20a7988203"
  },
  {
    "url": "tutorials/terminus.html",
    "revision": "ef333864d65792da1c65da70cc60ca9e"
  },
  {
    "url": "tutorials/typeorm.html",
    "revision": "9f76146dbd98bd1805ea8a11135ad310"
  },
  {
    "url": "typegraphql.png",
    "revision": "bec26ca21b76b18a76253d8df2ca1db3"
  },
  {
    "url": "typeorm.png",
    "revision": "c3f8c53e67ffb9100ddc47f14adb5b10"
  },
  {
    "url": "typescript.png",
    "revision": "dcb5077d586b4dc51b40a03d760c18af"
  },
  {
    "url": "vuejs.png",
    "revision": "1906510af222740d24066f8f02ec8909"
  },
  {
    "url": "warehouse/index.html",
    "revision": "1e5f8f71ef2320d8da00941818259aba"
  },
  {
    "url": "webpack.svg",
    "revision": "9cf70b1acb9c5a67d656085ec29fbf3f"
  },
  {
    "url": "zenika.png",
    "revision": "f7aa5b93b25d17094b972ee05c366825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
