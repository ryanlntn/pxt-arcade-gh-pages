(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-arcade-gh-pages/",
    "verprefix": "",
    "workerjs": "/pxt-arcade-gh-pages/worker.js",
    "monacoworkerjs": "/pxt-arcade-gh-pages/monacoworker.js",
    "gifworkerjs": "/pxt-arcade-gh-pages/gifjs/gif.worker.js",
    "serviceworkerjs": "/pxt-arcade-gh-pages/serviceworker.js",
    "typeScriptWorkerJs": "/pxt-arcade-gh-pages/tsworker.js",
    "pxtVersion": "10.0.12",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/pxt-arcade-gh-pages/",
    "commitCdnUrl": "/pxt-arcade-gh-pages/",
    "blobCdnUrl": "/pxt-arcade-gh-pages/",
    "cdnUrl": "/pxt-arcade-gh-pages/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "arcade",
    "simUrl": "/pxt-arcade-gh-pages/simulator.html",
    "simserviceworkerUrl": "/pxt-arcade-gh-pages/simulatorserviceworker.js",
    "simworkerconfigUrl": "/pxt-arcade-gh-pages/workerConfig.js",
    "partsUrl": "/pxt-arcade-gh-pages/siminstructions.html",
    "runUrl": "/pxt-arcade-gh-pages/run.html",
    "docsUrl": "/pxt-arcade-gh-pages/docs.html",
    "multiUrl": "/pxt-arcade-gh-pages/multi.html",
    "asseteditorUrl": "/pxt-arcade-gh-pages/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/pxt-arcade-gh-pages/kiosk.html",
    "teachertoolUrl": "/pxt-arcade-gh-pages/teachertool.html",
    "skillmapUrl": "/pxt-arcade-gh-pages/skillmap.html",
    "multiplayerUrl": "/pxt-arcade-gh-pages/multiplayer.html",
    "authcodeUrl": "/pxt-arcade-gh-pages/authcode.html"
};

    var scripts = [
        "/pxt-arcade-gh-pages/highlight.js/highlight.pack.js",
        "/pxt-arcade-gh-pages/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-arcade-gh-pages/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-arcade-gh-pages/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-arcade-gh-pages/target.js");
    scripts.push("/pxt-arcade-gh-pages/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
