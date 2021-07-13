Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Bank',
    appFolder: 'app',
    controllers: [
        'ClientController',
        'CreditController',
        'CreditOfferController'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'panel',
                title: 'Банк',
                layout: 'accordion',
                items: [
                    {
                        xtype: 'client'
                    },
                    {
                        xtype: 'credit'
                    },
                    {
                        xtype: 'credit-offer'
                    }
                ]
            }
        });
    }
});