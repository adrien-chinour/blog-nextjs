(function () {
    const webSdkScript = document.createElement("script");
    webSdkScript.src = "https://unpkg.com/@grafana/faro-web-sdk@1.18.2/dist/bundle/faro-web-sdk.iife.js";
    webSdkScript.onload = () => {
        window.GrafanaFaroWebSdk.initializeFaro({
            url: "https://faro-collector-prod-eu-west-0.grafana.net/collect/9689c3ba5a20d52b36dec6a5da24f8eb",
            app: {name: "udfn.fr", version: "1.0.0", environment: "production"},
        });
    };
    webSdkScript.async = true;
    webSdkScript.fetchpriority = "low"
    document.head.appendChild(webSdkScript);
})();
