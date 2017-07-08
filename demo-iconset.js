(function() {

  'use strict';

  Polymer({

    is: 'demo-iconset',

    behaviors: [
      Polymer.AppLocalizeBehavior
    ],

    properties: {
      /**
       * Language to be used by the component.
       */
      language: {
        value: 'en'
      },

      /**
       * Translation keys.
       */
      resources: {
        value: function() {
          return {
            'es': {
              'icons': 'iconos',
              'Search icon': 'Buscar icono'
            }
          };
        }
      },

      /**
       * Name of the iconset to be shown.
       */
      iconset: {
        type: String
      },

      /**
       * Size for the icons.
       */
      iconSize: {
        type: Number,
        value: 32
      },

      /**
       * Show the total of icons.
       */
      showTotal: {
        type: Boolean,
        value: false
      },

      /**
       * List of icons.
       */
      icons: {
        type: Array,
        readOnly: true,
        notify: true,
        computed: '_computeIcons(iconset)'
      },

      _iconStyle: {
        type: String,
        computed: '_computeIconStyle(iconSize)'
      }
    },

    _computeIcons: function(iconset) {
      return this.$.meta.byKey(iconset).getIconNames();
    },

    _computeIconStyle: function(iconSize) {
      return `width: ${iconSize}px; height: ${iconSize}px;`;
    },

    _select: function(e) {
      e.target.select();
    },

    _filter: function(value) {
      return function(item) {
        if (!value) {
          return true;
        }

        return item.split(':')[1].indexOf(value) > -1;
      };
    }
  });

}());
