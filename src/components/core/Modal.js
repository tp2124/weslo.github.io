const m = require('mithril');
const $ = require('jquery');
const Component = require('./Component');

class Modal extends Component {

    view(vnode) {
        return m('.modal-blind.anim-fade-in', { onclick: () => { this.close(); } }, [
            m('.modal', { onclick: (e) => { e.stopPropagation(); } }, [
                this.renderContent(vnode)
            ])
        ]);
    }

    oncreate(vnode) {
        $('body').addClass('noscroll');
    }

    onbeforeremove(vnode) {
        vnode.dom.classList.remove('anim-fade-in');
        vnode.dom.classList.add('anim-fade-out');
        return new Promise(function(resolve) {
            setTimeout(resolve, 200);
        });
    }

    renderContent(vnode) { }

    close() {
        $('body').removeClass('noscroll');
    }
}

module.exports = Modal;
