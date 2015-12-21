var URL="http://192.168.1.101";
var Subject;
var SubjectID;
var Year;
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
//        bacIIModel.fetchSubject();
        bacIIView.renderSubject();
    }
    
};

app.initialize();