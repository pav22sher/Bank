Ext.define('Bank.controller.ClientController', {
    extend: 'Ext.app.Controller',
    models: ['Client'],
    stores: ['ClientStore'],
    views: ['ClientView'],
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
        console.log('создать...');
    },
    editClick: function(btn) {
        console.log('редактировать...');
    },
    deleteClick: function(btn) {
        let grid = btn.up('grid');
        let record = grid.getSelectionModel().getSelection()[0];
        if(record){
            Ext.Ajax.request({
                url: '/client/'+record.get('id'),
                method: 'delete',
                success: function(){
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