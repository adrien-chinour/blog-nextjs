const faroInitialization = () => {
    window.GrafanaFaroWebSdk.initializeFaro({
        url: "https://faro-collector-prod-eu-west-0.grafana.net/collect/9689c3ba5a20d52b36dec6a5da24f8eb",
        app: {name: "udfn.fr", version: "1.0.0", environment: "production"},
    });
}

requestIdleCallback(() => {
    const webSdkScript = document.createElement("script");
    webSdkScript.src = "/_scripts/faro-sdk.js";
    webSdkScript.onload = faroInitialization;
    webSdkScript.async = true;

    document.body.appendChild(webSdkScript);
})
