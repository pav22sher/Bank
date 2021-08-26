Ext.define('Bank.view.CreditWindowView', {
    extend: 'Ext.window.Window',
    alias: 'widget.credit-window',
    title: 'Кредит',
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
                    xtype: 'numberfield',
                    name: 'limit',
                    fieldLabel: 'Лимит',
                    allowBlank: false,
                    minValue: 0
                },
                {
                    xtype: 'numberfield',
                    name: 'rate',
                    fieldLabel: 'Ставка',
                    allowBlank: false,
                    minValue: 0
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
