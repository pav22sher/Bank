Ext.define('Bank.model.CreditOffer', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'clientId',
        'client',
        'creditId',
        'credit',
        'sum'
    ]
});
