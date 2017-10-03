
define(['jquery', 'lib/components/base/modal', 'underscore'], function ($, Modal, _) {

    var remote_script = {};

    remote_script.contacts_selected = function (self) {
        console.log('contacts_selected');
        console.log(self);
        console.log(this);
        console.log(self.list_selected().selected);
    };

    remote_script.render = function (self) {
        console.log('render');
        return true;
    };

    remote_script.bind_actions = function (self) {
        console.log('bind');
        return true;
    };

    remote_script.settings = function (self) {
        console.log('settings');
        return true;
    };

    remote_script.init = function (self) {
        console.log('init');
        return true;
    };

    remote_script.onSave = function (self) {
        console.log('onSave');
        return true;
    };

    remote_script.loadPreloadedData = function (self) {
        console.log('loadPreloadedData');

        return new Promise(_.bind(function (resolve, reject) {
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
    };

    remote_script.loadElements = function (self) {
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
    };

    remote_script.linkCard = function (self) {
        console.log('linkCard');
        return new Promise(_.bind(function (resolve, reject) {
            self.crm_post(
                'https://test1-yodnorobov.codeanyapp.com/sdk_back/link.php',
                links,
                function () {},
                'json'
            );

            resolve();
        }), this);
    };

    remote_script.searchDataInCard = function (query, type, id) {
        return new Promise(_.bind(function (resolve, reject) {
            this.crm_post(
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
    };

    return remote_script;
});
