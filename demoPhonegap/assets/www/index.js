(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
     DevExpress.devices.current({ platform: "androidPhone" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,});
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });
    
})();