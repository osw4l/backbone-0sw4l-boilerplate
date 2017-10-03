var app = app || {};

app.mainView = Backbone.View.extend({
    el: '#app',

    events: {

    },

    initialize: function () {
        //this.disableRightClick();
    },

    disableRightClick: function () {
        $("body").on("contextmenu", function(e){
            return false;
        });
    }

});
