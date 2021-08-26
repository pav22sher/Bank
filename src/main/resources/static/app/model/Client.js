Ext.define('Bank.model.Client', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'fullName',
        'lastName',
        'firstName',
        'secondName',
        'phone',
        'email',
        'passportNumber'
    ]
});
