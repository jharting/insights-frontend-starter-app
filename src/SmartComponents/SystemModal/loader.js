import SystemModal from './SystemModal';
import React from 'react';
import ReactDOM from 'react-dom';

const ID = 'system-modal-root';

console.log('system modal loading');

let instance = null;

function init () {
    if (!instance) {
        const div = document.createElement('div');
        div.id = ID;
        document.body.append(div);

        const link = document.createElement('link');
        link.href = './static/chrome/SystemModal.css';
        link.rel = 'stylesheet';
        document.head.append(link);

        instance = ReactDOM.render(<SystemModal/>, div);
    }

    return instance;
}

window.systemModal = text => {
    const instance = init();
    instance.open(text);
};
