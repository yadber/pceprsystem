/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Packt.Application', {
    extend: 'Ext.app.Application',

    name: 'Packt',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
    },
    init: function(){
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Please wait! Loading Application', 'splashscreen'
        );
        /** this code is  used for loading an image */
        // me.splashscreen.addCls('splashscreen');
        // Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        //     cls : 'x-splash-icon'
        // });
    }
});
