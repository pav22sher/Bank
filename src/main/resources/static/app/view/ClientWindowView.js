Ext.define('Bank.view.ClientWindowView', {
    extend: 'Ext.window.Window',
    alias: 'widget.client-window',
    title: 'Клиенты',
    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id',
                    value: null
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Фамилия',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'Имя',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'secondName',
                    fieldLabel: 'Отчество',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Телефон',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Почта',
                    vtype: 'email',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'passportNumber',
                    fieldLabel: 'Номер паспорта',
                    allowBlank: false
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Очистить',
            action: 'reset'
        },
        {
            text: 'Сохранить',
            action: 'save'
        },
        {
            text: 'Отмена',
            action: 'cancel'
        }
    ]
});