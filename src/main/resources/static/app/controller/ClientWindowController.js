Ext.define('Bank.controller.ClientWindowController', {
    extend: 'Ext.app.Controller',
    views: ['ClientWindowView'],
    init: function() {
        this.control({
            'client-window button[action=reset]': {
                click: this.resetClick
            },
            'client-window button[action=save]': {
                click: this.saveClick
            },
            'client-window button[action=cancel]': {
                click: this.cancelClick
            }
        });
    },
    resetClick: function(btn) {
        let window = btn.up('window');
        window.down('form').getForm().reset();
    },
    saveClick: function(btn) {
        console.log('сохранить...');
    },
    cancelClick: function(btn) {
        btn.up('window').close();
    }
});