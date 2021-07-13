Ext.define('Bank.controller.ClientController', {
    extend: 'Ext.app.Controller',
    models: ['Client'],
    stores: ['ClientStore'],
    views: ['ClientView'],
    controllers: ['Bank.controller.ClientWindowController'],
    init: function() {
        this.control({
            'client button[action=create]': {
                click: this.createClick
            },
            'client button[action=edit]': {
                click: this.editClick
            },
            'client button[action=delete]': {
                click: this.deleteClick
            }
        });
    },
    createClick: function(btn) {
        let window = Ext.widget('client-window');
        window.show();
    },
    editClick: function(btn) {
        let grid = btn.up('grid');
        let record = grid.getSelectionModel().getSelection()[0];
        if(record){
            let window = Ext.widget('client-window');
            let form = window.down('form');
            form.getForm().loadRecord(record);
            window.show();
        } else {
            Ext.MessageBox.show({
                title: 'Ошибка',
                msg: 'Не выбрана запись для редактирования',
                icon: Ext.MessageBox.ERROR,
                buttons: Ext.Msg.OK
            });
        }
    },
    deleteClick: function(btn) {
        let grid = btn.up('grid');
        let record = grid.getSelectionModel().getSelection()[0];
        if(record){
            Ext.Ajax.request({
                url: '/client/'+record.get('id'),
                method: 'delete',
                success: function(){
                    Ext.MessageBox.show({
                        title: 'Успех',
                        msg: 'Данные успешно удалены',
                        icon: Ext.MessageBox.INFO,
                        buttons: Ext.Msg.OK
                    });
                    grid.getStore().reload();
                },
                failure: function(){
                    Ext.MessageBox.show({
                        title: 'Ошибка',
                        msg: 'Ошибка при удалении',
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            });
        } else {
            Ext.MessageBox.show({
                title: 'Ошибка',
                msg: 'Не выбрана запись для удаления',
                icon: Ext.MessageBox.ERROR,
                buttons: Ext.Msg.OK
            });
        }
    }
});