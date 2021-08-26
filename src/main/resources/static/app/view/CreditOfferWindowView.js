Ext.define('Bank.view.CreditOfferWindowView', {
    extend: 'Ext.window.Window',
    alias: 'widget.credit-offer-window',
    title: 'Кредитное предложение',
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
                    xtype: 'combobox',
                    valueField: 'id',
                    displayField: 'fullName',
                    store: 'ClientStore',
                    name: 'clientId',
                    fieldLabel: 'Клиент',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    valueField: 'id',
                    displayField: 'rate',
                    store: 'CreditStore',
                    name: 'creditId',
                    fieldLabel: 'Кредит',
                    allowBlank: false
                },
                {
                    xtype: 'numberfield',
                    name: 'sum',
                    fieldLabel: 'Сумма',
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
