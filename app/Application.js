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
        var me = this;
        var task = new Ext.util.DelayedTask(function(){
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            me.splashscreen.next().fadeOut({
                duration:1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eopts){
                        console.log('launch');
                    }
                }
            });
        });
        task.delay(2000);
    },
    init: function(){
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Please wait! Loading Application...', 'splashscreen'
        );
        /** this code is  used for loading an image */
        // me.splashscreen.addCls('splashscreen');
        // Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        //     cls : 'x-splash-icon'
        // });
    }
});
