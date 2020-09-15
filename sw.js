/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/qyangge.github.io/404.html","3610c72d5743bc04b54c9b12c62e29bc"],["/qyangge.github.io/about/index.html","009b4dd0481c6874064722b203377fb9"],["/qyangge.github.io/archives/2020/09/index.html","c8df300ab09f3e380e4ba936dd91be48"],["/qyangge.github.io/archives/2020/index.html","b23bedf34cd6f9cf497707bad2e9ddf7"],["/qyangge.github.io/archives/index.html","c195fe10e4638cb6ad20e9ac5066747c"],["/qyangge.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/qyangge.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/qyangge.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/qyangge.github.io/bbs/index.html","19fa225d7d0def793aa3136eb7c6235f"],["/qyangge.github.io/categories/index.html","7cd70740da46d99c48822ab78d967050"],["/qyangge.github.io/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/qyangge.github.io/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/qyangge.github.io/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/qyangge.github.io/css/cur.css","c4b0e1268cf12f1729b27a1e9ed72981"],["/qyangge.github.io/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/qyangge.github.io/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/qyangge.github.io/css/index.css","bc804d4c5f2bfbe12a8e2f44af738197"],["/qyangge.github.io/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/qyangge.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/qyangge.github.io/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/qyangge.github.io/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/qyangge.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/qyangge.github.io/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/qyangge.github.io/img/alipay.png","9db2385b3bb2d8d2aacb317d41e418ad"],["/qyangge.github.io/img/avatar.png","4c82d26fdd2a63df91d6f63c3a1458ef"],["/qyangge.github.io/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/qyangge.github.io/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/qyangge.github.io/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/qyangge.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/qyangge.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/qyangge.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/qyangge.github.io/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/qyangge.github.io/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/qyangge.github.io/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/qyangge.github.io/img/wechat.png","c47190c5f440b577fea7768a565e2778"],["/qyangge.github.io/index.html","3085323532a4bf08afbe8ec991e6a321"],["/qyangge.github.io/js/VolantisTags.js","71bf78bf78a07a149a583b7998c87e9d"],["/qyangge.github.io/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/qyangge.github.io/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/qyangge.github.io/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/qyangge.github.io/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/qyangge.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/qyangge.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/qyangge.github.io/js/third-party/calendar.js","dcc917fb2a7e1671ef630845456985df"],["/qyangge.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/qyangge.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/qyangge.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/qyangge.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/qyangge.github.io/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/qyangge.github.io/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/qyangge.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/qyangge.github.io/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/qyangge.github.io/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/qyangge.github.io/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/qyangge.github.io/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/qyangge.github.io/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/qyangge.github.io/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/qyangge.github.io/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/qyangge.github.io/link/index.html","4d5bf1b600cbbc87df15117f7502e1e9"],["/qyangge.github.io/music/index.html","5b07b4e611518f39939cbeb33a28c963"],["/qyangge.github.io/photo/index.html","5be4f566088f1d6416c6772de6e42b7b"],["/qyangge.github.io/shuoshuo/index.html","fdb5bc83c033a456d731651d22a25876"],["/qyangge.github.io/sw-register.js","c61c63650922afb697ad070ee4373119"],["/qyangge.github.io/tags/index.html","5c31fdc58318d9489ed4563a2fa4a762"],["/qyangge.github.io/video/index.html","16fe8271008330aac59fea5cdf19110f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
