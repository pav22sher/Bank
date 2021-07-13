Ext.define('Bank.model.Client', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'lastName',
        'firstName',
        'secondName',
        'phone',
        'email',
        'passportNumber'
    ]
});