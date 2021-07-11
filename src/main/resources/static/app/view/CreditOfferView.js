Ext.define('Bank.view.CreditOfferView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.credit-offer',
    title: 'Кредитные предложения',
    store: 'CreditOfferStore',
    allowDeselect: true,
    tbar: [
        '->',
        {
            text: 'Создать',
            action: 'create'
        },
        {
            text: 'Редактировать',
            action: 'edit'
        },
        {
            text: 'Удалить',
            action: 'delete'
        }
    ],
    columns: [
        {
            header: 'Айди',
            dataIndex: 'id',
            flex: 1
        },
        {
            header: 'Клиент',
            dataIndex: 'client',
            flex: 1
        },
        {
            header: 'Кредит',
            dataIndex: 'credit',
            flex: 1
        },
        {
            header: 'Сумма',
            dataIndex: 'sum',
            flex: 1
        }
    ]
});