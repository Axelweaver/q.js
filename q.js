(function (window) {
    var library = {
        addElement: function (obj) {
            if (!obj) {
                return null;
            }

            var element = document.createElement(obj.tag);

            if (obj.attrs && obj.attrs.length > 0) {
                for (var i = 0; i < obj.attrs.length; i++) {
                    element.setAttribute(obj.attrs[i].name, obj.attrs[i].value);
                }
            }

            if (obj.children && obj.children.length > 0) {
                for (var j = 0; j < obj.children.length; j++) {
                    var childElement =
                        this.addElement(obj.children[j]);
                    element.appendChild(childElement);
                }
            }

            if (obj.html) {
                element.innerHTML = obj.html;
            }

            return element;
        },
        addBootstrapModal: function (idModal, idBody, modalTitle) {
            var modal = this.addElement({
                tag: "div",
                attrs: [
                    { name: "class", value: "modal fade" },
                    { name: "tabindex", value: "-1" },
                    { name: "role", value: "dialog" },
                    { name: "id", value: idModal }
                ],
                children: [
                    {
                        tag: "div",
                        attrs: [{ name: "class", value: "modal-dialog modal-lg" }],
                        children: [
                            {
                                tag: "div",
                                attrs: [{ name: "class", value: "modal-content" }],
                                children: [
                                    {
                                        tag: "div",
                                        attrs: [{ name: "class", value: "modal-header" }],
                                        children: [
                                            {
                                                tag: "button",
                                                attrs: [
                                                    { name: "type", value: "button" },
                                                    { name: "class", value: "close" },
                                                    { name: "data-dismiss", value: "modal" },
                                                    { name: "aria-label", value: "Close" }
                                                ],
                                                children: [
                                                    {
                                                        tag: "span",
                                                        attrs: [
                                                            {
                                                                name: "aria-hidden",
                                                                value: "true"
                                                            }
                                                        ],
                                                        html: "&times;"
                                                    }
                                                ]
                                            },
                                            {
                                                tag: "h4",
                                                attrs: [
                                                    { name: "class", value: "modal-title" }
                                                ],
                                                html: modalTitle
                                            }
                                        ]
                                    },
                                    {
                                        tag: "div",
                                        attrs: [{ name: "class", value: "modal-body" }],
                                        children: [
                                            {
                                                tag: "div",
                                                attrs: [
                                                    { name: "id", value: idBody }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            document.body.appendChild(modal);
        },
        addScriptSection: function (src) {
            if (document.querySelector("script[src='" + src + "']")) {
                return;
            }

            var scriptCont = this.addElement({
                tag: "script",
                attrs: [
                    { name: "type", value: "text/javascript" },
                    { name: "src", value: src }
                ]
            });

            var header = document.querySelector("head");

            header.appendChild(scriptCont);
        },
        addLinkSection: function (href) {
            if (document.querySelector("link[href='" + href + "']")) {
                return;
            }

            var link = this.addElement({
                tag: "link",
                attrs: [
                    { name: "href", value: href },
                    { name: "rel", value: "stylesheet" }
                ]
            });

            var header = document.querySelector("head");

            header.appendChild(link);
        }
    };

    window.q = library;
})(window);