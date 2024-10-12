(function () {
    const webSdkScript = document.createElement("script");
    webSdkScript.src = "https://unpkg.com/@grafana/faro-web-sdk@^1.4.0/dist/bundle/faro-web-sdk.iife.js";
    webSdkScript.onload = () => {
        window.GrafanaFaroWebSdk.initializeFaro({
            url: "https://faro-collector-prod-eu-west-0.grafana.net/collect/8f64d55ee7070b3ec03abe36e2a917df",
            app: {name: "next.udfn.fr", version: "1.0.0", environment: "production"},
        });
    };
    document.head.appendChild(webSdkScript);
})();
