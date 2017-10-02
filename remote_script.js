
define(['jquery', 'lib/components/base/modal'], function ($, Modal) {

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
                'http://my.sdk.api.com',
                {},
                function (msg) {
                    //Set elements to the required format and resolve
                    resolve(msg);
                },
                'json'
            );
        }), this);
        }
    
    return remote_script;
});
