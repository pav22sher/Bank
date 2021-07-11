Ext.define('Bank.store.CreditStore', {
    extend: 'Ext.data.Store',
    model: 'Bank.model.Credit',
    storeId: 'CreditStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/credit',
        reader: {
            type: 'json'
        }
    }
});