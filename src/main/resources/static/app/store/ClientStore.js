Ext.define('Bank.store.ClientStore', {
    extend: 'Ext.data.Store',
    model: 'Bank.model.Client',
    storeId: 'ClientStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/client',
        reader: {
            type: 'json'
        }
    }
});