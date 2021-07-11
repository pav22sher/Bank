Ext.define('Bank.controller.CreditController', {
    extend: 'Ext.app.Controller',
    models: ['Credit'],
    stores: ['CreditStore'],
    views: ['CreditView'],
    init: function() {
        this.control({
            'credit button[action=create]': {
                click: this.createClick
            },
            'credit button[action=edit]': {
                click: this.editClick
            },
            'credit button[action=delete]': {
                click: this.deleteClick
            }
        });
    },
    createClick: function() {
        console.log('создать...')
    },
    editClick: function() {
        console.log('редактировать...')
    },
    deleteClick: function() {
        let grid = btn.up('grid');
        let record = grid.getSelectionModel().getSelection()[0];
        if(record){
            Ext.Ajax.request({
                url: '/credit/'+record.get('id'),
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