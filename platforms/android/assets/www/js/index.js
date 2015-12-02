var URL="http://192.168.1.126";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
//       AppCache.clearAll();
        bacIIModel.fetchSubject();
    }
    
};

app.initialize();