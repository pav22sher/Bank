Ext.define('Bank.controller.CreditOfferController', {
    extend: 'Ext.app.Controller',
    models: ['CreditOffer'],
    stores: ['CreditOfferStore'],
    views: ['CreditOfferView'],
    init: function() {
        this.control({
            'credit-offer button[action=create]': {
                click: this.createClick
            },
            'credit-offer button[action=edit]': {
                click: this.editClick
            },
            'credit-offer button[action=delete]': {
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
                url: '/credit-offer/'+record.get('id'),
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