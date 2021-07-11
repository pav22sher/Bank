Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Bank',
    appFolder: 'app',
    controllers: [
        'ClientController',
        'CreditController',
        'CreditOfferController'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'tabpanel',
                title : 'БанкА ХАХА',
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