Ext.define('Bank.store.CreditOfferStore', {
    extend: 'Ext.data.Store',
    model: 'Bank.model.CreditOffer',
    storeId: 'CreditOfferStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/credit-offer',
        reader: {
            type: 'json'
        }
    }
});