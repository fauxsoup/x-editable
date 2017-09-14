/**
* Editable Popover3 (for Bootstrap 3)
* ---------------------
* requires bootstrap-popover.js
*/
(function ($) {
    "use strict";

    //extend methods
    $.extend($.fn.editableContainer.Popup.prototype, {
        containerName: 'popover',
        containerDataName: 'bs.popover',
        innerCss: '.popover-body',
        defaults: $.fn.popover.Constructor.DEFAULTS,

        initContainer: function(){
            $.extend(this.containerOptions, {
                trigger: 'manual',
                selector: false,
                content: ' ',
                template: this.defaults.template
            });

            //as template property is used in inputs, hide it from popover
            var t;
            if(this.$element.data('template')) {
               t = this.$element.data('template');
               this.$element.removeData('template');
            }

            this.call(this.containerOptions);

            if(t) {
               //restore data('template')
               this.$element.data('template', t);
            }
        },

        /* show */
        innerShow: function () {
            this.call('show');
        },

        /* hide */
        innerHide: function () {
            this.call('hide');
        },

        /* destroy */
        innerDestroy: function() {
            this.call('destroy');
        },

        setContainerOption: function(key, value) {
            this.container().options[key] = value;
        },

        /**
        * move popover to new position. This function mainly copied from bootstrap-popover.
        */
        /*jshint laxcomma: true, eqeqeq: false*/
        setPosition: function () {
            /*(function() {
                var $tip = $(this.tip);

                var placement = this.config.placement;

                var autoToken = /\s?auto?\s?/i;
                var autoPlace = autoToken.test(placement);
                if (autoPlace) {
                    placement = placement.replace(autoToken, '') || 'top';
                }


                var pos = $tip.offset();
                var actualWidth = this._tether.lastSize.width;
                var actualHeight = this._tether.lastSize.height;

                if (autoPlace) {
                    var $parent = this.$element.parent();

                    var orgPlacement = placement;
                    var docScroll    = document.documentElement.scrollTop || document.body.scrollTop;
                    var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth();
                    var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight();
                    var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left;

                    placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                        placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                        placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                        placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                        placement;

                    $tip
                        .removeClass(orgPlacement)
                        .addClass(placement);
                }


                var calculatedOffset = this.config.offset;
                this._tether.position();
            }).call(this.container());
                */
            /*jshint laxcomma: false, eqeqeq: true*/
        }
    });

}(window.jQuery));
