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
        console.log('удалить...')
    }
});