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
        console.log('удалить...')
    }
});