Ext.define('Bank.view.ClientView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.client',
    title: 'Клиенты',
    store: 'ClientStore',
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
            header: 'Фамилия',
            dataIndex: 'lastName',
            flex: 1
        },
        {
            header: 'Имя',
            dataIndex: 'firstName',
            flex: 1
        },
        {
            header: 'Отчество',
            dataIndex: 'secondName',
            flex: 1
        },
        {
            header: 'Телефон',
            dataIndex: 'phone',
            flex: 1
        },
        {
            header: 'Почта',
            dataIndex: 'email',
            flex: 1
        },
        {
            header: 'Номер паспорта',
            dataIndex: 'passportNumber',
            flex: 1
        }
    ]
});