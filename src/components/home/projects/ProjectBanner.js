const m = require('mithril');
const Component = require('../../core/Component');

class ProjectBanner extends Component {

    view(vnode) {
        return m('.project', {
            style: "background-image: url(" + vnode.attrs.bannerImage + ")",
            onclick: function() {
                m.route.set("/" + vnode.attrs.id)
            }
        }, [
            m('.overlay', [
                m('.text-container', [
                    m('span', [
                        m('h5', vnode.attrs.title),
                        m('i.fa.fa-info-circle')
                    ]),
                    m('p', vnode.attrs.brief)
                ]),
            ])
        ])
    }
}

module.exports = ProjectBanner;
