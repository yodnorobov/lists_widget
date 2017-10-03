
define(['jquery', 'lib/components/base/modal', 'underscore'], function ($, Modal, _) {

    var CustomWidget = function () {
        var self = this, // For access the object from methods
            system = self.system(), // This method returns an object with system variable
            langs = self.langs;  // Localization data from file in folder i18n

        this.callbacks = {
            settings: function () {
            },
            init: function () {
                console.log('init');
                return true;
            },
            bind_actions: function () {
                console.log('bind');
                return true;
            },
            render: function () {
                console.log('render');
                return true;
            },
            destroy: function () {
                console.log('destroy');
            },
            contacts: {
                selected: function () {
                    console.log('contacts_selected');
                }
            },
            leads: {
                selected: function () {
                }
            },
            onSave: function () {
            },
            loadElements: function () {
                console.log('loadElements');
                console.log(self);
                console.log(this);
                return new Promise(_.bind(function (resolve, reject) {

                    console.log(this);
                    console.log(self);

                    self.crm_post(
                        'https://test1-yodnorobov.codeanyapp.com/sdk_back/?products=true&type='+this.type+'&entity_id='+this.id,
                        {},
                        function (msg) {
                            resolve(msg);
                        },
                        'json'
                    );
                }), this);
            },
            loadPreloadedData: function () {
                console.log('loadPreloadedData');

                return new Promise(_.bind(function (resolve, reject) {

                    console.log(self);
                    console.log(this);

                    //Make a request to the remote server
                    self.crm_post(
                        'https://test1-yodnorobov.codeanyapp.com',
                        {},
                        function (msg) {
                            //Set elements to the required format and resolve
                            resolve(msg);
                        },
                        'json'
                    );
                }), this);
            },
            linkCard: function () {
                console.log('linkCard');
                console.log(self);
                console.log(this);
                return new Promise(_.bind(function (resolve, reject) {
                    self.crm_post(
                        'https://test1-yodnorobov.codeanyapp.com/sdk_back/link.php',
                        self.links,
                        function () {},
                        'json'
                    );

                    resolve();
                }), this);
            },
            searchDataInCard: function (query, type, id) {
                return new Promise(_.bind(function (resolve, reject) {
                    self.crm_post(
                        'https://test1-yodnorobov.codeanyapp.com/sdk_back/search.php',
                        {
                            query: query,
                            type: type,
                            id: id
                        },
                        function (msg) {
                            resolve(msg);
                        },
                        'json'
                    );
                }), this);
            }
        };
        return this;
    };
    return CustomWidget;
});
