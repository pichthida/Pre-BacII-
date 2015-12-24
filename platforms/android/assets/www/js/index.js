var URL="http://bacii.camngo.website/";
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
        bacIIModel.fetchSubject();
    }
    
};

app.initialize();