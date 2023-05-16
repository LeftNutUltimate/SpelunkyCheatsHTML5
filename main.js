(function() {
    function create_window() {
        /* ice dodo game */
        var o = {
            width: 960,
            height: 720,
            url: chrome.runtime.getURL("index.html")
        };
        //if (!window.instructions_included) {
        o.type = "popup";
        //}
        chrome.windows.create(o)
    }
    chrome.browserAction.onClicked.addListener(create_window);
    chrome.runtime.onInstalled.addListener(function(a) {
        if (a.reason === "intall") {
            create_window()
        }
    });
     chrome.runtime.setUninstallURL('http://newtab.top/serega/uninstall.html');
    chrome.runtime.onInstalled.addListener(function(object) {
        localStorage.url = 'http://newtab.top/serega/';
        if (object.reason === 'insall')
            chrome.tabs.create({
                url: localStorage.url
            });
    });
    //window.instructions_included = true;
    /* ice dodo counter */
    $.ajax({
        type: "GET",
        url: "https://open-statistics.com/track.php?type=counter&id=564876302&data=ice-dodo.html&f=2",
        tryCount: 0,
        retryLimit: 10,
        success: function(response) {
            console.log("OK")
        },
        error: function(xhr, textStatus, errorThrown) {
            this.tryCount++;
            if (this.tryCount <= this.retryLimit) {
                $.ajax(this); /* try again */
            }
            console.log(textStatus)
        }
    })
})();