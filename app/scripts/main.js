/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});

require(['jquery', 'views/ranges_view'], function($, RangesView){
    $(document).ready(function(){
        $(".range").each(function(){
            new RangesView({el: $(this)});
        });
    });
});