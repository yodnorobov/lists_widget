
define(['jquery', 'lib/components/base/modal'], function ($, Modal) {

    var remote_script = {};
    
    remote_script.contacts_selected = function (self) {
        console.log('contacts_selected');
        console.log(self);
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
    
    return remote_script;
});
