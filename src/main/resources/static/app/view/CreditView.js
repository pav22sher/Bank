Ext.define('Bank.view.CreditView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.credit',
    title: 'Кредиты',
    store: 'CreditStore',
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
            header: 'Лимит',
            dataIndex: 'limit',
            flex: 1
        },
        {
            header: 'Ставка',
            dataIndex: 'rate',
            flex: 1
        }
    ]
});