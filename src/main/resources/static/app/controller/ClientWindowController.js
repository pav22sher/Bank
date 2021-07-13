Ext.define('Bank.controller.ClientWindowController', {
    extend: 'Ext.app.Controller',
    views: ['ClientWindowView'],
    refs: [{
        ref: 'grid',
        selector: 'client',
    }],
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
        let window = btn.up('window');
        let form = window.down('form');
        let grid = this.getGrid();
        let store = grid.getStore();
        if(form.isValid()){
            let formValues = form.getForm().getValues();
            Ext.Ajax.request({
                url: '/client',
                jsonData: formValues,
                method: 'POST',
                success: function(){
                    Ext.MessageBox.show({
                        title: 'Успех',
                        msg: 'Данные успешно сохранены',
                        icon: Ext.MessageBox.INFO,
                        buttons: Ext.Msg.OK
                    });
                    window.close();
                    store.reload();
                },
                failure: function(){
                    Ext.MessageBox.show({
                        title: 'Ошибка',
                        msg: 'Ошибка при сохранении',
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            });
        }
    },
    cancelClick: function(btn) {
        btn.up('window').close();
    }
});