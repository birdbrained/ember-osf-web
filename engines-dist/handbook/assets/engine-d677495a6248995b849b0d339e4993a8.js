define.alias('ember-cli-addon-docs/adapters/-addon-docs', 'handbook/adapters/-addon-docs');
define.alias('ember-cli-addon-docs/adapters/class', 'handbook/adapters/class');
define.alias('ember-cli-addon-docs/adapters/component', 'handbook/adapters/component');
define.alias('ember-cli-addon-docs/adapters/module', 'handbook/adapters/module');
define.alias('ember-cli-addon-docs/adapters/project', 'handbook/adapters/project');
define("handbook/application/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "Handbook": "_Handbook_12z0g0"
  };
});
define("handbook/application/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "u5t0jdE0", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Handbook\"],[[\"from\"],[\"handbook/application/styles\"]]]]]],[9],[0,\"\\n    \"],[1,[21,\"docs-header\"],false],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/application/template.hbs" } });
});
define('handbook/breakpoints', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
});
define.alias("liquid-fire/components/-lf-get-outlet-state", "handbook/components/-lf-get-outlet-state");
define.alias('ember-cli-addon-docs/components/api/x-class/component', 'handbook/components/api/x-class');
define.alias('ember-cli-addon-docs/components/api/x-component/component', 'handbook/components/api/x-component');
define.alias('ember-cli-addon-docs/components/api/x-import-path/component', 'handbook/components/api/x-import-path');
define.alias('ember-cli-addon-docs/components/api/x-meta-panel/component', 'handbook/components/api/x-meta-panel');
define.alias('ember-cli-addon-docs/components/api/x-meta-panel/header/component', 'handbook/components/api/x-meta-panel/header');
define.alias('ember-cli-addon-docs/components/api/x-module/component', 'handbook/components/api/x-module');
define.alias('ember-cli-addon-docs/components/api/x-section/component', 'handbook/components/api/x-section');
define.alias('ember-cli-addon-docs/components/api/x-sections/component', 'handbook/components/api/x-sections');
define.alias('ember-cli-addon-docs/components/api/x-toggles/component', 'handbook/components/api/x-toggles');
define.alias('ember-basic-dropdown/components/basic-dropdown', 'handbook/components/basic-dropdown');
define.alias('ember-basic-dropdown/components/basic-dropdown/content-element', 'handbook/components/basic-dropdown/content-element');
define.alias('ember-basic-dropdown/components/basic-dropdown/content', 'handbook/components/basic-dropdown/content');
define.alias('ember-basic-dropdown/components/basic-dropdown/trigger', 'handbook/components/basic-dropdown/trigger');
define('handbook/components/bootstrap-datepicker-inline', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _bootstrapDatepickerInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepickerInline.default;
});
define('handbook/components/bootstrap-datepicker', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _bootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepicker.default;
});
define.alias('ember-bootstrap/components/bs-accordion', 'handbook/components/bs-accordion');
define.alias('ember-bootstrap/components/bs-accordion/item', 'handbook/components/bs-accordion/item');
define.alias('ember-bootstrap/components/bs-accordion/item/body', 'handbook/components/bs-accordion/item/body');
define.alias('ember-bootstrap/components/bs-accordion/item/title', 'handbook/components/bs-accordion/item/title');
define.alias('ember-bootstrap/components/bs-alert', 'handbook/components/bs-alert');
define.alias('osf-components/components/bs-alert/component', 'handbook/components/bs-alert/component');
define.alias('ember-bootstrap/components/bs-button-group', 'handbook/components/bs-button-group');
define.alias('ember-bootstrap/components/bs-button-group/button', 'handbook/components/bs-button-group/button');
define.alias('ember-bootstrap/components/bs-button', 'handbook/components/bs-button');
define.alias('ember-bootstrap/components/bs-carousel', 'handbook/components/bs-carousel');
define.alias('ember-bootstrap/components/bs-carousel/slide', 'handbook/components/bs-carousel/slide');
define.alias('ember-bootstrap/components/bs-collapse', 'handbook/components/bs-collapse');
define.alias('ember-bootstrap/components/bs-dropdown', 'handbook/components/bs-dropdown');
define.alias('ember-bootstrap/components/bs-dropdown/button', 'handbook/components/bs-dropdown/button');
define.alias('ember-bootstrap/components/bs-dropdown/menu', 'handbook/components/bs-dropdown/menu');
define.alias('ember-bootstrap/components/bs-dropdown/menu/divider', 'handbook/components/bs-dropdown/menu/divider');
define.alias('ember-bootstrap/components/bs-dropdown/menu/item', 'handbook/components/bs-dropdown/menu/item');
define.alias('ember-bootstrap/components/bs-dropdown/menu/link-to', 'handbook/components/bs-dropdown/menu/link-to');
define.alias('ember-bootstrap/components/bs-dropdown/toggle', 'handbook/components/bs-dropdown/toggle');
define.alias('ember-bootstrap/components/bs-form', 'handbook/components/bs-form');
define.alias('ember-bootstrap/components/bs-form/element', 'handbook/components/bs-form/element');
define.alias('ember-bootstrap/components/bs-form/element/control', 'handbook/components/bs-form/element/control');
define.alias('ember-bootstrap/components/bs-form/element/control/checkbox', 'handbook/components/bs-form/element/control/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/control/input', 'handbook/components/bs-form/element/control/input');
define.alias('ember-bootstrap/components/bs-form/element/control/textarea', 'handbook/components/bs-form/element/control/textarea');
define.alias('ember-bootstrap/components/bs-form/element/errors', 'handbook/components/bs-form/element/errors');
define.alias('ember-bootstrap/components/bs-form/element/feedback-icon', 'handbook/components/bs-form/element/feedback-icon');
define.alias('ember-bootstrap/components/bs-form/element/help-text', 'handbook/components/bs-form/element/help-text');
define.alias('ember-bootstrap/components/bs-form/element/label', 'handbook/components/bs-form/element/label');
define.alias('ember-bootstrap/components/bs-form/element/layout/horizontal', 'handbook/components/bs-form/element/layout/horizontal');
define.alias('ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox', 'handbook/components/bs-form/element/layout/horizontal/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/layout/inline', 'handbook/components/bs-form/element/layout/inline');
define.alias('ember-bootstrap/components/bs-form/element/layout/inline/checkbox', 'handbook/components/bs-form/element/layout/inline/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/layout/vertical', 'handbook/components/bs-form/element/layout/vertical');
define.alias('ember-bootstrap/components/bs-form/element/layout/vertical/checkbox', 'handbook/components/bs-form/element/layout/vertical/checkbox');
define.alias('ember-bootstrap/components/bs-form/group', 'handbook/components/bs-form/group');
define.alias('ember-bootstrap/components/bs-modal-simple', 'handbook/components/bs-modal-simple');
define.alias('ember-bootstrap/components/bs-modal', 'handbook/components/bs-modal');
define.alias('ember-bootstrap/components/bs-modal/body', 'handbook/components/bs-modal/body');
define.alias('ember-bootstrap/components/bs-modal/dialog', 'handbook/components/bs-modal/dialog');
define.alias('ember-bootstrap/components/bs-modal/footer', 'handbook/components/bs-modal/footer');
define.alias('ember-bootstrap/components/bs-modal/header', 'handbook/components/bs-modal/header');
define.alias('ember-bootstrap/components/bs-modal/header/close', 'handbook/components/bs-modal/header/close');
define.alias('ember-bootstrap/components/bs-modal/header/title', 'handbook/components/bs-modal/header/title');
define.alias('ember-bootstrap/components/bs-nav', 'handbook/components/bs-nav');
define.alias('ember-bootstrap/components/bs-nav/item', 'handbook/components/bs-nav/item');
define.alias('ember-bootstrap/components/bs-nav/link-to', 'handbook/components/bs-nav/link-to');
define.alias('ember-bootstrap/components/bs-navbar', 'handbook/components/bs-navbar');
define.alias('ember-bootstrap/components/bs-navbar/content', 'handbook/components/bs-navbar/content');
define.alias('ember-bootstrap/components/bs-navbar/link-to', 'handbook/components/bs-navbar/link-to');
define.alias('ember-bootstrap/components/bs-navbar/nav', 'handbook/components/bs-navbar/nav');
define.alias('ember-bootstrap/components/bs-navbar/toggle', 'handbook/components/bs-navbar/toggle');
define.alias('ember-bootstrap/components/bs-popover', 'handbook/components/bs-popover');
define.alias('ember-bootstrap/components/bs-popover/element', 'handbook/components/bs-popover/element');
define.alias('ember-bootstrap/components/bs-progress', 'handbook/components/bs-progress');
define.alias('ember-bootstrap/components/bs-progress/bar', 'handbook/components/bs-progress/bar');
define.alias('ember-bootstrap/components/bs-tab', 'handbook/components/bs-tab');
define.alias('ember-bootstrap/components/bs-tab/pane', 'handbook/components/bs-tab/pane');
define.alias('ember-bootstrap/components/bs-tooltip', 'handbook/components/bs-tooltip');
define.alias('ember-bootstrap/components/bs-tooltip/element', 'handbook/components/bs-tooltip/element');
define("handbook/components/code-snippet", ["exports", "handbook/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(function (l) {
        return l !== '';
      });
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: Ember.computed('name', function () {
      var snippet = this.get('name').split('/').reduce(function (dir, name) {
        return dir && dir[name];
      }, _snippets.default);

      return this._unindent((snippet || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define("handbook/components/code-snippet/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "p7uQXil8", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"source\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/components/code-snippet/template.hbs" } });
});
define.alias('osf-components/components/contributor-list/component', 'handbook/components/contributor-list/component');
define.alias('osf-components/components/contributor-list/contributor/component', 'handbook/components/contributor-list/contributor/component');
define.alias('osf-components/components/cookie-banner/component', 'handbook/components/cookie-banner/component');
define.alias('ember-cli-clipboard/components/copy-button', 'handbook/components/copy-button');
define.alias('osf-components/components/copyable-text/component', 'handbook/components/copyable-text/component');
define.alias('osf-components/components/dashboard-item/component', 'handbook/components/dashboard-item/component');
define.alias('osf-components/components/delete-button/component', 'handbook/components/delete-button/component');
define.alias('osf-components/components/delete-node-modal/component', 'handbook/components/delete-node-modal/component');
define.alias('ember-cli-addon-docs/components/docs-demo/component', 'handbook/components/docs-demo');
define.alias('ember-cli-addon-docs/components/docs-demo/x-example/component', 'handbook/components/docs-demo/x-example');
define.alias('ember-cli-addon-docs/components/docs-demo/x-snippet/component', 'handbook/components/docs-demo/x-snippet');
define.alias('ember-cli-addon-docs/components/docs-header/component', 'handbook/components/docs-header');
define.alias('ember-cli-addon-docs/components/docs-header/link/component', 'handbook/components/docs-header/link');
define.alias('ember-cli-addon-docs/components/docs-header/search-box/component', 'handbook/components/docs-header/search-box');
define.alias('ember-cli-addon-docs/components/docs-header/search-result/component', 'handbook/components/docs-header/search-result');
define.alias('ember-cli-addon-docs/components/docs-header/search-results/component', 'handbook/components/docs-header/search-results');
define.alias('ember-cli-addon-docs/components/docs-header/version-selector/component', 'handbook/components/docs-header/version-selector');
define.alias('ember-cli-addon-docs/components/docs-hero/component', 'handbook/components/docs-hero');
define.alias('ember-cli-addon-docs/components/docs-keyboard-shortcuts/component', 'handbook/components/docs-keyboard-shortcuts');
define.alias('ember-cli-addon-docs/components/docs-link/component', 'handbook/components/docs-link');
define.alias('ember-cli-addon-docs/components/docs-logo/component', 'handbook/components/docs-logo');
define.alias('ember-cli-addon-docs/components/docs-snippet/component', 'handbook/components/docs-snippet');
define.alias('ember-cli-addon-docs/components/docs-svg-icon/component', 'handbook/components/docs-svg-icon');
define.alias('ember-cli-addon-docs/components/docs-viewer/component', 'handbook/components/docs-viewer');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-main/component', 'handbook/components/docs-viewer/x-main');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-nav-item/component', 'handbook/components/docs-viewer/x-nav-item');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-nav-list/component', 'handbook/components/docs-viewer/x-nav-list');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-nav/component', 'handbook/components/docs-viewer/x-nav');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-page-index/component', 'handbook/components/docs-viewer/x-page-index');
define.alias('ember-cli-addon-docs/components/docs-viewer/x-section/component', 'handbook/components/docs-viewer/x-section');
define.alias('osf-components/components/draft-registration-card/component', 'handbook/components/draft-registration-card/component');
define.alias('osf-components/components/dropzone-widget/component', 'handbook/components/dropzone-widget/component');
define.alias('ember-modal-dialog/components/positioned-container', 'handbook/components/ember-modal-dialog-positioned-container');
define.alias('ember-modal-dialog/components/basic-dialog', 'handbook/components/ember-modal-dialog/-basic-dialog');
define.alias('ember-modal-dialog/components/in-place-dialog', 'handbook/components/ember-modal-dialog/-in-place-dialog');
define.alias('ember-modal-dialog/components/liquid-dialog', 'handbook/components/ember-modal-dialog/-liquid-dialog');
define.alias('ember-modal-dialog/components/liquid-tether-dialog', 'handbook/components/ember-modal-dialog/-liquid-tether-dialog');
define.alias('ember-modal-dialog/components/tether-dialog', 'handbook/components/ember-modal-dialog/-tether-dialog');
define.alias('ember-popper/components/ember-popper-targeting-parent', 'handbook/components/ember-popper-targeting-parent');
define.alias('ember-popper/components/ember-popper', 'handbook/components/ember-popper');
define.alias('ember-tether/components/ember-tether', 'handbook/components/ember-tether');
define.alias('ember-wormhole/components/ember-wormhole', 'handbook/components/ember-wormhole');
define('handbook/components/etw/module-style-detail', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    etwTailwindStyleguide: Ember.inject.service(),
    moduleStyle: Ember.computed.reads('etwTailwindStyleguide.selectedModuleStyle'),

    activeResponsiveClass: 'all',
    activeState: 'none',

    detailStyles: Ember.computed('moduleStyle', 'activeResponsiveClass', 'activeState', function () {
      var moduleStyle = this.get('moduleStyle');
      var activeResponsiveClass = this.get('activeResponsiveClass');
      var responsivePrefix = activeResponsiveClass === 'all' ? '' : activeResponsiveClass + ':';
      var activeState = this.get('activeState');
      var statePrefix = activeState === 'none' ? '' : activeState + ':';

      return (0, _classesForModuleStyle.default)(moduleStyle).map(function (cssClass) {
        return '' + responsivePrefix + statePrefix + cssClass;
      });
    }),

    actions: {
      highlightStyle: function highlightStyle(style) {
        var _this = this;

        this.set('highlightedStyle', style);
        Ember.run.later(function () {
          _this.set('highlightedStyle', null);
        }, 1500);
      }
    }

  });
});
define('handbook/components/etw/module-style-example', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    etwTailwindStyleguide: Ember.inject.service(),

    // Passed in
    moduleStyle: null,

    classesForModuleStyle: Ember.computed('moduleStyle', function () {
      return (0, _classesForModuleStyle.default)(this.get('moduleStyle'));
    }),

    actions: {
      selectModuleStyle: function selectModuleStyle() {
        this.get('etwTailwindStyleguide').set('selectedModuleStyle', this.get('moduleStyle'));
      }
    }

  });
});
define.alias('ember-font-awesome/components/fa-icon', 'handbook/components/fa-icon');
define.alias('ember-font-awesome/components/fa-list', 'handbook/components/fa-list');
define.alias('ember-font-awesome/components/fa-stack', 'handbook/components/fa-stack');
define.alias('osf-components/components/feedback-button/component', 'handbook/components/feedback-button/component');
define.alias('osf-components/components/file-browser-item/component', 'handbook/components/file-browser-item/component');
define.alias('osf-components/components/file-browser/component', 'handbook/components/file-browser/component');
define.alias('osf-components/components/file-editor/component', 'handbook/components/file-editor/component');
define.alias('osf-components/components/file-icon/component', 'handbook/components/file-icon/component');
define.alias('osf-components/components/file-list-item/component', 'handbook/components/file-list-item/component');
define.alias('osf-components/components/file-list/component', 'handbook/components/file-list/component');
define.alias('osf-components/components/file-renderer/component', 'handbook/components/file-renderer/component');
define.alias('osf-components/components/file-share-button/component', 'handbook/components/file-share-button/component');
define.alias('osf-components/components/file-version/component', 'handbook/components/file-version/component');
define.alias('osf-components/components/global-link-to/component', 'handbook/components/global-link-to/component');
define.alias('osf-components/components/hyper-link/component', 'handbook/components/hyper-link/component');
define.alias('osf-components/components/hyper-link/x-anchor/component', 'handbook/components/hyper-link/x-anchor/component');
define.alias("liquid-fire/components/illiquid-model", "handbook/components/illiquid-model");
define.alias('osf-components/components/inline-list/component', 'handbook/components/inline-list/component');
define.alias('osf-components/components/institution-carousel/component', 'handbook/components/institution-carousel/component');
define.alias('osf-components/components/join-osf-banner/component', 'handbook/components/join-osf-banner/component');
define.alias("liquid-fire/components/liquid-bind", "handbook/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "handbook/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "handbook/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "handbook/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "handbook/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "handbook/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "handbook/components/liquid-spacer");
define.alias('liquid-fire/components/liquid-sync', 'handbook/components/liquid-sync');
define.alias("liquid-fire/components/liquid-unless", "handbook/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "handbook/components/liquid-versions");
define.alias('osf-components/components/loading-indicator/component', 'handbook/components/loading-indicator/component');
define.alias('osf-components/components/maintenance-banner/component', 'handbook/components/maintenance-banner/component');
define.alias('ember-modal-dialog/components/modal-dialog-overlay', 'handbook/components/modal-dialog-overlay');
define.alias('ember-cli-addon-docs/components/modal-dialog/component', 'handbook/components/modal-dialog');
define.alias('osf-components/components/new-project-modal/component', 'handbook/components/new-project-modal/component');
define.alias('osf-components/components/new-project-navigation-modal/component', 'handbook/components/new-project-navigation-modal/component');
define.alias('osf-components/components/node-card/component', 'handbook/components/node-card/component');
define.alias('osf-components/components/node-card/node-icon/component', 'handbook/components/node-card/node-icon/component');
define.alias('osf-components/components/node-list/component', 'handbook/components/node-list/component');
define.alias('osf-components/components/node-navbar/component', 'handbook/components/node-navbar/component');
define.alias('osf-components/components/node-navbar/link/component', 'handbook/components/node-navbar/link/component');
define.alias('osf-components/components/noteworthy-and-popular-project/component', 'handbook/components/noteworthy-and-popular-project/component');
define.alias('osf-components/components/osf-footer/component', 'handbook/components/osf-footer/component');
define.alias('osf-components/components/osf-header/component', 'handbook/components/osf-header/component');
define.alias('osf-components/components/osf-logo/component', 'handbook/components/osf-logo/component');
define.alias('osf-components/components/osf-mode-footer/component', 'handbook/components/osf-mode-footer/component');
define.alias('osf-components/components/osf-navbar/auth-dropdown/component', 'handbook/components/osf-navbar/auth-dropdown/component');
define.alias('osf-components/components/osf-navbar/component', 'handbook/components/osf-navbar/component');
define.alias('osf-components/components/osf-navbar/x-links/component', 'handbook/components/osf-navbar/x-links/component');
define.alias('osf-components/components/paginated-list/all/component', 'handbook/components/paginated-list/all/component');
define.alias('osf-components/components/paginated-list/has-many/component', 'handbook/components/paginated-list/has-many/component');
define.alias('osf-components/components/paginated-list/layout/component', 'handbook/components/paginated-list/layout/component');
define.alias('osf-components/components/paginated-list/x-item/component', 'handbook/components/paginated-list/x-item/component');
define.alias('osf-components/components/paginated-list/x-render/component', 'handbook/components/paginated-list/x-render/component');
define.alias('osf-components/components/panel/component', 'handbook/components/panel/component');
define.alias('osf-components/components/panel/x-body/component', 'handbook/components/panel/x-body/component');
define.alias('osf-components/components/panel/x-footer/component', 'handbook/components/panel/x-footer/component');
define.alias('osf-components/components/panel/x-heading/component', 'handbook/components/panel/x-heading/component');
define.alias('ember-power-select/components/power-select-multiple', 'handbook/components/power-select-multiple');
define.alias('ember-power-select/components/power-select-multiple/trigger', 'handbook/components/power-select-multiple/trigger');
define.alias('ember-power-select/components/power-select', 'handbook/components/power-select');
define.alias('ember-power-select/components/power-select/before-options', 'handbook/components/power-select/before-options');
define.alias('ember-power-select/components/power-select/options', 'handbook/components/power-select/options');
define.alias('ember-power-select/components/power-select/placeholder', 'handbook/components/power-select/placeholder');
define.alias('ember-power-select/components/power-select/power-select-group', 'handbook/components/power-select/power-select-group');
define.alias('ember-power-select/components/power-select/search-message', 'handbook/components/power-select/search-message');
define.alias('ember-power-select/components/power-select/trigger', 'handbook/components/power-select/trigger');
define.alias('osf-components/components/project-selector/component', 'handbook/components/project-selector/component');
define.alias('osf-components/components/quickfile-nav/component', 'handbook/components/quickfile-nav/component');
define.alias('osf-components/components/scheduled-banner/component', 'handbook/components/scheduled-banner/component');
define.alias('osf-components/components/scheduled-banner/x-maybe-link/component', 'handbook/components/scheduled-banner/x-maybe-link/component');
define.alias('osf-components/components/sign-up-form/component', 'handbook/components/sign-up-form/component');
define.alias('osf-components/components/sign-up-policy/component', 'handbook/components/sign-up-policy/component');
define.alias('osf-components/components/simple-paginator/component', 'handbook/components/simple-paginator/component');
define.alias('osf-components/components/sort-button/component', 'handbook/components/sort-button/component');
define.alias('osf-components/components/status-banner/component', 'handbook/components/status-banner/component');
define.alias('osf-components/components/success-icon/component', 'handbook/components/success-icon/component');
define.alias('ember-tag-input/components/tag-input', 'handbook/components/tag-input');
define.alias('osf-components/components/tags-widget/component', 'handbook/components/tags-widget/component');
define.alias('ember-modal-dialog/components/deprecated-tether-dialog', 'handbook/components/tether-dialog');
define.alias('osf-components/components/tos-consent-banner/component', 'handbook/components/tos-consent-banner/component');
define.alias('osf-components/components/validated-input/checkbox/component', 'handbook/components/validated-input/checkbox/component');
define.alias('osf-components/components/validated-input/checkboxes/component', 'handbook/components/validated-input/checkboxes/component');
define.alias('osf-components/components/validated-input/checkboxes/x-checkbox/component', 'handbook/components/validated-input/checkboxes/x-checkbox/component');
define.alias('osf-components/components/validated-input/custom/component', 'handbook/components/validated-input/custom/component');
define.alias('osf-components/components/validated-input/date/component', 'handbook/components/validated-input/date/component');
define.alias('osf-components/components/validated-input/power-select/component', 'handbook/components/validated-input/power-select/component');
define.alias('osf-components/components/validated-input/recaptcha/component', 'handbook/components/validated-input/recaptcha/component');
define.alias('osf-components/components/validated-input/text/component', 'handbook/components/validated-input/text/component');
define.alias('osf-components/components/validated-input/textarea/component', 'handbook/components/validated-input/textarea/component');
define.alias('osf-components/components/validated-input/x-input-wrapper/component', 'handbook/components/validated-input/x-input-wrapper/component');
define.alias('osf-components/components/validated-model-form/component', 'handbook/components/validated-model-form/component');
define.alias('osf-components/components/zoom-to-route/component', 'handbook/components/zoom-to-route/component');
define('handbook/config/environment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var config;

  try {
    var metaName = 'handbook/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports.default = config;
});
define('handbook/controllers/application-tailwind', ['exports', 'handbook/tailwind/config/colors', 'handbook/tailwind/config/screens', 'handbook/tailwind/config/fonts', 'handbook/tailwind/config/text-sizes', 'handbook/tailwind/config/font-weights', 'handbook/tailwind/config/line-height', 'handbook/tailwind/config/letter-spacing', 'handbook/tailwind/config/border-widths', 'handbook/tailwind/config/border-radius', 'handbook/tailwind/config/width', 'handbook/tailwind/config/height', 'handbook/tailwind/config/min-width', 'handbook/tailwind/config/min-height', 'handbook/tailwind/config/max-width', 'handbook/tailwind/config/max-height', 'handbook/tailwind/config/padding', 'handbook/tailwind/config/margin', 'handbook/tailwind/config/negative-margin', 'handbook/tailwind/config/shadows', 'handbook/tailwind/config/z-index', 'handbook/tailwind/config/opacity', 'handbook/tailwind/config/svg-fill', 'handbook/tailwind/config/svg-stroke'], function (exports, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _borderWidths, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var modules = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    borderWidths: _borderWidths.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default
  };

  exports.default = Ember.Controller.extend({

    /*
      A module style is an object that looks like
       {
        module: 'border-radius',
        name: 'lg',
        value: '.5rem'
      }
    */
    moduleStyles: Ember.computed(function () {
      return Object.keys(modules).reduce(function (allModules, moduleName) {
        var hash = modules[moduleName];
        allModules[moduleName] = Object.keys(hash).map(function (key) {
          return {
            module: Ember.String.dasherize(moduleName),
            name: key,
            value: hash[key]
          };
        });

        return allModules;
      }, {});
    })

  });
});
define.alias('ember-cli-addon-docs/controllers/application', 'handbook/controllers/application');
define.alias('ember-cli-addon-docs/controllers/docs/api/class', 'handbook/controllers/docs/api/class');
define("handbook/docs/api/item/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Bb1iTeVO", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"model\",\"isComponent\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"api/x-component\",null,[[\"component\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"model\",\"isClass\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"api/x-class\",null,[[\"class\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"api/x-module\",null,[[\"module\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/api/item/template.hbs" } });
});
define("handbook/docs/components/bs-alert/demo-danger-hidden/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZtMbhVp/", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"bs-alert.danger-hidden.hbs\"]],{\"statements\":[[4,\"bs-alert\",null,[[\"type\",\"dismissible\",\"hidden\"],[\"danger\",false,[23,[\"hideAlert\"]]]],{\"statements\":[[0,\"                    \"],[7,\"strong\"],[9],[0,\"Danger, Will Robinson!\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"bs-button\",null,[[\"class\",\"onClick\"],[\"center-block m-b-lg\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"hideAlert\"]]],null],[27,\"not\",[[23,[\"hideAlert\"]]],null]],null]]],{\"statements\":[[0,\"            set: hideAlert = \"],[1,[27,\"not\",[[23,[\"hideAlert\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"bs-alert.danger-hidden.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/bs-alert/demo-danger-hidden/template.hbs" } });
});
define("handbook/docs/components/bs-alert/demo-info/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "TLywgJFZ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"bs-alert.info.hbs\"]],{\"statements\":[[4,\"bs-alert\",null,[[\"type\"],[\"info\"]],{\"statements\":[[0,\"                    \"],[7,\"strong\"],[9],[0,\"Hey! You like info?\"],[10],[0,\"\\n                    This is some fine info\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"bs-alert.info.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/bs-alert/demo-info/template.hbs" } });
});
define("handbook/docs/components/bs-alert/demo-warn-no-dismiss/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "MYlT6b36", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"bs-alert.warn-no-dismiss.hbs\"]],{\"statements\":[[4,\"bs-alert\",null,[[\"type\",\"dismissible\"],[\"warning\",false]],{\"statements\":[[0,\"                    \"],[7,\"strong\"],[9],[0,\"Uh oh.\"],[10],[0,\"\\n                    I've got a bad feeling about this.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"bs-alert.warn-no-dismiss.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/bs-alert/demo-warn-no-dismiss/template.hbs" } });
});
define("handbook/docs/components/bs-alert/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "WiRrutuz", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"bs-alert\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"bs-alert\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Generates what is mostly a \"],[7,\"a\"],[11,\"href\",\"https://www.ember-bootstrap.com/api/classes/Components.Alert.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"boostrap alert\"],[10],[0,\". \"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"In addition to the standard look and functionality, we:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Have a font-awesome close icon to match OSF styling;\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Gave the close button an aria-label to work well with i18n.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"info\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#info\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"info\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/bs-alert/demo-info\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"warning-not-dismissible-\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#warning-not-dismissible-\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"warning (not dismissible)\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/bs-alert/demo-warn-no-dismiss\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"danger-hidden-\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#danger-hidden-\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"danger (hidden)\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/bs-alert/demo-danger-hidden\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/bs-alert/template.hbs" } });
});
define("handbook/docs/components/copyable-text/demo/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "sSL9tfhQ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"copyable-text.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"copyable-text\",null,[[\"text\"],[\"bunchoftextblahblahblah\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"copyable-text.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/copyable-text/demo/template.hbs" } });
});
define("handbook/docs/components/copyable-text/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "74pPq3Mt", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"copyable-text\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"copyable-text\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Display some read-only text with a button to copy to the clipboard.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Meant for situations where it's more useful to copy/paste the text than read it.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/components/copyable-text/demo\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/copyable-text/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-block/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "XmZ8Zk9J", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-block.hbs\"]],{\"statements\":[[4,\"delete-button\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"block\"],null]]],{\"statements\":[[0,\"            \"],[7,\"strong\"],[9],[0,\"Really\"],[10],[0,\" really sure?\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-block.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-block/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-default/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "hp+s2XDj", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-default.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"delete-button\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"default\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-default.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-default/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-disabled/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "TQ8aRvc9", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-disabled.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"delete-button\",null,[[\"disabled\",\"delete\"],[true,[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"disabled\"],null]]]],false],[0,\"\\n        \"],[1,[27,\"delete-button\",null,[[\"small\",\"disabled\",\"delete\"],[true,true,[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"disabled\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-disabled.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-disabled/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-hard/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "zCIQzNaJ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-hard-confirm.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"delete-button\",null,[[\"hardConfirm\",\"delete\"],[true,[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"hard-confirm\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-hard-confirm.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-hard/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-small/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "deQjVtOj", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-small.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"delete-button\",null,[[\"small\",\"delete\"],[true,[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"small\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-small.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-small/template.hbs" } });
});
define("handbook/docs/components/delete-button/demo-text/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "c5yPMjIf", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"delete-button.demo-text.hbs\"]],{\"statements\":[[0,\"        \"],[1,[27,\"delete-button\",null,[[\"delete\",\"buttonLabel\",\"modalTitle\",\"modalBody\",\"cancelButtonText\",\"confirmButtonText\",\"errorMessage\"],[[27,\"action\",[[22,0,[]],[23,[\"delete\"]],\"custom-text\"],null],\"Custom delete!\",\"Such a title\",\"Sure you want to?\",\"No.\",\"Yes?\",\"It did not work.\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.demo-text.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"delete-button.delete-action.ts\"],[[\"label\"],[\"component.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/demo-text/template.hbs" } });
});
define("handbook/docs/components/delete-button/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "QzauJ+si", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"delete-button\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"delete-button\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A configurable delete button with confirmation modal.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"with-default-options\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#with-default-options\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"With default options\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-default\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"small-button\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#small-button\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Small button\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-small\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"scientist-name-confirmation\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#scientist-name-confirmation\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Scientist name confirmation\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-hard\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"block-form\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#block-form\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Block form\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-block\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"custom-text\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#custom-text\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Custom text\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-text\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"disabled-state\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#disabled-state\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Disabled state\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/delete-button/demo-disabled\",null,[[\"delete\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/delete-button/template.hbs" } });
});
define("handbook/docs/components/loading-indicator/demo-dark/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "zQEb0sdY", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"loading-indicator.dark.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"loading-indicator\",[],[[\"@dark\"],[\"true\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"loading-indicator.dark.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/loading-indicator/demo-dark/template.hbs" } });
});
define("handbook/docs/components/loading-indicator/demo-default/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "dark-background": "_dark-background_yv7ayl"
  };
});
define("handbook/docs/components/loading-indicator/demo-default/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "FGRXSl9j", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"loading-indicator.default-light.hbs\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"dark-background\"],[[\"from\"],[\"handbook/docs/components/loading-indicator/demo-default/styles\"]]]]]],[9],[0,\"\\n\"],[0,\"            \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"loading-indicator.default.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/loading-indicator/demo-default/template.hbs" } });
});
define("handbook/docs/components/loading-indicator/demo-inline-dark/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "aIEnWb/s", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"loading-indicator.inline-dark.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"loading-indicator\",[],[[\"@dark\",\"@inline\"],[\"true\",\"true\"]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"loading-indicator.inline-dark.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/loading-indicator/demo-inline-dark/template.hbs" } });
});
define("handbook/docs/components/loading-indicator/demo-inline-default/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "dark-background": "_dark-background_xmbgs9"
  };
});
define("handbook/docs/components/loading-indicator/demo-inline-default/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "1cgTKFZa", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"loading-indicator.inline-default-light.hbs\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"dark-background\"],[[\"from\"],[\"handbook/docs/components/loading-indicator/demo-inline-default/styles\"]]]]]],[9],[0,\"\\n\"],[0,\"            \"],[5,\"loading-indicator\",[],[[\"@inline\"],[\"true\"]]],[0,\"\\n\"],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"loading-indicator.inline-default.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/loading-indicator/demo-inline-default/template.hbs" } });
});
define("handbook/docs/components/loading-indicator/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Bw/WQF1h", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"loading-indicator\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"loading-indicator\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This component indicates loading.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"for-dark-backgrounds\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#for-dark-backgrounds\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"For dark backgrounds\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/loading-indicator/demo-default\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"for-light-backgrounds\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#for-light-backgrounds\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"For light backgrounds\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/loading-indicator/demo-dark\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline-for-dark-backgrounds\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline-for-dark-backgrounds\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline for dark backgrounds\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/loading-indicator/demo-inline-default\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline-for-light-backgrounds\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline-for-light-backgrounds\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline for light backgrounds\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/loading-indicator/demo-inline-dark\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/loading-indicator/template.hbs" } });
});
define("handbook/docs/components/new-project-modal/demo/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "niKFRzbC", "block": "{\"symbols\":[\"demo\",\"@projectCreated\",\"@closeModal\",\"@openModal\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"bs-button\",null,[[\"class\",\"onClick\"],[\"center-block m-b-lg\",[27,\"action\",[[22,0,[]],[22,4,[]]],null]]],{\"statements\":[[0,\"            Create project\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,0,[\"newNode\"]]],null,{\"statements\":[[0,\"            The new node title is \\\"\"],[1,[22,0,[\"newNode\",\"title\"]],false],[0,\"\\\".\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            There is no node.\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,0,[\"shouldReload\"]]],null,{\"statements\":[[0,\"            Reload requested.\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            No reload requested.\\n\"]],\"parameters\":[]}],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"new-project-modal.demo.hbs\"]],{\"statements\":[[4,\"if\",[[22,0,[\"shouldShowModal\"]]],null,{\"statements\":[[0,\"                \"],[5,\"new-project-modal\",[],[[\"@afterProjectCreated\",\"@analyticsContext\",\"@closeModal\"],[[27,\"action\",[[22,0,[]],[22,2,[]]],null],\"Dashboard\",[27,\"action\",[[22,0,[]],[22,3,[]]],[[\"reload\"],[false]]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"new-project-modal.demo.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"new-project-modal.controller.ts\"],[[\"label\"],[\"controller.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/new-project-modal/demo/template.hbs" } });
});
define("handbook/docs/components/new-project-modal/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "s+yGA1ye", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"new-project-modal\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"new-project-modal\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"If you need to create a node where the user gets to name it, you should use this component. This gives the user the ability to pick institutions, storage region, and even where to template the node from. \"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"parameters\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#parameters\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"parameters\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"afterProjectCreated\"],[10],[0,\" (required):\\nAn action you pass in that it calls when it creates a project. This is a good opportunity to set a property with the node that you just created on it.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"analyticsContext\"],[10],[0,\" (required):\\nA string passed to the analytics service. Should be the name you're using for the current page in your other analytics calls.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"closeModal\"],[10],[0,\" (required):\\nPassed to \"],[7,\"code\"],[9],[0,\"bs-modal\"],[10],[0,\"'s \"],[7,\"code\"],[9],[0,\"onHidden\"],[10],[0,\" parameter.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"demo\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#demo\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"demo\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/new-project-modal/demo\",null,[[\"projectCreated\",\"closeModal\",\"openModal\"],[[22,0,[\"projectCreated\"]],[22,0,[\"closeModal\"]],[22,0,[\"openModal\"]]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/new-project-modal/template.hbs" } });
});
define("handbook/docs/components/new-project-navigation-modal/demo/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "sRJIllYW", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"new-project-navigation-modal.demo.hbs\"]],{\"statements\":[[4,\"bs-button\",null,[[\"class\",\"onClick\"],[\"center-block m-b-lg\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"shouldShowModal\"]]],null],true],null]]],{\"statements\":[[0,\"            Create project\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"shouldShowModal\"]]],null,{\"statements\":[[0,\"            \"],[5,\"new-project-navigation-modal\",[],[[\"@node\",\"@closeModal\",\"@title\"],[[21,\"node\"],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"shouldShowModal\"]]],null],false],null],\"Project created! Would you like to go there now?\"]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"new-project-navigation-modal.demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/new-project-navigation-modal/demo/template.hbs" } });
});
define("handbook/docs/components/new-project-navigation-modal/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3Rb++7Pe", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"new-project-navigation-modal\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"new-project-navigation-modal\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You've just created a new project. Maybe it's for a file to be moved into, or maybe it's just because you like projects. \\nBut the question is: do you want to go to that new project right now, or do you want to stay where you are?\\nThis modal asks that question of your user.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"parameters\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#parameters\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Parameters\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"node\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#node\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Node\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A node object (or at least an object with a links.html in it) for navigating to.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"closemodal\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#closemodal\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"closeModal\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"An action to do whatever you need to close the modal when the user decides to stay here.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"title\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#title\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"title\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A string of the call to action for creating a new project.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"demo\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#demo\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"demo\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/new-project-navigation-modal/demo\",null,[[\"node\"],[[23,[\"node\"]]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/new-project-navigation-modal/template.hbs" } });
});
define("handbook/docs/components/panel/demo-args/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Z7m9BQjR", "block": "{\"symbols\":[\"demo\",\"panel\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"panel.demo-args.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"panel\",[],[[],[]],{\"statements\":[[0,\"\\n            \"],[6,[22,2,[\"heading\"]],[],[[\"@title\"],[\"I'm a panel\"]]],[0,\"\\n            \"],[6,[22,2,[\"body\"]],[],[[\"@text\"],[\"This is my body\"]]],[0,\"\\n            \"],[6,[22,2,[\"footer\"]],[],[[\"@text\"],[\"This is my footer\"]]],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"panel.demo-args.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/panel/demo-args/template.hbs" } });
});
define("handbook/docs/components/panel/demo-blocks/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "w8trKeNM", "block": "{\"symbols\":[\"demo\",\"panel\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"panel.demo-blocks.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"panel\",[],[[],[]],{\"statements\":[[0,\"\\n            \"],[6,[22,2,[\"heading\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[7,\"h2\"],[9],[0,\"I'm a panel\"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[6,[22,2,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[7,\"strong\"],[9],[0,\"This is my body\"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[6,[22,2,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[7,\"h3\"],[9],[0,\"This is my footer\"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"panel.demo-blocks.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/panel/demo-blocks/template.hbs" } });
});
define("handbook/docs/components/panel/demo-mix/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "mox5nIRS", "block": "{\"symbols\":[\"demo\",\"panel\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"panel.demo-mix.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"panel\",[],[[],[]],{\"statements\":[[0,\"\\n            \"],[6,[22,2,[\"heading\"]],[],[[\"@title\"],[\"I'm a panel\"]],{\"statements\":[[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"pull-right\"],[9],[0,\"Here's some other stuff in the heading\"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[6,[22,2,[\"body\"]],[],[[\"@text\"],[\"This is my body\"]],{\"statements\":[[0,\"\\n                \"],[7,\"button\"],[11,\"class\",\"btn btn-default\"],[9],[0,\"This is something additional\"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"panel.demo-mix.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/panel/demo-mix/template.hbs" } });
});
define("handbook/docs/components/panel/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "P6fVyL3X", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"panel\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"panel\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Render content in a panel.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"using-arguments\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#using-arguments\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Using arguments\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/panel/demo-args\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"using-blocks\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#using-blocks\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Using blocks\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/panel/demo-blocks\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"using-both\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#using-both\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Using both\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/components/panel/demo-mix\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/panel/template.hbs" } });
});
define("handbook/docs/components/tags-widget/default/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2U/YdMLt", "block": "{\"symbols\":[\"demo\",\"@tags\",\"@addTag\",\"@removeTag\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"tags-widget.default.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@addTag\",\"@removeTag\",\"@showAdd\",\"@analyticsScope\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,3,[]]],null],[27,\"action\",[[22,0,[]],[22,4,[]]],null],[22,0,[\"showAdd\"]],\"Handbook Tags\"]]],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"bs-button\",null,[[\"class\",\"onClick\"],[\"center-block m-b-lg\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"showAdd\"]]],null],[27,\"not\",[[22,0,[\"showAdd\"]]],null]],null]]],{\"statements\":[[0,\"        set: showAdd = \"],[1,[27,\"not\",[[22,0,[\"showAdd\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"tags-widget.default.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/tags-widget/default/template.hbs" } });
});
define("handbook/docs/components/tags-widget/inline-readonly/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "D/0dMuOG", "block": "{\"symbols\":[\"demo\",\"@tags\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"tags-widget.inline-readonly.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@readOnly\",\"@inline\",\"@analyticsScope\"],[[22,2,[]],\"true\",\"true\",\"Handbook Tags\"]]],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"tags-widget.inline-readonly.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/tags-widget/inline-readonly/template.hbs" } });
});
define("handbook/docs/components/tags-widget/inline/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "y5WKYjUT", "block": "{\"symbols\":[\"demo\",\"@tags\",\"@addTag\",\"@removeTag\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"tags-widget.inline.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@addTag\",\"@removeTag\",\"@showAdd\",\"@inline\",\"@analyticsScope\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,3,[]]],null],[27,\"action\",[[22,0,[]],[22,4,[]]],null],[22,0,[\"showAdd\"]],\"true\",\"Handbook Tags\"]]],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"bs-button\",null,[[\"class\",\"onClick\"],[\"center-block m-b-lg\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"showAdd\"]]],null],[27,\"not\",[[22,0,[\"showAdd\"]]],null]],null]]],{\"statements\":[[0,\"        set: showAdd = \"],[1,[27,\"not\",[[22,0,[\"showAdd\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"tags-widget.inline.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/tags-widget/inline/template.hbs" } });
});
define("handbook/docs/components/tags-widget/readonly/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "j+7UWgx6", "block": "{\"symbols\":[\"demo\",\"@tags\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"tags-widget.readonly.hbs\"]],{\"statements\":[[0,\"        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@readOnly\",\"@analyticsScope\"],[[22,2,[]],\"true\",\"Handbook Tags\"]]],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"tags-widget.readonly.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/tags-widget/readonly/template.hbs" } });
});
define("handbook/docs/components/tags-widget/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3stC846s", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"tags-widget\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"tags-widget\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"To show all of the tags associated with a file/project\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"default\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#default\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Default\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/tags-widget/default\",null,[[\"tags\",\"addTag\",\"removeTag\"],[[22,0,[\"tags\"]],[27,\"action\",[[22,0,[]],[22,0,[\"addTag\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"removeTag\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"read-only\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#read-only\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Read-only\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/tags-widget/readonly\",null,[[\"tags\"],[[22,0,[\"tags\"]]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/tags-widget/inline\",null,[[\"tags\",\"addTag\",\"removeTag\"],[[22,0,[\"tags\"]],[27,\"action\",[[22,0,[]],[22,0,[\"addTag\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"removeTag\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline-read-only\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline-read-only\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline read-only\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/tags-widget/inline-readonly\",null,[[\"tags\"],[[22,0,[\"tags\"]]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/tags-widget/template.hbs" } });
});
define("handbook/docs/components/validated-model-form/demo-create/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "DFNlHQi3", "block": "{\"symbols\":[\"demo\",\"form\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"validated-model-form.demo-create.hbs\"]],{\"statements\":[[4,\"validated-model-form\",null,[[\"onSave\",\"modelName\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],\"node\"]],{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,2,[\"text\"]]],[[\"valuePath\",\"label\"],[\"title\",\"Title\"]]],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,2,[\"textarea\"]]],[[\"valuePath\",\"label\"],[\"description\",\"Description\"]]],false],[0,\"\\n\"],[4,\"bs-button\",null,[[\"buttonType\",\"disabled\"],[\"submit\",[22,2,[\"disabled\"]]]],{\"statements\":[[0,\"                Save\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"validated-model-form.demo-create.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/validated-model-form/demo-create/template.hbs" } });
});
define("handbook/docs/components/validated-model-form/demo-edit/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "mARdenDj", "block": "{\"symbols\":[\"demo\",\"form\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"validated-model-form.demo-edit.hbs\"]],{\"statements\":[[4,\"validated-model-form\",null,[[\"onSave\",\"onWillDestroy\",\"model\",\"disabled\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[22,0,[\"node\"]],[22,0,[\"model\",\"taskInstance\",\"isRunning\"]]]],{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,2,[\"text\"]]],[[\"valuePath\",\"label\"],[\"title\",\"Title\"]]],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,2,[\"textarea\"]]],[[\"valuePath\",\"label\"],[\"description\",\"Description\"]]],false],[0,\"\\n\"],[4,\"bs-button\",null,[[\"buttonType\",\"disabled\"],[\"submit\",[22,2,[\"disabled\"]]]],{\"statements\":[[0,\"                Save\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"validated-model-form.demo-edit.hbs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"validated-model-form.on-will-destroy.ts\"],[[\"label\"],[\"controller.ts\"]]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"validated-model-form.is-page-dirty.ts\"],[[\"label\"],[\"route.ts\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/validated-model-form/demo-edit/template.hbs" } });
});
define("handbook/docs/components/validated-model-form/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "xtFr/hpj", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"validated-model-form\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"validated-model-form\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Helps build validated forms.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"This component is appropriate if:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"You want a form for editing the fields on a model instance\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"The model class has validations defined using \"],[7,\"code\"],[9],[0,\"ember-cp-validations\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Renders a \"],[7,\"code\"],[9],[0,\"<form>\"],[10],[0,\" element, provides tools to easily build that form, and handles\\ncreating (if necessary), validating, and saving the model.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"params\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#params\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Params\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"onSave(model)\"],[10],[0,\" (required): Action called after the model is successfully validated and saved.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"onError(model, error)\"],[10],[0,\" (optional): Action called if saving the model fails.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"onWillDestroy()\"],[10],[0,\" (optional): Action called if you transition. Default behavior is to unload the object.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"model\"],[10],[0,\" (optional): Model instance to edit.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"modelName\"],[10],[0,\" (optional): Name of the model to create.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"modelProperties\"],[10],[0,\" (optional): Properties to be passed through to the model on creation.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"recreateModel\"],[10],[0,\" (optional): Will create a new model instance upon saving.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"disabled\"],[10],[0,\" (default \"],[7,\"code\"],[9],[0,\"false\"],[10],[0,\")\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"analyticsScope\"],[10],[0,\" (optional)\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"yielded-hash\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#yielded-hash\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Yielded hash\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"When invoked in block form, \"],[7,\"code\"],[9],[0,\"validated-model-form\"],[10],[0,\" yields a hash with the following keys:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"model\"],[10],[0,\": The model instance being created/edited\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"disabled\"],[10],[0,\": \"],[7,\"code\"],[9],[0,\"true\"],[10],[0,\" when the model is being saved or the passed-in \"],[7,\"code\"],[9],[0,\"disabled\"],[10],[0,\" param is \"],[7,\"code\"],[9],[0,\"true\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"submit\"],[10],[0,\": Action to submit the form. Alternately, you can put a \"],[7,\"code\"],[9],[0,\"<button type=\\\"submit\\\">\"],[10],[0,\" in the form.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Several \"],[7,\"code\"],[9],[0,\"validated-input/*\"],[10],[0,\" components with common arguments (\"],[7,\"code\"],[9],[0,\"model\"],[10],[0,\", \"],[7,\"code\"],[9],[0,\"shouldShowMessages\"],[10],[0,\", \"],[7,\"code\"],[9],[0,\"disabled\"],[10],[0,\") already bound:\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"checkbox\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"checkboxes\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"date\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"recaptcha\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"text\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"code\"],[9],[0,\"textarea\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"demo-create\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#demo-create\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Demo: Create\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/components/validated-model-form/demo-create\",null,[[\"onSave\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null]]]],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"demo-edit\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#demo-edit\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Demo: Edit\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This also shows how to use the \"],[7,\"code\"],[9],[0,\"onWillDestroy()\"],[10],[0,\" action to bring up an \\\"are you sure you want to leave\\\" dialog if there are unsaved changes.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[27,\"docs/components/validated-model-form/demo-edit\",null,[[\"onSave\",\"onWillDestroy\",\"node\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[22,0,[\"existingNode\"]]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/components/validated-model-form/template.hbs" } });
});
define("handbook/docs/contributing/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "na5rvJPl", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"contributing-to-the-handbook\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Contributing to the Handbook\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"These pages are nice, friendly markdown files.\\nIf you see anything you'd like to add or correct, just make a pull request!\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"editing-a-handbook-page\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#editing-a-handbook-page\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Editing a handbook page\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Click \\\"Edit this page\\\" at the bottom of any handbook page to edit and submit a PR on GitHub.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Try it out on the \"],[4,\"link-to\",[\"docs.troubleshooting\"],null,{\"statements\":[[0,\"troubleshooting page\"]],\"parameters\":[]},null],[0,\" next\\ntime you work through a problem.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"running-the-handbook-locally\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#running-the-handbook-locally\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Running the handbook locally\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"See \"],[7,\"a\"],[11,\"href\",\"https://github.com/CenterForOpenScience/ember-osf-web#developer-handbook\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"the README\"],[10],[0,\"\\nto enable the handbook at \"],[7,\"a\"],[11,\"href\",\"http://localhost:4200/handbook\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"localhost:4200/handbook\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"adding-a-component-to-the-gallery\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#adding-a-component-to-the-gallery\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Adding a component to the gallery\"],[10],[10],[0,\"\\n    \"],[7,\"ol\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Use \"],[7,\"code\"],[9],[0,\"ember g handbook-component my-component\"],[10],[0,\" to add a route:\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"lib\"],[10],[0,\"/\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"handbook\"],[10],[0,\"/\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"addon\"],[10],[0,\"/\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"docs\"],[10],[0,\"/\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"components\"],[10],[0,\"/\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"my\"],[10],[0,\"-\"],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"component\"],[10],[0,\"/\"],[10],[0,\"\\n ├── demo\\n │   └── template.hbs\\n └── template.md\\n\"],[10],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Describe the component and its usage in \"],[7,\"code\"],[9],[0,\"template.md\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Expand on the live demo in \"],[7,\"code\"],[9],[0,\"demo/template.hbs\"],[10],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Uses the \"],[7,\"a\"],[11,\"href\",\"https://ember-learn.github.io/ember-cli-addon-docs/docs/components/docs-demo\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"docs-demo\"],[10],[0,\"\\n  component from \"],[7,\"a\"],[11,\"href\",\"https://ember-learn.github.io/ember-cli-addon-docs\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-addon-docs\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"You can add \"],[7,\"code\"],[9],[0,\"demo/component.ts\"],[10],[0,\" or \"],[7,\"code\"],[9],[0,\"demo/styles.scss\"],[10],[0,\" if you need.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Add more demos! Show the component in a variety of states.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check out the\\n\"],[4,\"link-to\",[\"docs.components.loading-indicator\"],null,{\"statements\":[[0,\"loading-indicator demos\"]],\"parameters\":[]},null],[0,\"\\nfor a simple example.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"adding-a-new-handbook-page\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#adding-a-new-handbook-page\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Adding a new handbook page\"],[10],[10],[0,\"\\n    \"],[7,\"ol\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Add a route to \"],[7,\"code\"],[9],[0,\"lib/handbook/addon/routes.js\"],[10],[0,\":\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[11,\"class\",\"undefinedjs\"],[9],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"this\"],[10],[0,\".route(\"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"'docs'\"],[10],[0,\", \"],[7,\"span\"],[11,\"class\",\"hljs-function\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"function\"],[10],[0,\"(\"],[7,\"span\"],[11,\"class\",\"hljs-params\"],[9],[10],[0,\") \"],[10],[0,\"{\\n     \"],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"// ...\"],[10],[0,\"\\n     \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"this\"],[10],[0,\".route(\"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"'my-new-page'\"],[10],[0,\");\\n }\\n\"],[10],[10],[0,\"\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Add a link to the sidebar nav in \"],[7,\"code\"],[9],[0,\"lib/handbook/addon/docs/template.hbs\"],[10],[0,\":\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[11,\"class\",\"undefinedhbs\"],[9],[7,\"span\"],[11,\"class\",\"xml\"],[9],[0,\" \"],[10],[7,\"span\"],[11,\"class\",\"hljs-template-variable\"],[9],[0,\"{{nav.item 'My new page' 'docs.my-new-page'}}\"],[10],[7,\"span\"],[11,\"class\",\"xml\"],[9],[10],[0,\"\\n\"],[10],[10],[0,\"\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Let your thoughts fall into markdown at \"],[7,\"code\"],[9],[0,\"lib/handbook/addon/docs/my-new-page/template.md\"],[10],[10],[0,\"\\n\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/contributing/template.hbs" } });
});
define("handbook/docs/conventions/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2FaC772v", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"coding-conventions\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Coding Conventions\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"TODO\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/conventions/template.hbs" } });
});
define("handbook/docs/dev-env/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2JLJb//p", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"developer-environment\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Developer Environment\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"local-config\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#local-config\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Local config\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"basic-setup\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#basic-setup\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Setup\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Add a file to your \"],[7,\"code\"],[9],[0,\"ember-osf-web/config/\"],[10],[0,\" directory called \"],[7,\"code\"],[9],[0,\"local.js\"],[10],[0,\". This will hold your local overrides to ember-osf-web and will be ignored by git. Inside there, you want:\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"module\"],[10],[0,\".\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"exports\"],[10],[0,\" = {\\n};\\n\"],[10],[10],[7,\"p\"],[9],[0,\"Fill that up with overrides as described below and you can customize your ember experience to be more fulfilling and productive.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"useful-overrides\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#useful-overrides\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Useful overrides\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h4\"],[11,\"id\",\"handbook_enabled\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#handbook_enabled\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"HANDBOOK_ENABLED\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Type\"],[10],[0,\": \"],[7,\"em\"],[9],[0,\"boolean\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Default\"],[10],[0,\": false\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"This thing you're reading right now? It's the handbook. If you'd like to be able to access it locally (especially for adding to the handbook or reviewing other developers' changes), set it to be true. If you have no need for it, set it to false.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"mirage_enabled\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#mirage_enabled\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"MIRAGE_ENABLED\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Type\"],[10],[0,\": \"],[7,\"em\"],[9],[0,\"boolean\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Default\"],[10],[0,\": false\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"http://www.ember-cli-mirage.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Mirage\"],[10],[0,\" is a client-side API server that we use to mock the OSF API during automated testing. It can also be used for local development. Setting this to true will allow you to run the OSF front-end without having to run the OSF API back-end.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"a11y_audit\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#a11y_audit\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"A11Y_AUDIT\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Type\"],[10],[0,\": \"],[7,\"em\"],[9],[0,\"boolean\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Default\"],[10],[0,\": true (well, in develop mode)\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-a11y/ember-a11y-testing#ember-a11y-testing\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Ember-a11y-testing\"],[10],[0,\" provides warnings when we violate some easy-to-miss, easy-to-check accessibility issues. Be sure to check your pages for accessibility before sending it to CR or Demo, but sometimes there are a lot of warnings for things that we can't yet fix. If it gets to be too much, you can temporarily disable the audit with this flag.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"popular_links_node\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#popular_links_node\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"POPULAR_LINKS_NODE\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h4\"],[11,\"id\",\"new_and_noteworthy_links_node\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#new_and_noteworthy_links_node\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"NEW_AND_NOTEWORTHY_LINKS_NODE\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"strong\"],[9],[0,\"Type\"],[10],[0,\": \"],[7,\"em\"],[9],[0,\"string\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"If you're doing local development with the OSF API running and want to see the New and Noteworthy and Popular sections of the Dashboard page filled out, then set each of these to the guid of a node in your local database that has links to other nodes. If you are not using a local OSF instance but are instead using Mirage, then you don't have to override these at all. \"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/dev-env/template.hbs" } });
});
define("handbook/docs/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "guzMUw5K", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"osf-front-end-developer-handbook\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"OSF Front-end Developer Handbook\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This handbook is a guide for developers contributing to\\n\"],[7,\"a\"],[11,\"href\",\"https://github.com/CenterForOpenScience/ember-osf-web\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-osf-web\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"It is meant to be a living document, forever a work in progress.\\nFeel free to \"],[4,\"link-to\",[\"docs.contributing\"],null,{\"statements\":[[0,\"contribute\"]],\"parameters\":[]},null],[0,\"\\nif you notice any omissions, gaps, or inaccuracies.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Go science!\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/index/template.hbs" } });
});
define("handbook/docs/quickstart/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "GOghRRmN", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"quickstart\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Quickstart\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"First, create the universe.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Then, see the \"],[7,\"a\"],[11,\"href\",\"https://github.com/CenterForOpenScience/ember-osf-web\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"README\"],[10],[0,\".\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/quickstart/template.hbs" } });
});
define("handbook/docs/resources/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "werYp27l", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"additional-resources\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Additional Resources\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"emberjs\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#emberjs\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"EmberJS\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://guides.emberjs.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Ember.js Guides\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://emberjs.com/api/ember/release\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Ember.js API Documentation\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"typescript\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#typescript\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"TypeScript\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"TypeScript in 5 minutes\"],[10],[0,\" - get going fast\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.typescriptlang.org/docs/handbook/basic-types.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"TypeScript Handbook\"],[10],[0,\" - official from Microsoft\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://basarat.gitbooks.io/typescript/\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"TypeScript Deep Dive\"],[10],[0,\" - unofficial from \"],[7,\"a\"],[11,\"href\",\"http://basarat.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"@basarat\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"ember-typescript\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#ember-typescript\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Ember + TypeScript\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/typed-ember/ember-cli-typescript/blob/master/README.md\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-typescript\"],[10],[0,\" - what makes it all possible\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.chriskrycho.com/typing-your-ember.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Typing Your Ember\"],[10],[0,\" - a blog series by \"],[7,\"a\"],[11,\"href\",\"https://www.chriskrycho.com/about.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"@chriskrycho\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"various-addons\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#various-addons\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Various Addons\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-a11y/ember-a11y-testing\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-a11y-testing\"],[10],[0,\" - Catching easy-to-miss, easy-to-detect accessibility problems\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-learn/ember-cli-addon-docs\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-addon-docs\"],[10],[0,\" - That's this handbook\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"http://www.ember-cli-mirage.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-mirage\"],[10],[0,\" - Fake API responses for easy testing and development\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"http://ember-concurrency.com/docs/introduction/\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-concurrency\"],[10],[0,\" - Tasks for asynchronous actions\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/salsify/ember-css-modules\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-css-modules\"],[10],[0,\" - Don't style globally when you can style locally\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-decorators/ember-decorators\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-decorators\"],[10],[0,\" - Save a lot of trouble coding… with decorators!\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-engines/ember-engines\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-engines\"],[10],[0,\" - How we separate code now\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/kategengler/ember-feature-flags\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-feature-flags\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/jamesarosen/ember-i18n\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-i18n\"],[10],[0,\" - Localization utilities\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/poteto/ember-metrics\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-metrics\"],[10],[0,\" - \\\"Send data to multiple analytics services without re-implementing new API\\\"\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/simplabs/ember-test-selectors\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-test-selectors\"],[10],[0,\" - The best way to define what you need to select from the DOM in tests\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/simplabs/qunit-dom\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"qunit-dom\"],[10],[0,\" - How we assert the DOM in tests\"],[10],[0,\"\\n\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/resources/template.hbs" } });
});
define('handbook/docs/route', ['exports', 'handbook/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var DocsRoute = function (_EmberRoute) {
        _inherits(DocsRoute, _EmberRoute);

        function DocsRoute() {
            _classCallCheck(this, DocsRoute);

            return _possibleConstructorReturn(this, (DocsRoute.__proto__ || Object.getPrototypeOf(DocsRoute)).apply(this, arguments));
        }

        _createClass(DocsRoute, [{
            key: 'model',
            value: function model() {
                if (_environment.default.docGenerationEnabled) {
                    return this.store.findRecord('project', 'osf-components');
                }
            }
        }]);

        return DocsRoute;
    }(Ember.Route);

    exports.default = DocsRoute;
});
define("handbook/docs/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "DocsPage": "_DocsPage_1pkxg6"
  };
});
define("handbook/docs/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2ujGSpK+", "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[4,\"docs-viewer\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"nav\"]]],[[\"project\"],[[23,[\"model\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Introduction\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"What is this handbook?\",\"docs.index\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Contributing to the handbook\",\"docs.contributing\"],null],false],[0,\"\\n\\n        \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Development\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Quickstart\",\"docs.quickstart\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Troubleshooting\",\"docs.troubleshooting\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Developer Environment\",\"docs.dev-env\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Testing\",\"docs.testing\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Additional resources\",\"docs.resources\"],null],false],[0,\"\\n\\n        \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Style guide\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Visual style\",\"docs.visual-style\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Written style\",\"docs.written-style\"],null],false],[0,\"\\n\\n        \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Component gallery\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"bs-alert\",\"docs.components.bs-alert\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"copyable-text\",\"docs.components.copyable-text\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"delete-button\",\"docs.components.delete-button\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"loading-indicator\",\"docs.components.loading-indicator\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"new-project-modal\",\"docs.components.new-project-modal\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"new-project-navigation-modal\",\"docs.components.new-project-navigation-modal\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"panel\",\"docs.components.panel\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"tags-widget\",\"docs.components.tags-widget\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"validated-model-form\",\"docs.components.validated-model-form\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"main\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"docs-container\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"docs-section \",[27,\"local-class\",[\"DocsPage\"],[[\"from\"],[\"handbook/docs/styles\"]]]]]],[9],[0,\"\\n                \"],[1,[21,\"outlet\"],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/template.hbs" } });
});
define("handbook/docs/testing/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Y1W3zZp1", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"testing\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Testing\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"test-categories\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#test-categories\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Test categories\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"by-what-they-try-to-determine\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#by-what-they-try-to-determine\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"By what they try to determine\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"We organize the tests in the hierarchy by this set of categories.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"acceptance-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#acceptance-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Acceptance test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"These are a type of Application test (see below) that looks at the behavior of the whole app from a user's perspective. Ideally, when adding a new page, the Acceptance tests should be the first thing you write after you get all of the appropriate information from Product and preferably after consulting with QA. The handy thing about acceptance tests is that it's behavior driven, so it shouldn't matter what the underlying implementation of the models or the components are. If the OSF API is defined, you should be able to define what the test selectors are and how they react to various situations, then fill in the functionality of everything else to make those tests pass.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"See \"],[7,\"a\"],[11,\"href\",\"https://ember-test-selectors.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-test-selectors\"],[10],[0,\" for a good introduction to test selectors and why they are great.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"If your Acceptance test isn't robust enough to survive a refactor of the ember-osf-web application (to typescript, to a new version of Ember, to engines, or whatever), then it's probably not been designed right. Good tests here will eliminate a lot of testing that QA would have to otherwise do.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"You will make heavy use of \"],[7,\"a\"],[11,\"href\",\"http://www.ember-cli-mirage.com\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Mirage\"],[10],[0,\" for these tests.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"unit-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#unit-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Unit test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"They are tests that look at behavior of a single thing and are mostly used for services, utils, serializers, and controller actions. They are very useful for verifying interfaces of logic that need to be consistent regardless of how it will ultimately be used. Consequently, they are super handy if you know that your code will one day need to act a certain way, but nothing uses that functionality just yet, that you can be assured that it will be ready when the day arrives. Unit tests should be reasonably quick to create and fast to run, so completeness is often desirable in a unit test. Try to get all of the edge cases here rather than, say, in the Acceptance tests.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"integration-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#integration-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Integration test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"These look at interactions of multiple components (or other code encapsulations like a service and a component). They could be application tests or rendering tests for components. It is less clear when to use Integration tests vs. Acceptance or Unit tests except in the case of rendering tests (see below) for components. A lot of the existing integration tests for components in our codebase are the most basic of tests and are hardly modified from the blueprint. If there are things that will change how the component renders, we should ensure that those aspects are tested here.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"by-what-needs-to-run\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#by-what-needs-to-run\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"By what needs to run\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is the new classification of tests from Ember, but it doesn't really affect how the tests are named or organized. It does affect how the tests are instantiated, though.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"application-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#application-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Application test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Any test that needs the whole app booted.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"rendering-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#rendering-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Rendering test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Any test that requires rendering.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"unit-test\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#unit-test\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Unit test\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Any test that uses nothing other than the class/function/object it's testing.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/testing/template.hbs" } });
});
define("handbook/docs/troubleshooting/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "iTmTPWeL", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"troubleshooting\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Troubleshooting\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"So you're trying to do a thing and that thing turns into trouble!\\nThis page is a portal to the past -- with luck, someone has already\\nencountered your trouble and recorded how they shot it.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"What should you do?\"],[10],[0,\"\\n\"],[7,\"ol\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Take a moment to look out the window, breathe, and remember that\\nthe only meaning that exists is that which we create for ourselves.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Read the rest of this page and take actions that seem appropriate.\\nIf you solve your problem, skip to step 4.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Well, this portal can't help you. Try asking the Internet and/or individual\\npeople for help. When you solve your problem, come back here and:\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Pass your understanding into the future. Edit this page to add anything\\nyou learned that seems useful to future devs in your place. Try to be clear,\\nconcise, and considerate that their situation will not be exactly the same\\nas yours.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-troubleshooting-steps\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-troubleshooting-steps\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic troubleshooting steps\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Have you run \"],[7,\"code\"],[9],[0,\"yarn\"],[10],[0,\" lately?\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Have you tried turning it off and on again? Restart \"],[7,\"code\"],[9],[0,\"ember server\"],[10],[0,\" and/or\\nyour \"],[7,\"code\"],[9],[0,\"api\"],[10],[0,\"/\"],[7,\"code\"],[9],[0,\"web\"],[10],[0,\" containers, depending on the problem.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check out the latest \"],[7,\"code\"],[9],[0,\"develop\"],[10],[0,\" (or rebase/merge your branch with it),\\nsee if your trouble still exists.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"waffle-trouble\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#waffle-trouble\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Waffle trouble\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Waffle flags are cached, apparently. After you change them in the OSF admin,\\nit can take a few minutes for that change to be reflected in the API and the\\nweb server's routing decisions. If you see an infinite reload loop, it's\\nprobably this.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Check that \"],[7,\"code\"],[9],[0,\"meta.active_flags\"],[10],[0,\" at the root \"],[7,\"code\"],[9],[0,\"/v2/\"],[10],[0,\" endpoint matches your\\nexpectations. If not, restart your \"],[7,\"code\"],[9],[0,\"api\"],[10],[0,\" container.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"If you're being served a legacy OSF page when you've enabled the flag for\\nthe embosf'd page, or vice versa, restart your \"],[7,\"code\"],[9],[0,\"web\"],[10],[0,\" container.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/troubleshooting/template.hbs" } });
});
define("handbook/docs/visual-style/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Xuce4SwZ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"visual-style\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Visual Style\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"general-principles\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#general-principles\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"General principles\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"These are general guidelines that developers need to keep in mind when developing user interactions. They identify our priorities and UI development needs to take into consideration these principles.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"let-the-user-know-about-state-where-applicable\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#let-the-user-know-about-state-where-applicable\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Let the user know about state where applicable\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"When a state change in the UI is happening the user should be notified of some of these processes where it helps the user understand what's going on and differentiate the situation from a potential unresponsive or erroneous scenario.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"some-examples-\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#some-examples-\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Some examples:\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Items that are actionable need to be visually distinct (e.g. links, buttons, draggable items).\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Pending processes should be identified if taking too long. Pending processes are events that are expected to take a little time, anything that is expected to be observable by the user. For instance uploads and most saves have pending status while the action if being completed. Most often ajax call require the consideration for pending events since they include communication with server. How long after the action starts to show the message is up to the developer and varies considerably. The important point is to match user expectation about time and make sure they know what's going on.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"When page loads if there are still asynchronous components loading, a loading indicator needs to make that clear.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Normally actionable items that are non-actionable should be muted (greyed out).\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Tooltips should be used to explain states that do not otherwise make sense.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Actionable items should be protected against multiple hits (e.g. Delete buttons turning to muted Deleting...).\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"If using active states, the active component needs to be visually distinct, for instance in buttons, panels, tabs.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Toggle buttons should change to reflect the current state. For instance a collapsed item should have an icon that suggests opening and that icon should change when the state needs to suggest closing.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Utilize the \"],[7,\"a\"],[11,\"href\",\"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"cursor attribute\"],[10],[0,\" of CSS to change cursors on hover but only when this change makes sense. \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"default is for general purpose.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"pointer is for links and items that are clickable.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"move is for items that can be moved with drag already.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"row/col-resize To drag and resize horizontal or vertical items, content.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"let-the-user-know-about-errors-and-offer-alternatives-where-possible\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#let-the-user-know-about-errors-and-offer-alternatives-where-possible\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Let the user know about errors and offer alternatives where possible\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Sometimes user driven or connectivity based errors halt or make certain UI actions possible. The interface should provide alternatives and information\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Example with space limitation\"],[10],[0,\"\\n\"],[7,\"blockquote\"],[11,\"class\",\"docs-md__blockquote\"],[9],[7,\"p\"],[9],[0,\"Can't connect to Dropbox at the moment. [Learn more]\"],[10],[0,\"\\n\"],[10],[7,\"p\"],[9],[0,\"Example\"],[10],[0,\"\\n\"],[7,\"blockquote\"],[11,\"class\",\"docs-md__blockquote\"],[9],[7,\"p\"],[9],[0,\"We are having trouble connecting to the Dropbox server at the moment. \\nThis may be because their servers are not reachable or your internet connection may be down. \\nPlease try reloading this page or [read more about this error]\"],[10],[0,\"\\n\"],[10],[0,\"\\n      \"],[7,\"h3\"],[11,\"id\",\"be-consistent-about-ui-components\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#be-consistent-about-ui-components\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Be consistent about UI components\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"To the greatest extent possible, all our components should be using the exact same styling by using the OSF Style Guidelines. This means:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Buttons should look exactly the same in style, with color differences denoting similar meaning.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Color palette should be used in similar ways; (e.g. we should have a single highlight background color for all hover effects)\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Element use for common tasks should be the same, e.g. different sections within pages should not use tabs in one place and accordion menus in others if the target elements are exactly the same.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Different icons should not be used to mean the same thing and one icon should not be used for multiple meanings. Icon association should make sense to the task.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Responsive components should become responsive in similar ways. For instance if icons lose their labels in small views, that should be the case with all icons.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"utilize-empty-space-with-actionable-suggestions\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#utilize-empty-space-with-actionable-suggestions\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Utilize empty space with actionable suggestions\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"There are many areas where users don't have content available. In these cases their pages or elements will be empty. We can use these instances to offer actionable tasks with appropriate links.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Example:\"],[10],[0,\"\\n\"],[7,\"blockquote\"],[11,\"class\",\"docs-md__blockquote\"],[9],[7,\"p\"],[9],[0,\"You don't have any registrations at the moment.\\n[Learn more about Registrations] [Create a Registration]\"],[10],[0,\"\\n\"],[10],[0,\"\\n      \"],[7,\"h3\"],[11,\"id\",\"take-steps-to-make-website-functional-in-mobile-devices\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#take-steps-to-make-website-functional-in-mobile-devices\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Take steps to make website functional in mobile devices\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check \"],[7,\"a\"],[11,\"href\",\"http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"responsiveness\"],[10],[0,\" in every page.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make Header texts proportionally smaller in smaller devices, no need for an H1 in a phone.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make text that does not fit constrained widths end with ...\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make different versions for mobile buttons that have less text. - Make sure all images are responsive.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check show/hide relationships in mobile devices, often it's unnecessary.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check empty vertical space in rows.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check that horizontally listed items stack properly in narrow view.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Check that tables respond properly to narrow views, scrolling if necessary.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make sure touch and event based actions either work well or have fallbacks in mobile devices.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"take-steps-to-make-sure-the-website-is-functional-in-very-large-devices\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#take-steps-to-make-sure-the-website-is-functional-in-very-large-devices\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Take steps to make sure the website is functional in very large devices\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Where possible, let the user utilize the large workspace that they have by providing meaningful expansion of the space:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Expand tables, grids, and stacked components that have uniform items (e.g. galleries).\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Do not expand Text! Instead fit several columns.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Remove show/hide options to show everything as space allows, that reduces an extra step.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Stack similar content horizontally as columns.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Center content if not utilizing the entire width.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"improve-the-form-input-and-toggle-process-where-possible\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#improve-the-form-input-and-toggle-process-where-possible\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Improve the form input and toggle process where possible\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Follow these guidelines when making forms or add elements such as drop downs.\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"If your dropdown has few elements, consider another input or toggle method, like a button group or radio buttons.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make input elements large and text visible.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Uniformity in input elements is important, stick to themes or frameworks; if you are adding custom css to established framework css for inputs you are most likely doing it wrong.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Do not remove the visual separation of focus on input elements, but make it fit to your general theme.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Most of the time select and checkbox items are too small, consider increasing their size or generally make sure they fill your font's line height.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Make sure tab goes to the next item if there is a form with multiple items.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"If using JS for form inputs, bind Enter key.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Don't have a \\\"Clear Form\\\" button.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Avoid using too many borders in form structures. Alignment is a way to denote edges as well and inputs already have borders.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Use a good combination of placeholder and label for inputs, often one is enough, both are unnecessary. Don't repeat the label in the placeholder. Label is better for cross browser use.\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Tie your labels to your form elements with \\\"for\\\" so that when users click on the label the input gets selection.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ignore-these-rules-when-necessary\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ignore-these-rules-when-necessary\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Ignore these rules when necessary\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"There are times where these general practices may not make sense for rare instances. In those cases it is better UI practice to abandon convention and use custom solutions. These cases should be few and should require discussion.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/visual-style/template.hbs" } });
});
define("handbook/docs/written-style/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "a1RByIaH", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"written-style\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Written Style\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"clear-language\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#clear-language\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Clear language\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Where long form text is used it is best to use descriptive language.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Include a period at the end of all full sentences in body text (including instructional and warning text). Headings should not include puncuation.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"good-examples\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#good-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Good examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\\"Please follow the link to view this file.\\\"\\n\\\"The project you selected is not available at this time.\\\"\\n\\\"You have entered an incorrect name, please try again.\\\"\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"bad-examples\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#bad-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Bad examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\\"That's not right. Try again!\\\"//Too colloquial:\\n\\\"Go here.\\\" // Too curt\\n\\\"Error: undefined\\\" // Not human enough\\n\\\"Yay, your form is submitted, awesome!\\\"// Unnecessarily emotional\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"strong\"],[9],[0,\"Short form text\"],[10],[0,\" is supposed to be much more direct and refer to as specifically as possible the action of the item, for instance in buttons, labels.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"good-examples\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#good-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Good examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\\"Open\\\" \\\"Delete Multiple\\\" \\\"Keep Both\\\"\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"bad-examples\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#bad-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Bad examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\\"Open this file\\\" // No need to define what element the action is on\\n\\\"Delete everything\\\" // Too general\\n\\\"Name:\\\"// Not descriptive enough, full name, first name?\\n\\\"Cancel, Dismiss, Close\\\" // Should use uniform name for same action\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"strong\"],[9],[0,\"Don't use jargon\"],[10],[0,\" that our users will be unfamiliar with. Language that is used around the office is not necessarily the language that is most descriptive to our users. Use words and phrases that they will be most familiar with, in the context of the OSF.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"words-to-avoid\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#words-to-avoid\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Words to avoid\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Node\\nChild/parent\\nPointers\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"capitalization\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#capitalization\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Capitalization\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The OSF website uses two main capitalization styles.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"title-case\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#title-case\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Title case\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The first word is always capitalized. All other words are capitalized except articles and short conjunctions and prepositions (fewer than 5 letters).\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"when-to-use-title-case\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#when-to-use-title-case\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"When to use title case\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"All text in the top navigation bar (including dropdown text)\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Top level page titles (usually the heading with a h1 tag)\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"sentence-case\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#sentence-case\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Sentence case\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The first word is always capitalized. All other words are lowercase unless they are proper nouns or quoted titles.\"],[10],[0,\"\\n\\n      \"],[7,\"h4\"],[11,\"id\",\"when-to-use-sentence-case\"],[11,\"class\",\"docs-md__h4\"],[9],[7,\"a\"],[11,\"href\",\"#when-to-use-sentence-case\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"When to use sentence case\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Panel headings\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Modal titles\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Button text\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Form labels\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Input text\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Links\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"All other elements\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"em\"],[9],[0,\"When in doubt, use sentence case.\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[7,\"strong\"],[9],[0,\"Note\"],[10],[0,\": No element's text on the OSF should be completely lowercase. The first word in any element should always be capitalized.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"language-style\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#language-style\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Language style\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Follow the \"],[7,\"a\"],[11,\"href\",\"http://www.crockford.com/wrrrld/style.html\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Elements of Style\"],[10],[0,\" in writing in English across the OSF products. Especially important: Use the \"],[7,\"a\"],[11,\"href\",\"http://thewritepractice.com/why-you-need-to-be-using-oxford-commas/\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Oxford Comma\"],[10],[0,\".\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/docs/written-style/template.hbs" } });
});
define('handbook/engine', ['exports', 'ember-engines/engine', 'ember-load-initializers', 'handbook/config/environment', 'handbook/resolver'], function (exports, _engine, _emberLoadInitializers, _environment, _resolver) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var modulePrefix = _environment.default.modulePrefix;


    var Eng = _engine.default.extend({
        modulePrefix: modulePrefix,
        Resolver: _resolver.default,
        dependencies: {
            services: ['analytics', 'current-user', 'features', 'i18n', 'router', 'store', 'toast']
        },

        // HACK: ec-tailwind (used by ec-addon-docs) doesn't understand engines
        rootElement: 'body'
    });

    (0, _emberLoadInitializers.default)(Eng, modulePrefix);

    exports.default = Eng;
});
define.alias('ember-truth-helpers/helpers/and', 'handbook/helpers/and');
define.alias('ember-composable-helpers/helpers/append', 'handbook/helpers/append');
define.alias('osf-components/helpers/array', 'handbook/helpers/array');
define.alias('ember-cli-addon-docs/helpers/break-on', 'handbook/helpers/break-on');
define.alias('ember-bootstrap/helpers/bs-contains', 'handbook/helpers/bs-contains');
define.alias('ember-bootstrap/helpers/bs-eq', 'handbook/helpers/bs-eq');
define.alias('ember-cli-string-helpers/helpers/camelize', 'handbook/helpers/camelize');
define.alias('ember-concurrency/helpers/cancel-all', 'handbook/helpers/cancel-all');
define.alias('ember-cli-string-helpers/helpers/capitalize', 'handbook/helpers/capitalize');
define.alias('ember-composable-helpers/helpers/chunk', 'handbook/helpers/chunk');
define.alias('ember-cli-string-helpers/helpers/classify', 'handbook/helpers/classify');
define.alias('ember-composable-helpers/helpers/compact', 'handbook/helpers/compact');
define.alias('ember-composable-helpers/helpers/compute', 'handbook/helpers/compute');
define.alias('ember-composable-helpers/helpers/contains', 'handbook/helpers/contains');
define.alias('ember-cli-string-helpers/helpers/dasherize', 'handbook/helpers/dasherize');
define.alias('ember-composable-helpers/helpers/dec', 'handbook/helpers/dec');
define.alias('ember-composable-helpers/helpers/drop', 'handbook/helpers/drop');
define.alias('ember-power-select/helpers/ember-power-select-is-group', 'handbook/helpers/ember-power-select-is-group');
define.alias('ember-power-select/helpers/ember-power-select-is-selected', 'handbook/helpers/ember-power-select-is-selected');
define.alias('ember-power-select/helpers/ember-power-select-true-string-if-present', 'handbook/helpers/ember-power-select-true-string-if-present');
define.alias('ember-truth-helpers/helpers/equal', 'handbook/helpers/eq');
define.alias('ember-composable-helpers/helpers/filter-by', 'handbook/helpers/filter-by');
define.alias('ember-composable-helpers/helpers/filter', 'handbook/helpers/filter');
define.alias('ember-composable-helpers/helpers/find-by', 'handbook/helpers/find-by');
define.alias('ember-composable-helpers/helpers/flatten', 'handbook/helpers/flatten');
define.alias('osf-components/helpers/get-ancestor-descriptor', 'handbook/helpers/get-ancestor-descriptor');
define.alias('ember-composable-helpers/helpers/group-by', 'handbook/helpers/group-by');
define.alias('ember-truth-helpers/helpers/gt', 'handbook/helpers/gt');
define.alias('ember-truth-helpers/helpers/gte', 'handbook/helpers/gte');
define.alias('ember-composable-helpers/helpers/has-next', 'handbook/helpers/has-next');
define.alias('ember-composable-helpers/helpers/has-previous', 'handbook/helpers/has-previous');
define.alias('ember-href-to/helpers/href-to', 'handbook/helpers/href-to');
define.alias('ember-cli-string-helpers/helpers/html-safe', 'handbook/helpers/html-safe');
define.alias('ember-cli-string-helpers/helpers/humanize', 'handbook/helpers/humanize');
define.alias('ember-ignore-children-helper/helpers/ignore-children', 'handbook/helpers/ignore-children');
define.alias('ember-composable-helpers/helpers/inc', 'handbook/helpers/inc');
define.alias('ember-composable-helpers/helpers/intersect', 'handbook/helpers/intersect');
define.alias('ember-composable-helpers/helpers/invoke', 'handbook/helpers/invoke');
define.alias('ember-truth-helpers/helpers/is-array', 'handbook/helpers/is-array');
define.alias('ember-cli-clipboard/helpers/is-clipboard-supported', 'handbook/helpers/is-clipboard-supported');
define.alias('ember-truth-helpers/helpers/is-equal', 'handbook/helpers/is-equal');
define.alias('ember-composable-helpers/helpers/join', 'handbook/helpers/join');
define.alias('liquid-fire/helpers/lf-lock-model', 'handbook/helpers/lf-lock-model');
define.alias('liquid-fire/helpers/lf-or', 'handbook/helpers/lf-or');
define.alias('ember-css-modules/helpers/local-class', 'handbook/helpers/local-class');
define.alias('ember-cli-string-helpers/helpers/lowercase', 'handbook/helpers/lowercase');
define.alias('ember-truth-helpers/helpers/lt', 'handbook/helpers/lt');
define.alias('ember-truth-helpers/helpers/lte', 'handbook/helpers/lte');
define.alias('ember-composable-helpers/helpers/map-by', 'handbook/helpers/map-by');
define.alias('ember-composable-helpers/helpers/map', 'handbook/helpers/map');
define.alias('ember-responsive/helpers/media', 'handbook/helpers/media');
define.alias('ember-composable-helpers/helpers/next', 'handbook/helpers/next');
define.alias('ember-truth-helpers/helpers/not-equal', 'handbook/helpers/not-eq');
define.alias('ember-truth-helpers/helpers/not', 'handbook/helpers/not');
define.alias('ember-composable-helpers/helpers/object-at', 'handbook/helpers/object-at');
define.alias('ember-composable-helpers/helpers/optional', 'handbook/helpers/optional');
define.alias('ember-truth-helpers/helpers/or', 'handbook/helpers/or');
define.alias('ember-concurrency/helpers/perform', 'handbook/helpers/perform');
define.alias('ember-composable-helpers/helpers/pipe-action', 'handbook/helpers/pipe-action');
define.alias('ember-composable-helpers/helpers/pipe', 'handbook/helpers/pipe');
define('handbook/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define.alias('ember-composable-helpers/helpers/previous', 'handbook/helpers/previous');
define.alias('ember-composable-helpers/helpers/queue', 'handbook/helpers/queue');
define.alias('osf-components/helpers/range', 'handbook/helpers/range');
define.alias('ember-composable-helpers/helpers/reduce', 'handbook/helpers/reduce');
define.alias('ember-composable-helpers/helpers/reject-by', 'handbook/helpers/reject-by');
define.alias('ember-composable-helpers/helpers/repeat', 'handbook/helpers/repeat');
define.alias('ember-composable-helpers/helpers/reverse', 'handbook/helpers/reverse');
define.alias('ember-composable-helpers/helpers/shuffle', 'handbook/helpers/shuffle');
define('handbook/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define.alias('ember-composable-helpers/helpers/slice', 'handbook/helpers/slice');
define.alias('osf-components/helpers/slugify', 'handbook/helpers/slugify');
define.alias('ember-composable-helpers/helpers/sort-by', 'handbook/helpers/sort-by');
define('handbook/helpers/svg-jar', ['exports', 'ember-svg-jar/utils/make-helper', 'ember-svg-jar/utils/make-svg'], function (exports, _makeHelper, _makeSvg) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.svgJar = svgJar;


  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require('ember-svg-jar/inlined/' + assetId).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  exports.default = (0, _makeHelper.default)(svgJar);
});
define.alias('ember-i18n/helper', 'handbook/helpers/t');
define.alias('ember-composable-helpers/helpers/take', 'handbook/helpers/take');
define.alias('ember-concurrency/helpers/task', 'handbook/helpers/task');
define.alias('ember-cli-string-helpers/helpers/titleize', 'handbook/helpers/titleize');
define.alias('ember-composable-helpers/helpers/toggle-action', 'handbook/helpers/toggle-action');
define.alias('ember-composable-helpers/helpers/toggle', 'handbook/helpers/toggle');
define.alias('ember-cli-string-helpers/helpers/trim', 'handbook/helpers/trim');
define.alias('ember-cli-string-helpers/helpers/truncate', 'handbook/helpers/truncate');
define.alias('ember-cli-addon-docs/helpers/type-signature', 'handbook/helpers/type-signature');
define.alias('ember-cli-string-helpers/helpers/underscore', 'handbook/helpers/underscore');
define.alias('ember-composable-helpers/helpers/union', 'handbook/helpers/union');
define.alias('ember-cli-string-helpers/helpers/uppercase', 'handbook/helpers/uppercase');
define.alias('ember-cli-string-helpers/helpers/w', 'handbook/helpers/w');
define.alias('ember-composable-helpers/helpers/without', 'handbook/helpers/without');
define.alias('ember-truth-helpers/helpers/xor', 'handbook/helpers/xor');
define("handbook/index/index-content/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "WhkrwTNi", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"p\"],[9],[0,\"A front end for the \"],[7,\"a\"],[11,\"href\",\"https://osf.io\"],[11,\"title\",\"null\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"OSF\"],[10],[0,\" using Ember.js and TypeScript.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/index/index-content/template.hbs" } });
});
define("handbook/index/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "Hero": "_Hero_1im49w",
    "Content": "_Content_1im49w",
    "Link": "_Link_1im49w"
  };
});
define("handbook/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "xl/cDx7y", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Hero\"],[[\"from\"],[\"handbook/index/styles\"]]]]]],[9],[0,\"\\n    \"],[1,[27,\"docs-hero\",null,[[\"slimHeading\",\"strongHeading\",\"byline\"],[\"Emb\",\"OSF\",\"It's pronounced \\\"emboss\\\"\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"docs-container docs-md\"],[9],[0,\"\\n    \"],[7,\"section\"],[12,\"class\",[28,[[27,\"local-class\",[\"Content\"],[[\"from\"],[\"handbook/index/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[21,\"index/index-content\"],false],[0,\"\\n\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Link\"],[[\"from\"],[\"handbook/index/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"docs\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"                Read the docs\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/index/template.hbs" } });
});
define('handbook/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define.alias('ember-cli-addon-docs/initializers/alias-dummy-module', 'handbook/initializers/alias-dummy-module');
define('handbook/initializers/component-styles', ['exports', 'ember-component-css/pod-names', 'handbook/mixins/style-namespacing-extras'], function (exports, _podNames, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  var Component = Ember.Component,
      ComponentLookup = Ember.ComponentLookup,
      computed = Ember.computed,
      getOwner = Ember.getOwner;


  ComponentLookup.reopen({
    componentFor: function componentFor(name, owner) {
      owner = owner.hasRegistration ? owner : getOwner(this);

      if (_podNames.default[name] && !owner.hasRegistration('component:' + name)) {
        owner.register('component:' + name, Component);
      }
      return this._super.apply(this, arguments);
    }
  });

  Component.reopen(_styleNamespacingExtras.default, {
    componentCssClassName: computed({
      get: function get() {
        return _podNames.default[this.get('_componentIdentifier')] || '';
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('_shouldAddNamespacedClassName')) {
        this.classNames = this.classNames.concat(this.get('componentCssClassName'));
      }
    }
  });

  function initialize() {}

  exports.default = {
    name: 'component-styles',
    initialize: initialize
  };
});
define('handbook/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define.alias('ember-concurrency/initializers/ember-concurrency', 'handbook/initializers/ember-concurrency');
define('handbook/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('handbook/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define.alias('ember-keyboard/initializers/ember-keyboard-first-responder-inputs', 'handbook/initializers/ember-keyboard-first-responder-inputs');
define('handbook/initializers/ember-responsive-breakpoints', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _responsive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _responsive.default;
});
define.alias('ember-i18n-inject/initializers/i18n', 'handbook/initializers/i18n');
define.alias('ember-cli-addon-docs/initializers/inject-media', 'handbook/initializers/inject-media');
define('handbook/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("handbook/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('handbook/initializers/load-bootstrap-config', ['exports', 'handbook/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('handbook/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('handbook/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("handbook/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('handbook/instance-initializers/ember-href-to', ['exports', 'ember-href-to/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      return el;
    }
  }
  exports.default = {
    name: 'ember-href-to',
    initialize: function initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        var hrefToClickHandler = function _hrefToClickHandler(e) {
          var link = e.target.tagName === 'A' ? e.target : closestLink(e.target);
          if (link) {
            var hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler);

        // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.
        applicationInstance.reopen({
          willDestroy: function willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super.apply(this, arguments);
          }
        });
      }
    }
  };
});
define('handbook/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define.alias('ember-router-scroll/locations/router-scroll', 'handbook/locations/router-scroll');
define.alias('ember-component-css/mixins/style-namespacing-extras', 'handbook/mixins/style-namespacing-extras');
define.alias('ember-cli-addon-docs/models/class', 'handbook/models/class');
define.alias('ember-cli-addon-docs/models/component', 'handbook/models/component');
define.alias('ember-cli-addon-docs/models/module', 'handbook/models/module');
define.alias('ember-cli-addon-docs/models/project', 'handbook/models/project');
define("handbook/osf-components/tests/addon.lint-test", [], function () {
  "use strict";
});
define('handbook/osf-components/tests/addon/components/bs-alert/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/bs-alert');
  QUnit.test('addon/components/bs-alert/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/bs-alert/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/contributor-list/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/contributor-list');
  QUnit.test('addon/components/contributor-list/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/contributor-list/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/contributor-list/contributor/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/contributor-list/contributor');
  QUnit.test('addon/components/contributor-list/contributor/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/contributor-list/contributor/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/cookie-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/cookie-banner');
  QUnit.test('addon/components/cookie-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cookie-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/copyable-text/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/copyable-text');
  QUnit.test('addon/components/copyable-text/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/copyable-text/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/dashboard-item/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/dashboard-item');
  QUnit.test('addon/components/dashboard-item/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/dashboard-item/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/delete-button/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/delete-button');
  QUnit.test('addon/components/delete-button/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/delete-button/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/delete-node-modal/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/delete-node-modal');
  QUnit.test('addon/components/delete-node-modal/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/delete-node-modal/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/draft-registration-card/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/draft-registration-card');
  QUnit.test('addon/components/draft-registration-card/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/draft-registration-card/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/dropzone-widget/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/dropzone-widget');
  QUnit.test('addon/components/dropzone-widget/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/dropzone-widget/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/feedback-button/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/feedback-button');
  QUnit.test('addon/components/feedback-button/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/feedback-button/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-browser-item/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-browser-item');
  QUnit.test('addon/components/file-browser-item/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-browser-item/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-browser/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-browser');
  QUnit.test('addon/components/file-browser/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-browser/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-editor/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-editor');
  QUnit.test('addon/components/file-editor/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-editor/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-icon/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-icon');
  QUnit.test('addon/components/file-icon/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-icon/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-list-item/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-list-item');
  QUnit.test('addon/components/file-list-item/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-list-item/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-list/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-list');
  QUnit.test('addon/components/file-list/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-list/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-renderer/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-renderer');
  QUnit.test('addon/components/file-renderer/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-renderer/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-share-button/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-share-button');
  QUnit.test('addon/components/file-share-button/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-share-button/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/file-version/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/file-version');
  QUnit.test('addon/components/file-version/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-version/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/global-link-to/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/global-link-to');
  QUnit.test('addon/components/global-link-to/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/global-link-to/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/hyper-link/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/hyper-link');
  QUnit.test('addon/components/hyper-link/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/hyper-link/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/hyper-link/x-anchor/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/hyper-link/x-anchor');
  QUnit.test('addon/components/hyper-link/x-anchor/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/hyper-link/x-anchor/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/inline-list/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/inline-list');
  QUnit.test('addon/components/inline-list/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/inline-list/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/institution-carousel/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/institution-carousel');
  QUnit.test('addon/components/institution-carousel/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/institution-carousel/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/join-osf-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/join-osf-banner');
  QUnit.test('addon/components/join-osf-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/join-osf-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/loading-indicator/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/loading-indicator');
  QUnit.test('addon/components/loading-indicator/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/loading-indicator/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/maintenance-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/maintenance-banner');
  QUnit.test('addon/components/maintenance-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/maintenance-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/new-project-modal/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/new-project-modal');
  QUnit.test('addon/components/new-project-modal/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/new-project-modal/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/new-project-navigation-modal/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/new-project-navigation-modal');
  QUnit.test('addon/components/new-project-navigation-modal/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/new-project-navigation-modal/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/node-card/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/node-card');
  QUnit.test('addon/components/node-card/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-card/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/node-card/node-icon/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/node-card/node-icon');
  QUnit.test('addon/components/node-card/node-icon/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-card/node-icon/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/node-list/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/node-list');
  QUnit.test('addon/components/node-list/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-list/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/node-navbar/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/node-navbar');
  QUnit.test('addon/components/node-navbar/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-navbar/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/node-navbar/link/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/node-navbar/link');
  QUnit.test('addon/components/node-navbar/link/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-navbar/link/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/noteworthy-and-popular-project/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/noteworthy-and-popular-project');
  QUnit.test('addon/components/noteworthy-and-popular-project/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/noteworthy-and-popular-project/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-footer/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-footer');
  QUnit.test('addon/components/osf-footer/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-footer/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-header/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-header');
  QUnit.test('addon/components/osf-header/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-header/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-logo/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-logo');
  QUnit.test('addon/components/osf-logo/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-logo/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-mode-footer/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-mode-footer');
  QUnit.test('addon/components/osf-mode-footer/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-mode-footer/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-navbar/auth-dropdown/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-navbar/auth-dropdown');
  QUnit.test('addon/components/osf-navbar/auth-dropdown/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-navbar/auth-dropdown/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-navbar/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-navbar');
  QUnit.test('addon/components/osf-navbar/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-navbar/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/osf-navbar/x-links/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/osf-navbar/x-links');
  QUnit.test('addon/components/osf-navbar/x-links/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/osf-navbar/x-links/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/all/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list/all');
  QUnit.test('addon/components/paginated-list/all/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/all/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/base-data-component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list');
  QUnit.test('addon/components/paginated-list/base-data-component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/base-data-component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/has-many/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list/has-many');
  QUnit.test('addon/components/paginated-list/has-many/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/has-many/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/layout/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list/layout');
  QUnit.test('addon/components/paginated-list/layout/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/layout/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/x-item/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list/x-item');
  QUnit.test('addon/components/paginated-list/x-item/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/x-item/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/paginated-list/x-render/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/paginated-list/x-render');
  QUnit.test('addon/components/paginated-list/x-render/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/paginated-list/x-render/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/panel/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/panel');
  QUnit.test('addon/components/panel/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/panel/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/panel/x-body/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/panel/x-body');
  QUnit.test('addon/components/panel/x-body/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/panel/x-body/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/panel/x-footer/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/panel/x-footer');
  QUnit.test('addon/components/panel/x-footer/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/panel/x-footer/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/panel/x-heading/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/panel/x-heading');
  QUnit.test('addon/components/panel/x-heading/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/panel/x-heading/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/project-selector/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/project-selector');
  QUnit.test('addon/components/project-selector/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/project-selector/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/quickfile-nav/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/quickfile-nav');
  QUnit.test('addon/components/quickfile-nav/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/quickfile-nav/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/scheduled-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/scheduled-banner');
  QUnit.test('addon/components/scheduled-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/scheduled-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/scheduled-banner/x-maybe-link/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/scheduled-banner/x-maybe-link');
  QUnit.test('addon/components/scheduled-banner/x-maybe-link/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/scheduled-banner/x-maybe-link/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/sign-up-form/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/sign-up-form');
  QUnit.test('addon/components/sign-up-form/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sign-up-form/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/sign-up-policy/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/sign-up-policy');
  QUnit.test('addon/components/sign-up-policy/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sign-up-policy/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/simple-paginator/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/simple-paginator');
  QUnit.test('addon/components/simple-paginator/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/simple-paginator/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/sort-button/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/sort-button');
  QUnit.test('addon/components/sort-button/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sort-button/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/status-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/status-banner');
  QUnit.test('addon/components/status-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/status-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/success-icon/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/success-icon');
  QUnit.test('addon/components/success-icon/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/success-icon/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/tags-widget/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/tags-widget');
  QUnit.test('addon/components/tags-widget/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tags-widget/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/tos-consent-banner/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/tos-consent-banner');
  QUnit.test('addon/components/tos-consent-banner/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tos-consent-banner/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/base-component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input');
  QUnit.test('addon/components/validated-input/base-component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/base-component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/checkbox/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/checkbox');
  QUnit.test('addon/components/validated-input/checkbox/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/checkbox/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/checkboxes/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/checkboxes');
  QUnit.test('addon/components/validated-input/checkboxes/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/checkboxes/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/checkboxes/x-checkbox/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/checkboxes/x-checkbox');
  QUnit.test('addon/components/validated-input/checkboxes/x-checkbox/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/checkboxes/x-checkbox/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/custom/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/custom');
  QUnit.test('addon/components/validated-input/custom/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/custom/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/date/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/date');
  QUnit.test('addon/components/validated-input/date/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/date/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/power-select/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/power-select');
  QUnit.test('addon/components/validated-input/power-select/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/power-select/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/recaptcha/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/recaptcha');
  QUnit.test('addon/components/validated-input/recaptcha/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/recaptcha/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/text/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/text');
  QUnit.test('addon/components/validated-input/text/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/text/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/textarea/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/textarea');
  QUnit.test('addon/components/validated-input/textarea/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/textarea/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-input/x-input-wrapper/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-input/x-input-wrapper');
  QUnit.test('addon/components/validated-input/x-input-wrapper/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-input/x-input-wrapper/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/validated-model-form/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/validated-model-form');
  QUnit.test('addon/components/validated-model-form/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/validated-model-form/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/components/zoom-to-route/component.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/components/zoom-to-route');
  QUnit.test('addon/components/zoom-to-route/component.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/zoom-to-route/component.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/helpers/array.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/helpers');
  QUnit.test('addon/helpers/array.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/array.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/helpers/get-ancestor-descriptor.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/helpers');
  QUnit.test('addon/helpers/get-ancestor-descriptor.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/get-ancestor-descriptor.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/helpers/range.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/helpers');
  QUnit.test('addon/helpers/range.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/range.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/addon/helpers/slugify.lint-test', [], function () {
  'use strict';

  QUnit.module('TSLint - addon/helpers');
  QUnit.test('addon/helpers/slugify.ts should pass tslint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/slugify.ts should pass tslint.');
  });
});
define('handbook/osf-components/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/bs-alert/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/bs-alert/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/contributor-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/contributor-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/contributor-list/contributor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/contributor-list/contributor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/cookie-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cookie-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/copyable-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copyable-text/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dashboard-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dashboard-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/delete-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/delete-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/delete-node-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/delete-node-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/draft-registration-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/draft-registration-card/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dropzone-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dropzone-widget/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/feedback-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/feedback-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-browser-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-browser-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-browser/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-browser/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-editor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-editor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-list-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-renderer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-renderer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-share-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-share-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-version/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-version/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/global-link-to/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/global-link-to/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/hyper-link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hyper-link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/hyper-link/x-anchor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hyper-link/x-anchor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/inline-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/inline-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/institution-carousel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/institution-carousel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/join-osf-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/join-osf-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/loading-indicator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/loading-indicator/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/maintenance-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/maintenance-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/new-project-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-project-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/new-project-navigation-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-project-navigation-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-card/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-card/node-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-card/node-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-navbar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-navbar/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-navbar/link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-navbar/link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/noteworthy-and-popular-project/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/noteworthy-and-popular-project/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-logo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-logo/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-mode-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-mode-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/auth-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/auth-dropdown/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/x-links/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/x-links/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/all/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/all/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/has-many/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/has-many/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/layout/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/layout/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/x-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/x-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/x-render/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/x-render/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-body/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-body/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-heading/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-heading/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/project-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/project-selector/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/quickfile-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/quickfile-nav/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/scheduled-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduled-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/scheduled-banner/x-maybe-link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduled-banner/x-maybe-link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sign-up-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sign-up-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sign-up-policy/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sign-up-policy/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/simple-paginator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/simple-paginator/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sort-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sort-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/status-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/status-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/success-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/success-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/tags-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tags-widget/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/tos-consent-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tos-consent-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkbox/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkbox/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkboxes/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkboxes/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkboxes/x-checkbox/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkboxes/x-checkbox/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/custom/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/custom/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/date/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/power-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/power-select/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/recaptcha/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/recaptcha/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/text/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/textarea/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/textarea/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/x-input-wrapper/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/x-input-wrapper/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-model-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-model-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/zoom-to-route/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/zoom-to-route/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/array.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/get-ancestor-descriptor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/get-ancestor-descriptor.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/range.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/slugify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/slugify.js should pass ESLint\n\n');
  });
});
define.alias('osf-components/components/bs-alert/component', 'handbook/osf-components/tests/app/components/bs-alert/component');
define.alias('osf-components/components/contributor-list/component', 'handbook/osf-components/tests/app/components/contributor-list/component');
define.alias('osf-components/components/contributor-list/contributor/component', 'handbook/osf-components/tests/app/components/contributor-list/contributor/component');
define.alias('osf-components/components/cookie-banner/component', 'handbook/osf-components/tests/app/components/cookie-banner/component');
define.alias('osf-components/components/copyable-text/component', 'handbook/osf-components/tests/app/components/copyable-text/component');
define.alias('osf-components/components/dashboard-item/component', 'handbook/osf-components/tests/app/components/dashboard-item/component');
define.alias('osf-components/components/delete-button/component', 'handbook/osf-components/tests/app/components/delete-button/component');
define.alias('osf-components/components/delete-node-modal/component', 'handbook/osf-components/tests/app/components/delete-node-modal/component');
define.alias('osf-components/components/draft-registration-card/component', 'handbook/osf-components/tests/app/components/draft-registration-card/component');
define.alias('osf-components/components/dropzone-widget/component', 'handbook/osf-components/tests/app/components/dropzone-widget/component');
define.alias('osf-components/components/feedback-button/component', 'handbook/osf-components/tests/app/components/feedback-button/component');
define.alias('osf-components/components/file-browser-item/component', 'handbook/osf-components/tests/app/components/file-browser-item/component');
define.alias('osf-components/components/file-browser/component', 'handbook/osf-components/tests/app/components/file-browser/component');
define.alias('osf-components/components/file-editor/component', 'handbook/osf-components/tests/app/components/file-editor/component');
define.alias('osf-components/components/file-icon/component', 'handbook/osf-components/tests/app/components/file-icon/component');
define.alias('osf-components/components/file-list-item/component', 'handbook/osf-components/tests/app/components/file-list-item/component');
define.alias('osf-components/components/file-list/component', 'handbook/osf-components/tests/app/components/file-list/component');
define.alias('osf-components/components/file-renderer/component', 'handbook/osf-components/tests/app/components/file-renderer/component');
define.alias('osf-components/components/file-share-button/component', 'handbook/osf-components/tests/app/components/file-share-button/component');
define.alias('osf-components/components/file-version/component', 'handbook/osf-components/tests/app/components/file-version/component');
define.alias('osf-components/components/global-link-to/component', 'handbook/osf-components/tests/app/components/global-link-to/component');
define.alias('osf-components/components/hyper-link/component', 'handbook/osf-components/tests/app/components/hyper-link/component');
define.alias('osf-components/components/hyper-link/x-anchor/component', 'handbook/osf-components/tests/app/components/hyper-link/x-anchor/component');
define.alias('osf-components/components/inline-list/component', 'handbook/osf-components/tests/app/components/inline-list/component');
define.alias('osf-components/components/institution-carousel/component', 'handbook/osf-components/tests/app/components/institution-carousel/component');
define.alias('osf-components/components/join-osf-banner/component', 'handbook/osf-components/tests/app/components/join-osf-banner/component');
define.alias('osf-components/components/loading-indicator/component', 'handbook/osf-components/tests/app/components/loading-indicator/component');
define.alias('osf-components/components/maintenance-banner/component', 'handbook/osf-components/tests/app/components/maintenance-banner/component');
define.alias('osf-components/components/new-project-modal/component', 'handbook/osf-components/tests/app/components/new-project-modal/component');
define.alias('osf-components/components/new-project-navigation-modal/component', 'handbook/osf-components/tests/app/components/new-project-navigation-modal/component');
define.alias('osf-components/components/node-card/component', 'handbook/osf-components/tests/app/components/node-card/component');
define.alias('osf-components/components/node-card/node-icon/component', 'handbook/osf-components/tests/app/components/node-card/node-icon/component');
define.alias('osf-components/components/node-list/component', 'handbook/osf-components/tests/app/components/node-list/component');
define.alias('osf-components/components/node-navbar/component', 'handbook/osf-components/tests/app/components/node-navbar/component');
define.alias('osf-components/components/node-navbar/link/component', 'handbook/osf-components/tests/app/components/node-navbar/link/component');
define.alias('osf-components/components/noteworthy-and-popular-project/component', 'handbook/osf-components/tests/app/components/noteworthy-and-popular-project/component');
define.alias('osf-components/components/osf-footer/component', 'handbook/osf-components/tests/app/components/osf-footer/component');
define.alias('osf-components/components/osf-header/component', 'handbook/osf-components/tests/app/components/osf-header/component');
define.alias('osf-components/components/osf-logo/component', 'handbook/osf-components/tests/app/components/osf-logo/component');
define.alias('osf-components/components/osf-mode-footer/component', 'handbook/osf-components/tests/app/components/osf-mode-footer/component');
define.alias('osf-components/components/osf-navbar/auth-dropdown/component', 'handbook/osf-components/tests/app/components/osf-navbar/auth-dropdown/component');
define.alias('osf-components/components/osf-navbar/component', 'handbook/osf-components/tests/app/components/osf-navbar/component');
define.alias('osf-components/components/osf-navbar/x-links/component', 'handbook/osf-components/tests/app/components/osf-navbar/x-links/component');
define.alias('osf-components/components/paginated-list/all/component', 'handbook/osf-components/tests/app/components/paginated-list/all/component');
define.alias('osf-components/components/paginated-list/has-many/component', 'handbook/osf-components/tests/app/components/paginated-list/has-many/component');
define.alias('osf-components/components/paginated-list/layout/component', 'handbook/osf-components/tests/app/components/paginated-list/layout/component');
define.alias('osf-components/components/paginated-list/x-item/component', 'handbook/osf-components/tests/app/components/paginated-list/x-item/component');
define.alias('osf-components/components/paginated-list/x-render/component', 'handbook/osf-components/tests/app/components/paginated-list/x-render/component');
define.alias('osf-components/components/panel/component', 'handbook/osf-components/tests/app/components/panel/component');
define.alias('osf-components/components/panel/x-body/component', 'handbook/osf-components/tests/app/components/panel/x-body/component');
define.alias('osf-components/components/panel/x-footer/component', 'handbook/osf-components/tests/app/components/panel/x-footer/component');
define.alias('osf-components/components/panel/x-heading/component', 'handbook/osf-components/tests/app/components/panel/x-heading/component');
define.alias('osf-components/components/project-selector/component', 'handbook/osf-components/tests/app/components/project-selector/component');
define.alias('osf-components/components/quickfile-nav/component', 'handbook/osf-components/tests/app/components/quickfile-nav/component');
define.alias('osf-components/components/scheduled-banner/component', 'handbook/osf-components/tests/app/components/scheduled-banner/component');
define.alias('osf-components/components/scheduled-banner/x-maybe-link/component', 'handbook/osf-components/tests/app/components/scheduled-banner/x-maybe-link/component');
define.alias('osf-components/components/sign-up-form/component', 'handbook/osf-components/tests/app/components/sign-up-form/component');
define.alias('osf-components/components/sign-up-policy/component', 'handbook/osf-components/tests/app/components/sign-up-policy/component');
define.alias('osf-components/components/simple-paginator/component', 'handbook/osf-components/tests/app/components/simple-paginator/component');
define.alias('osf-components/components/sort-button/component', 'handbook/osf-components/tests/app/components/sort-button/component');
define.alias('osf-components/components/status-banner/component', 'handbook/osf-components/tests/app/components/status-banner/component');
define.alias('osf-components/components/success-icon/component', 'handbook/osf-components/tests/app/components/success-icon/component');
define.alias('osf-components/components/tags-widget/component', 'handbook/osf-components/tests/app/components/tags-widget/component');
define.alias('osf-components/components/tos-consent-banner/component', 'handbook/osf-components/tests/app/components/tos-consent-banner/component');
define.alias('osf-components/components/validated-input/checkbox/component', 'handbook/osf-components/tests/app/components/validated-input/checkbox/component');
define.alias('osf-components/components/validated-input/checkboxes/component', 'handbook/osf-components/tests/app/components/validated-input/checkboxes/component');
define.alias('osf-components/components/validated-input/checkboxes/x-checkbox/component', 'handbook/osf-components/tests/app/components/validated-input/checkboxes/x-checkbox/component');
define.alias('osf-components/components/validated-input/custom/component', 'handbook/osf-components/tests/app/components/validated-input/custom/component');
define.alias('osf-components/components/validated-input/date/component', 'handbook/osf-components/tests/app/components/validated-input/date/component');
define.alias('osf-components/components/validated-input/power-select/component', 'handbook/osf-components/tests/app/components/validated-input/power-select/component');
define.alias('osf-components/components/validated-input/recaptcha/component', 'handbook/osf-components/tests/app/components/validated-input/recaptcha/component');
define.alias('osf-components/components/validated-input/text/component', 'handbook/osf-components/tests/app/components/validated-input/text/component');
define.alias('osf-components/components/validated-input/textarea/component', 'handbook/osf-components/tests/app/components/validated-input/textarea/component');
define.alias('osf-components/components/validated-input/x-input-wrapper/component', 'handbook/osf-components/tests/app/components/validated-input/x-input-wrapper/component');
define.alias('osf-components/components/validated-model-form/component', 'handbook/osf-components/tests/app/components/validated-model-form/component');
define.alias('osf-components/components/zoom-to-route/component', 'handbook/osf-components/tests/app/components/zoom-to-route/component');
define.alias('osf-components/helpers/array', 'handbook/osf-components/tests/app/helpers/array');
define.alias('osf-components/helpers/get-ancestor-descriptor', 'handbook/osf-components/tests/app/helpers/get-ancestor-descriptor');
define.alias('osf-components/helpers/range', 'handbook/osf-components/tests/app/helpers/range');
define.alias('osf-components/helpers/slugify', 'handbook/osf-components/tests/app/helpers/slugify');
define("handbook/osf-components/tests/application/-components/verify-email-modal/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "D2crsbCA", "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"if\",[[27,\"and\",[[22,0,[\"shouldShowModal\"]],[22,0,[\"userEmail\"]]],null]],null,{\"statements\":[[4,\"bs-modal\",null,[[\"backdropClose\"],[false]],{\"statements\":[[4,\"component\",[[22,1,[\"header\"]]],[[\"closeButton\"],[false]],{\"statements\":[[0,\"            \"],[7,\"h3\"],[11,\"class\",\"modal-title\"],[9],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"header\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"data-test-verify-email-prompt\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"body\"]]],[[\"email\"],[[22,0,[\"userEmail\",\"emailAddress\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"footer\"]]],null,{\"statements\":[[4,\"bs-button\",[[23,[\"data-test-deny-email\"]]],[[\"disabled\",\"onClick\"],[[22,0,[\"disableButtons\"]],[27,\"action\",[[22,0,[]],[22,0,[\"deny\"]]],null]]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"denyButton\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-button\",[[23,[\"data-test-verify-email\"]]],[[\"type\",\"disabled\",\"onClick\"],[\"primary\",[22,0,[\"disableButtons\"]],[27,\"action\",[[22,0,[]],[22,0,[\"verify\"]]],null]]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"verifyButton\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/application/-components/verify-email-modal/template.hbs" } });
});
define('handbook/osf-components/tests/application/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('application/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/application/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "IGavsB46", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"head-layout\"],false],[0,\"\\n\"],[1,[27,\"title\",[[27,\"t\",[\"general.OSF\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Application\"],[[\"from\"],[\"handbook/osf-components/tests/application/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"disableHeader\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"theme\",\"isProvider\"]]],null,{\"statements\":[[0,\"            \"],[7,\"style\"],[9],[0,\"\\n\"],[0,\"                @import url('\"],[1,[23,[\"theme\",\"stylesheet\"]],false],[0,\"');\\n\"],[0,\"            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"id\",\"branded-navbar\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[21,\"osf-header\"],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,0,[\"shouldShowVerifyEmailModals\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,\"application/-components/verify-email-modal\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[12,\"class\",[28,[\"Application__page \",[27,\"local-class\",[\"Application__page\"],[[\"from\"],[\"handbook/osf-components/tests/application/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[21,\"osf-footer\"],false],[0,\"\\n    \"],[1,[21,\"cookie-banner\"],false],[0,\"\\n    \"],[1,[21,\"osf-mode-footer\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/application/template.hbs" } });
});
define('handbook/osf-components/tests/dashboard/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('dashboard/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dashboard/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/dashboard/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "smyuZ7bQ", "block": "{\"symbols\":[\"project\",\"project\",\"node\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"dashboard.page_title\"],null]],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"modalOpen\"]]],null,{\"statements\":[[4,\"if\",[[22,0,[\"showNewNodeNavigation\"]]],null,{\"statements\":[[0,\"        \"],[5,\"new-project-navigation-modal\",[],[[\"@node\",\"@closeModal\",\"@title\",\"@afterStayHere\"],[[22,0,[\"newNode\"]],[27,\"action\",[[22,0,[]],[22,0,[\"closeModal\"]]],null],[27,\"t\",[\"new_project.success_message\"],null],[27,\"action\",[[22,0,[]],[22,0,[\"afterStay\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[5,\"new-project-modal\",[],[[\"@afterProjectCreated\",\"@analyticsContext\",\"@closeModal\"],[[27,\"action\",[[22,0,[]],[22,0,[\"projectCreated\"]]],null],\"Dashboard\",[27,\"action\",[[22,0,[]],[22,0,[\"closeModal\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[1,[21,\"scheduled-banner\"],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quickSearch\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container p-t-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row m-t-lg \",[27,\"if\",[[27,\"or\",[[27,\"gt\",[[23,[\"nodes\",\"length\"]],9],null],[23,[\"loading\"]]],null],[27,\"local-class\",[\"quick-search-contents\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]],null]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                        \"],[7,\"h2\"],[11,\"class\",\"col-xs-9\"],[9],[1,[27,\"t\",[\"dashboard.title\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"m-b-lg col-xs-3\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n                                \"],[7,\"button\"],[11,\"data-test-create-project-modal-button\",\"\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"openModal\"],null]],[11,\"class\",\"btn btn-success m-t-md f-w-xl\"],[3,\"action\",[[22,0,[]],\"click\",\"button\",\"Dashboard - create_new_project\"],[[\"target\"],[[23,[\"analytics\"]]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.create_new_project_button\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"quick-project\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"initialLoad\"]]],null,{\"statements\":[[0,\"                                \"],[1,[21,\"loading-indicator\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"hasNodes\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"m-b-sm text-center\"],[9],[0,\"\\n                                            \"],[7,\"div\"],[12,\"class\",[28,[\"m-v-sm \",[27,\"local-class\",[\"quick-search-input\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[12,\"placeholder\",[28,[[27,\"t\",[\"dashboard.quicksearch.search\"],null]]]],[12,\"oninput\",[27,\"perform\",[[23,[\"filterNodes\"]]],[[\"value\"],[\"target.value\"]]]],[11,\"data-test-quick-search-input\",\"\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                                            \"],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                        \"],[7,\"p\"],[11,\"class\",\"text-center f-w-lg\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.other_links\"],null],false],[10],[0,\"\\n                                        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-table\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                            \"],[7,\"div\"],[12,\"class\",[28,[\"row m-t-md \",[27,\"local-class\",[\"node-col-headers\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-6\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.title\"],null],false],[10],[0,\"\\n                                                        \"],[1,[27,\"sort-button\",null,[[\"sortAction\",\"sort\",\"sortBy\",\"class\"],[[27,\"action\",[[22,0,[]],\"sortProjects\"],null],[23,[\"sort\"]],\"title\",\"sort_button\"]]],false],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-3\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.contributors\"],null],false],[10],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-3\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.modified\"],null],false],[10],[0,\"\\n                                                        \"],[1,[27,\"sort-button\",null,[[\"sortAction\",\"sort\",\"sortBy\",\"class\"],[[27,\"action\",[[22,0,[]],\"sortProjects\"],null],[23,[\"sort\"]],\"last_logged\",\"sort_button\"]]],false],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                            \"],[10],[0,\"\\n                                            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                                                \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-12 f-w-xl text-right \",[27,\"local-class\",[\"node-sort-dropdown\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                    \"],[7,\"select\"],[12,\"aria-label\",[27,\"t\",[\"general.sort\"],null]],[12,\"onchange\",[27,\"action\",[[22,0,[]],\"sortProjects\"],[[\"value\"],[\"target.value\"]]]],[9],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[23,[\"sort\"]],\"title\"],null],\"selected\"],null]],[11,\"value\",\"title\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.title\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.asc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[23,[\"sort\"]],\"-title\"],null],\"selected\"],null]],[11,\"value\",\"-title\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.title\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.desc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[23,[\"sort\"]],\"last_logged\"],null],\"selected\"],null]],[11,\"value\",\"last_logged\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.modified\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.asc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[23,[\"sort\"]],\"-last_logged\"],null],\"selected\"],null]],[11,\"value\",\"-last_logged\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.modified\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.desc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                            \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"nodes\"]]],null,{\"statements\":[[0,\"                                                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"if\",[[23,[\"loading\"]],[27,\"local-class\",[\"loading-dashboard-item\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]],null]]]],[9],[0,\"\\n                                                    \"],[1,[27,\"dashboard-item\",null,[[\"node\",\"data-test-dashboard-item\"],[[22,3,[]],[22,3,[\"id\"]]]]],false],[0,\"\\n                                                \"],[10],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"                                                    \"],[1,[21,\"loading-indicator\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                                    \"],[7,\"br\"],[9],[10],[0,\"\\n                                                    \"],[7,\"i\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_results\"],null],false],[10],[0,\"\\n                                                    \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                                        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"hasMore\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                                                \"],[1,[21,\"loading-indicator\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                                \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n                                                    \"],[7,\"button\"],[12,\"aria-label\",[27,\"t\",[\"new_project.more\"],null]],[11,\"class\",\"col-sm-12 text-muted\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"more\"],null]],[11,\"data-test-load-more\",\"\"],[3,\"action\",[[22,0,[]],\"click\",\"button\",\"Dashboard - load_nodes\"],[[\"target\"],[[23,[\"analytics\"]]]]],[9],[0,\"\\n                                                        \"],[1,[27,\"fa-icon\",[\"caret-down\"],[[\"class\"],[[27,\"concat\",[[27,\"local-class\",[\"load-nodes\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]],\" m-b-xl\"],null]]]],false],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"quick-project\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"col-sm-12 text-center\"],[9],[0,\"\\n                                            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_projects.line1\"],null],false],[10],[0,\"\\n                                            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_projects.line2\"],null],false],[10],[0,\"\\n                                            \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/dashboard/quicksearch-min-5823e8396fbf07da40ba5f753abe4035.png\"],[12,\"alt\",[28,[[27,\"t\",[\"dashboard.quicksearch.no_projects.preview_alt\"],null]]]],[11,\"class\",\"img-responsive center-block\"],[9],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"hidden-xs \",[27,\"local-class\",[\"bg-web institutions-panel\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[1,[27,\"institution-carousel\",[[23,[\"data-test-institution-carousel\"]]],[[\"institutions\"],[[23,[\"institutions\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"newAndNoteworthy\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.description\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"public-projects-box\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[11,\"data-test-noteworthy-list\",\"\"],[9],[0,\"\\n                                \"],[7,\"h4\"],[11,\"class\",\"m-b-md\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.new_and_noteworthy\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"failedLoading-noteworthy\"]]],null,{\"statements\":[[0,\"                                    \"],[1,[27,\"t\",[\"dashboard.noteworthy.failed_noteworthy\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"noteworthy\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[23,[\"noteworthy\"]]],null,{\"statements\":[[0,\"                                            \"],[1,[27,\"noteworthy-and-popular-project\",null,[[\"project\",\"data-test-noteworthy-project\"],[[22,2,[]],[22,2,[\"id\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[0,\"                                        \"],[1,[21,\"loading-indicator\"],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"public-projects-box\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[11,\"data-test-popular-list\",\"\"],[9],[0,\"\\n                                \"],[7,\"h4\"],[11,\"class\",\"m-b-md\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.most_popular\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"failedLoading-popular\"]]],null,{\"statements\":[[0,\"                                    \"],[1,[27,\"t\",[\"dashboard.noteworthy.failed_popular\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"popular\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[23,[\"popular\"]]],null,{\"statements\":[[0,\"                                            \"],[1,[27,\"noteworthy-and-popular-project\",null,[[\"project\",\"data-test-popular-project\"],[[22,1,[]],[22,1,[\"id\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},{\"statements\":[[0,\"                                        \"],[1,[21,\"loading-indicator\"],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"text-center col-sm-12\"],[9],[0,\"\\n                            \"],[7,\"a\"],[11,\"role\",\"link\"],[11,\"href\",\"/search/?q=*\"],[11,\"class\",\"btn btn-default m-v-lg\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - noteworthy_search\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"dashboard.noteworthy.search_more\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"bg-web meetings\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"p-v-sm\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering\"],[9],[0,\"\\n                                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.meetings.title\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering m-t-lg\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"text-bigger\"],[9],[1,[27,\"t\",[\"dashboard.meetings.description\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center\"],[9],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[7,\"a\"],[12,\"class\",[28,[\"btn btn-banner btn-success btn-lg btn-success-high-contrast m-v-xl f-w-xl \",[27,\"local-class\",[\"btn-banner\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[11,\"role\",\"link\"],[11,\"href\",\"/meetings/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - meetings_button\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.meetings.button\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"preprints\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"p-v-sm\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering\"],[9],[0,\"\\n                                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.preprints.title\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering m-t-lg\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"text-bigger\"],[9],[1,[27,\"t\",[\"dashboard.preprints.description\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center\"],[9],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[7,\"a\"],[12,\"class\",[28,[\"btn btn-banner btn-success btn-lg btn-success-high-contrast m-v-xl f-w-xl \",[27,\"local-class\",[\"btn-banner\"],[[\"from\"],[\"handbook/osf-components/tests/dashboard/styles\"]]]]]],[11,\"role\",\"link\"],[11,\"href\",\"/preprints/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - preprints_button\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.preprints.button\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/dashboard/template.hbs" } });
});
define("handbook/osf-components/tests/error-no-api/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "cKPxU0Ov", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"error_no_api.title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"error_no_api.body\"],[[\"supportEmail\"],[[23,[\"supportEmail\"]]]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/error-no-api/template.hbs" } });
});
define('handbook/osf-components/tests/guid-file/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-file/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-file/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-file/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "73NhHCWr", "block": "{\"symbols\":[\"version\",\"modal\"],\"statements\":[[1,[27,\"title\",[[23,[\"model\",\"file\",\"name\"]]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[1,[27,\"quickfile-nav\",null,[[\"user\",\"onQuickfiles\"],[[23,[\"model\",\"user\"]],false]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__title\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"\\n                \"],[1,[23,[\"model\",\"file\",\"name\"]],false],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__version-link\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[11,\"role\",\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"revision\"],null]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"file_detail.version.title\"],[[\"version-number\"],[[23,[\"mfrVersion\"]]]]],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__buttons\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"id\",\"toggleBar\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"btn-toolbar m-t-md\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"canDelete\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                            \"],[7,\"button\"],[11,\"data-test-delete-button\",\"\"],[11,\"class\",\"btn btn-sm btn-default\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"openDeleteModal\"],null]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"general.delete\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[7,\"button\"],[11,\"data-test-download-button\",\"\"],[11,\"class\",\"btn btn-sm btn-primary\"],[12,\"onclick\",[27,\"unless\",[[23,[\"edit\"]],[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Quick Files - Download\"],[[\"target\"],[[23,[\"analytics\"]]]]]],null]],[3,\"action\",[[22,0,[]],\"download\",[23,[\"model\",\"file\",\"currentVersion\"]]]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"general.download\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[1,[27,\"file-share-button\",null,[[\"file\"],[[23,[\"model\",\"file\"]]]]],false],[0,\"\\n                    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"isEditableFile\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group btn-group-sm m-t-xs\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"canEdit\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\"],[12,\"class\",[28,[\"btn btn-default disabled \",[27,\"local-class\",[\"TitleBar__button-label\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[1,[27,\"t\",[\"file_detail.toggle\"],null],false],[10],[0,\"\\n                                \"],[7,\"button\"],[12,\"class\",[28,[\"btn \",[27,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"view\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null],\"btn-primary\",\"btn-default\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"view\"],null]],[9],[1,[27,\"t\",[\"general.view\"],null],false],[10],[0,\"\\n                                \"],[7,\"button\"],[12,\"class\",[28,[\"btn \",[27,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"edit\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null],\"btn-primary\",\"btn-default\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"edit\"],null]],[9],[1,[27,\"t\",[\"general.edit\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[7,\"button\"],[12,\"class\",[28,[\"btn \",[27,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"view\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null],\"btn-primary\",\"btn-default\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"view\"],null]],[9],[1,[27,\"t\",[\"general.view\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                            \"],[7,\"button\"],[12,\"class\",[28,[\"btn btn-sm \",[27,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"view\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null],\"btn-primary\",\"btn-default\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"view\"],null]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"general.view\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[7,\"button\"],[11,\"data-test-revisions-tab\",\"\"],[12,\"class\",[28,[\"btn btn-sm \",[27,\"if\",[[27,\"eq\",[[23,[\"show\"]],\"revision\"],null],\"btn-primary\",\"btn-default\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"changeView\",\"revision\"],null]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"general.revisions\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"bs-modal\",null,[[\"open\",\"onSubmit\",\"onHidden\"],[[23,[\"deleteModalOpen\"]],[27,\"action\",[[22,0,[]],\"delete\"],null],[27,\"action\",[[22,0,[]],\"closeDeleteModal\"],null]]],{\"statements\":[[4,\"component\",[[22,2,[\"header\"]]],null,{\"statements\":[[0,\"            \"],[7,\"h4\"],[11,\"class\",\"modal-title\"],[9],[1,[27,\"t\",[\"file_detail.delete_file.question\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"file_detail.delete_file.confirm\"],[[\"file-name\"],[[23,[\"model\",\"file\",\"name\"]]]]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"footer\"]]],null,{\"statements\":[[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"close\"]]],null],\"default\"]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"submit\"]]],null],\"danger\"]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"general.delete\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"Main\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-md-3 \",[27,\"local-class\",[\"Sidebar\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[1,[27,\"file-list\",null,[[\"items\",\"filter\",\"selectedFile\",\"user\",\"unselect\",\"openOnSelect\",\"updateFilter\",\"openFile\"],[[23,[\"files\"]],[23,[\"filter\"]],[23,[\"model\",\"file\"]],[23,[\"model\",\"user\"]],false,true,[27,\"perform\",[[23,[\"updateFilter\"]]],null],[27,\"action\",[[22,0,[]],\"openFile\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[22,0,[\"canEdit\"]],[22,0,[\"file\",\"tags\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"panel panel-default \",[27,\"local-class\",[\"TagsPanel\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[\"panel-heading clearfix \",[27,\"local-class\",[\"TagsPanel__heading\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"file_detail.tags\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@addTag\",\"@removeTag\",\"@readOnly\",\"@showAdd\",\"@analyticsScope\"],[[22,0,[\"file\",\"tags\"]],[27,\"action\",[[22,0,[]],[22,0,[\"addTag\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"removeTag\"]]],null],[27,\"not\",[[22,0,[\"canEdit\"]]],null],[22,0,[\"canEdit\"]],\"Quick Files\"]]],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"tags_clear\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-9\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"view\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"id\",\"mfrIframeParent\"],[12,\"class\",[28,[[27,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null],[23,[\"canEdit\"]]],null],\"col-sm-6\"],null]]]],[9],[0,\"\\n                    \"],[1,[27,\"file-renderer\",null,[[\"download\",\"version\",\"height\",\"width\"],[[23,[\"model\",\"file\",\"links\",\"download\"]],[23,[\"mfrVersion\"]],\"700\",\"99%\"]]],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"and\",[[23,[\"isEditableFile\"]],[23,[\"canEdit\"]],[27,\"or\",[[27,\"eq\",[[23,[\"show\"]],\"edit\"],null],[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null]],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"concat\",[\"panel panel-default \",[27,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"show\"]],\"view_edit\"],null],[23,[\"canEdit\"]]],null],\"col-sm-6\"],null]],null],\" \",[27,\"local-class\",[\"EditPanel\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[27,\"not\",[[27,\"eq\",[[27,\"await\",[[23,[\"fileText\"]]],null],null],null]],null]],null,{\"statements\":[[4,\"file-editor\",null,[[\"fileText\",\"save\"],[[27,\"await\",[[23,[\"fileText\"]]],null],[27,\"action\",[[22,0,[]],\"save\"],null]]],{\"statements\":[],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"show\"]],\"revision\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"panel panel-default \",[27,\"local-class\",[\"RevisionsPanel\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[11,\"id\",\"revisionsPanel\"],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[\"clearfix \",[27,\"local-class\",[\"TagsPanel__heading\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"general.revisions\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                        \"],[7,\"table\"],[12,\"class\",[28,[\"table table-responsive \",[27,\"local-class\",[\"RevisionsPanel__table\"],[[\"from\"],[\"handbook/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                            \"],[7,\"thead\"],[9],[0,\"\\n                                \"],[7,\"tr\"],[9],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"col-md-4\"],[9],[1,[27,\"t\",[\"file_detail.version.id\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"col-md-6\"],[9],[1,[27,\"t\",[\"general.date\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"colspan\",\"2\"],[11,\"class\",\"col-xs-2\"],[9],[1,[27,\"t\",[\"general.download\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"hidden-md hidden-sm hidden-xs\"],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"general.md5\"],null],false],[0,\"\\n                                        \"],[7,\"span\"],[9],[0,\"\\n                                            \"],[1,[27,\"fa-icon\",[\"question-circle\"],null],false],[0,\"\\n\"],[4,\"bs-popover\",null,[[\"triggerEvents\",\"placement\"],[\"hover\",\"top\"]],{\"statements\":[[0,\"                                                \"],[1,[27,\"t\",[\"file_detail.md5_description\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"hidden-md hidden-sm hidden-xs\"],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"general.sha2\"],null],false],[0,\"\\n                                        \"],[7,\"span\"],[9],[0,\"\\n                                            \"],[1,[27,\"fa-icon\",[\"question-circle\"],null],false],[0,\"\\n\"],[4,\"bs-popover\",null,[[\"triggerEvents\",\"placement\"],[\"hover\",\"top\"]],{\"statements\":[[0,\"                                                \"],[1,[27,\"t\",[\"file_detail.sha2_description\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"await\",[[23,[\"fileVersions\"]]],null]],null,{\"statements\":[[0,\"                                    \"],[1,[27,\"file-version\",null,[[\"version\",\"download\",\"url\",\"currentVersion\",\"versionChange\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"download\"],null],[23,[\"model\",\"file\",\"links\",\"download\"]],[23,[\"mfrVersion\"]],[27,\"action\",[[22,0,[]],\"versionChange\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-file/template.hbs" } });
});
define('handbook/osf-components/tests/guid-node/forks/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-node/forks/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-node/forks/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-node/forks/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Fwb0EOfF", "block": "{\"symbols\":[\"list\",\"fork\",\"m\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"forks.page_title\"],[[\"nodeTitle\"],[[23,[\"model\",\"taskInstance\",\"value\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Forks\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"bs-modal\",null,[[\"open\",\"onSubmit\",\"onHide\"],[[23,[\"newModal\"]],[27,\"action\",[[22,0,[]],\"newFork\"],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]]],{\"statements\":[[4,\"component\",[[22,3,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[7,\"button\"],[12,\"aria-label\",[27,\"t\",[\"general.close\"],null]],[11,\"class\",\"close\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]],[3,\"action\",[[22,0,[]],\"click\",\"button\",\"Dashboard - New Project - close_modal\"],[[\"target\"],[[23,[\"analytics\"]]]]],[9],[0,\"\\n                \"],[1,[27,\"fa-icon\",[\"times\"],[[\"size\"],[\"sm\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"forks.create_fork_modal\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,3,[\"footer\"]]],null,{\"statements\":[[0,\"            \"],[4,\"bs-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]]],{\"statements\":[[1,[27,\"t\",[\"general.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[27,\"action\",[[22,0,[]],[22,3,[\"submit\"]]],null],\"info\"]],{\"statements\":[[1,[27,\"t\",[\"forks.fork\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"    \"],[1,[27,\"delete-node-modal\",null,[[\"delete\",\"openModal\",\"closeModal\",\"nodeType\"],[[27,\"action\",[[22,0,[]],\"delete\"],null],[23,[\"deleteModal\"]],[27,\"action\",[[22,0,[]],\"closeDeleteModal\"],null],[23,[\"nodeType\"]]]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"page-header visible-xs \",[27,\"local-class\",[\"Forks__header\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-300\"],[9],[1,[27,\"t\",[\"forks.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"Forks__nav\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"guid-node.analytics\",[23,[\"node\",\"id\"]]],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Project Forks - forks.back\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"            \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\" \"],[1,[27,\"t\",[\"forks.back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__nav__link\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[1,[27,\"t\",[\"forks.info\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__forks\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[23,[\"model\",\"taskInstance\"]],\"forks\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"reloadList\"]]],null]],null],[23,[\"forksQueryParams\"]],\"Project Forks\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"node-card\",null,[[\"node\",\"delete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[23,[\"openDeleteModal\"]],[22,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"empty\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__placeholder\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"forks.no_forks\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__new-fork\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"m-md\"],[9],[0,\"\\n\"],[4,\"bs-button\",null,[[\"type\",\"disabled\",\"onClick\"],[\"success\",[23,[\"loadingNew\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],true],null]]],{\"statements\":[[4,\"if\",[[23,[\"loadingNew\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.loading_new\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.new\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-node/forks/template.hbs" } });
});
define('handbook/osf-components/tests/guid-node/registrations/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-node/registrations/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-node/registrations/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-node/registrations/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "a0zHud54", "block": "{\"symbols\":[\"modal\",\"modal\",\"schema\",\"placeholder\",\"tab\",\"list\",\"draftRegistration\",\"nl\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"node.registrations.page_title\"],[[\"nodeTitle\"],[[22,0,[\"node\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"RegistrationsContainer\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-registrations-container\",\"\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-sm-8\"],[9],[0,\"\\n\"],[4,\"bs-tab\",null,[[\"activeId\",\"onChange\"],[[23,[\"activeTab\"]],[27,\"action\",[[22,0,[]],[23,[\"changeTab\"]]],null]]],{\"statements\":[[4,\"component\",[[22,5,[\"pane\"]]],[[\"id\",\"title\"],[\"registrations\",[27,\"t\",[\"node.registrations.registrations\"],null]]],{\"statements\":[[0,\"                    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"RegistrationsPane\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-registrations-pane\",\"\"],[9],[0,\"\\n\"],[4,\"node-list\",null,[[\"modelTaskInstance\",\"relationshipName\",\"showTags\",\"analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"registrations\",true,\"Project Registrations\"]],{\"statements\":[[4,\"component\",[[22,8,[\"empty\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"p\"],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.no_registrations\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[22,0,[\"node\",\"currentUserIsContributor\"]],[27,\"not\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null]],null]],null,{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"node.registrations.only_admins_can_initiate\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.start_new\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.learn_more\"],[[\"learnMoreLink\"],[\"http://help.osf.io/m/registrations/l/524205-register-your-project\"]]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[8]},null],[0,\"                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[4,\"component\",[[22,5,[\"pane\"]]],[[\"id\",\"title\"],[\"drafts\",[27,\"t\",[\"node.registrations.draft_registrations\"],null]]],{\"statements\":[[0,\"                        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"RegistrationsPane\"],[[\"from\"],[\"handbook/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-draft-registrations-pane\",\"\"],[9],[0,\"\\n                            \"],[7,\"ul\"],[11,\"class\",\"list-group\"],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"draftRegistrations\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"reloadDrafts\"]]],null]],null],[22,0,[\"draftsQueryParams\"]],\"Project Draft Registrations\"]],{\"statements\":[[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[0,\"                                        \"],[5,\"draft-registration-card\",[],[[\"@draftRegistration\",\"@onDelete\"],[[22,7,[]],[27,\"action\",[[22,0,[]],[22,6,[\"doReload\"]],1],null]]]],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"empty\"]]],null,{\"statements\":[[0,\"                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.no_drafts\"],null],false],[10],[0,\"\\n                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.start_new\"],null],false],[10],[0,\"\\n                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.learn_more\"],[[\"learnMoreLink\"],[\"http://help.osf.io/m/registrations/l/524205-register-your-project\"]]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[6]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[5]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"col-xs-3 col-sm-4\"],[9],[0,\"\\n\"],[4,\"bs-button\",[[23,[\"data-test-new-registration-button\"]]],[[\"type\",\"onClick\"],[\"success\",[27,\"action\",[[22,0,[]],[23,[\"openNewModal\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"node.registrations.new\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-modal\",[[23,[\"data-test-new-registration-modal\"]]],[[\"size\",\"open\",\"onSubmit\",\"onHidden\"],[\"lg\",[23,[\"newModalOpen\"]],[27,\"action\",[[22,0,[]],\"createDraft\"],null],[27,\"action\",[[22,0,[]],[23,[\"closeNewModal\"]]],null]]],{\"statements\":[[4,\"component\",[[22,2,[\"header\"]],[23,[\"data-test-new-registration-modal-header\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"h4\"],[11,\"class\",\"NewRegistrationModal__header\"],[9],[1,[27,\"t\",[\"node.registrations.new_registration_modal.title\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"body\"]],[23,[\"data-test-new-registration-modal-body\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"p\"],[11,\"class\",\"NewRegistrationModal__info\"],[9],[1,[27,\"t\",[\"node.registrations.new_registration_modal.info\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"NewRegistrationModal__schema-list\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"getRegistrationSchemas\",\"isRunning\"]]],null,{\"statements\":[[4,\"content-placeholders\",null,null,{\"statements\":[[0,\"                                    \"],[1,[27,\"component\",[[22,4,[\"list\"]]],[[\"items\"],[8]]],false],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"schemas\"]]],null,{\"statements\":[[0,\"                                        \"],[7,\"li\"],[12,\"data-test-new-registration-modal-schema\",[22,3,[\"name\"]]],[9],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\",\"changed\"],[[22,3,[]],[23,[\"selectedSchema\"]],[27,\"action\",[[22,0,[]],[23,[\"schemaChanged\"]]],null]]],{\"statements\":[[0,\"                                                \"],[7,\"div\"],[9],[0,\"\\n                                                    \"],[1,[22,3,[\"name\"]],false],[0,\"\\n                                                    \"],[7,\"span\"],[9],[0,\"\\n                                                        \"],[1,[27,\"fa-icon\",[\"info-circle\"],null],false],[0,\"\\n                                                        \"],[4,\"bs-tooltip\",null,null,{\"statements\":[[1,[22,3,[\"schema\",\"description\"]],false]],\"parameters\":[]},null],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                        \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                                \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"footer\"]],[23,[\"data-test-new-registration-modal-footer\"]]],null,{\"statements\":[[0,\"                        \"],[4,\"bs-button\",[[23,[\"data-test-new-registration-modal-cancel-button\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],[22,2,[\"close\"]]],null]]],{\"statements\":[[1,[27,\"t\",[\"general.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n                        \"],[4,\"bs-button\",[[23,[\"data-test-new-registration-modal-create-draft-button\"]]],[[\"onClick\",\"type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"submit\"]]],null],\"info\"]],{\"statements\":[[1,[27,\"t\",[\"node.registrations.new_registration_modal.create\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[4,\"bs-modal\",[[23,[\"data-test-prereg-challenge-modal\"]]],[[\"size\",\"open\",\"onSubmit\",\"onHidden\"],[\"lg\",[23,[\"preregModalOpen\"]],[27,\"action\",[[22,0,[]],\"createDraft\"],null],[27,\"action\",[[22,0,[]],[23,[\"closePreregModal\"]]],null]]],{\"statements\":[[4,\"component\",[[22,1,[\"header\"]],[23,[\"data-test-prereg-challenge-modal-header\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"h3\"],[11,\"class\",\"PreRegChallengeModal__title\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.title\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"body\"]],[23,[\"data-test-prereg-challenge-modal-body\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"h2\"],[11,\"class\",\"PreRegChallengeModal__notice\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.notice\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"row m-t-xl\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"col-lg-10 col-lg-offset-1\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"PreRegChallengeModal__eligibility\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.eligibility\"],[[\"approvedJournalLink\"],[[23,[\"preregLinks\",\"approvedJournal\"]]]]],false],[10],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"PreRegChallengeModal__info\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.info\"],[[\"learnMoreLink\"],[[23,[\"preregLinks\",\"learnMore\"]]]]],false],[10],[0,\"\\n                                \"],[7,\"ol\"],[11,\"class\",\"PreRegChallengeModal__list\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.list\"],[[\"eligibleJournalLink\",\"embargoedCountriesLink\",\"termsLink\"],[[23,[\"preregLinks\",\"eligibleJournal\"]],[23,[\"preregLinks\",\"embargoedCountries\"]],[23,[\"preregLinks\",\"terms\"]]]]],false],[10],[0,\"\\n                                \"],[7,\"label\"],[11,\"class\",\"PreRegChallengeModal__consent\"],[9],[1,[27,\"input\",[[23,[\"data-test-prereg-challenge-modal-consent-checkbox\"]]],[[\"type\",\"change\"],[\"checkbox\",[27,\"action\",[[22,0,[]],[23,[\"togglePreregConsent\"]]],null]]]],false],[0,\" \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.consent\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"footer\"]],[23,[\"data-test-prereg-challenge-modal-footer\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"col-lg-10 col-lg-offset-1\"],[9],[0,\"\\n                                \"],[4,\"bs-button\",[[23,[\"data-test-prereg-challenge-modal-cancel-button\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],[22,1,[\"close\"]]],null]]],{\"statements\":[[1,[27,\"t\",[\"general.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n                                \"],[4,\"bs-button\",[[23,[\"data-test-prereg-challenge-modal-continue-button\"]]],[[\"onClick\",\"type\",\"disabled\"],[[27,\"action\",[[22,0,[]],[22,1,[\"submit\"]]],null],\"info\",[27,\"not\",[[23,[\"preregConsented\"]]],null]]],{\"statements\":[[1,[27,\"t\",[\"node.registrations.prereg_modal.continue\"],null],false]],\"parameters\":[]},null],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"isComponentRootAdmin\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"node.registrations.register_entire_project\"],[[\"rootNodeTitle\"],[[22,0,[\"node\",\"root\",\"title\"]]]]],false],[0,\"\\n\"],[4,\"link-to\",[\"guid-node.registrations\",[22,0,[\"node\",\"root\",\"id\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"node.registrations.here\"],null],false]],\"parameters\":[]},null],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-node/registrations/template.hbs" } });
});
define("handbook/osf-components/tests/guid-node/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "spwb4jwu", "block": "{\"symbols\":[],\"statements\":[[4,\"unless\",[[23,[\"model\",\"taskInstance\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"node-navbar\",null,[[\"node\"],[[23,[\"model\",\"taskInstance\",\"value\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[1,[21,\"outlet\"],false],[0,\"\\n\"],[1,[21,\"join-osf-banner\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-node/template.hbs" } });
});
define("handbook/osf-components/tests/guid-preprint/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "w/jOu+ET", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[1,[23,[\"model\",\"taskInstance\",\"value\",\"title\"]],false],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-preprint/template.hbs" } });
});
define('handbook/osf-components/tests/guid-registration/forks/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-registration/forks/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-registration/forks/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-registration/forks/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "/fyXc8gP", "block": "{\"symbols\":[\"list\",\"fork\",\"m\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"forks.page_title\"],[[\"nodeTitle\"],[[23,[\"model\",\"taskInstance\",\"value\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Forks\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"bs-modal\",null,[[\"open\",\"onSubmit\",\"onHide\"],[[23,[\"newModal\"]],[27,\"action\",[[22,0,[]],\"newFork\"],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]]],{\"statements\":[[4,\"component\",[[22,3,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[7,\"button\"],[12,\"aria-label\",[27,\"t\",[\"general.close\"],null]],[11,\"class\",\"close\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]],[3,\"action\",[[22,0,[]],\"click\",\"button\",\"Dashboard - New Project - close_modal\"],[[\"target\"],[[23,[\"analytics\"]]]]],[9],[0,\"\\n                \"],[1,[27,\"fa-icon\",[\"times\"],[[\"size\"],[\"sm\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"forks.create_fork_modal\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,3,[\"footer\"]]],null,{\"statements\":[[0,\"            \"],[4,\"bs-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],false],null]]],{\"statements\":[[1,[27,\"t\",[\"general.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[27,\"action\",[[22,0,[]],[22,3,[\"submit\"]]],null],\"info\"]],{\"statements\":[[1,[27,\"t\",[\"forks.fork\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"    \"],[1,[27,\"delete-node-modal\",null,[[\"delete\",\"openModal\",\"closeModal\",\"nodeType\"],[[27,\"action\",[[22,0,[]],\"delete\"],null],[23,[\"deleteModal\"]],[27,\"action\",[[22,0,[]],\"closeDeleteModal\"],null],[23,[\"nodeType\"]]]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"page-header visible-xs \",[27,\"local-class\",[\"Forks__header\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-300\"],[9],[1,[27,\"t\",[\"forks.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"Forks__nav\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"guid-registration.analytics\",[23,[\"node\",\"id\"]]],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Registration Forks - forks.back\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"            \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\" \"],[1,[27,\"t\",[\"forks.back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__nav__link\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[1,[27,\"t\",[\"forks.info\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__forks\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[23,[\"model\",\"taskInstance\"]],\"forks\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"reloadList\"]]],null]],null],[23,[\"forksQueryParams\"]],\"Registration Forks\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"node-card\",null,[[\"node\",\"delete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[23,[\"openDeleteModal\"]],[22,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"empty\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__placeholder\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"forks.no_forks\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__new-fork\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"m-md\"],[9],[0,\"\\n\"],[4,\"bs-button\",null,[[\"type\",\"disabled\",\"onClick\"],[\"success\",[23,[\"loadingNew\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newModal\"]]],null],true],null]]],{\"statements\":[[4,\"if\",[[23,[\"loadingNew\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.loading_new\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.new\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-registration/forks/template.hbs" } });
});
define('handbook/osf-components/tests/guid-registration/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-registration/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-registration/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-registration/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2JQMVzOK", "block": "{\"symbols\":[],\"statements\":[[4,\"unless\",[[23,[\"model\",\"taskInstance\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"node-navbar\",null,[[\"node\"],[[23,[\"model\",\"taskInstance\",\"value\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Registrations__watermarked\"],[[\"from\"],[\"handbook/osf-components/tests/guid-registration/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container alert alert-info\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"registration.project_alert\"],[[\"projectId\"],[[23,[\"projectId\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-registration/template.hbs" } });
});
define("handbook/osf-components/tests/guid-user/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "RvUUq1If", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[1,[23,[\"model\",\"taskInstance\",\"value\",\"fullName\"]],false],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-user/index/template.hbs" } });
});
define('handbook/osf-components/tests/guid-user/quickfiles/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-user/quickfiles/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-user/quickfiles/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/guid-user/quickfiles/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "V5WBYuOy", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"quickfiles.title\"],[[\"user-name\"],[[23,[\"user\",\"fullName\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[1,[27,\"quickfile-nav\",null,[[\"user\",\"onQuickfiles\"],[[23,[\"user\"]],true]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row container \",[27,\"local-class\",[\"Content\"],[[\"from\"],[\"handbook/osf-components/tests/guid-user/quickfiles/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"canEdit\"]]],null,{\"statements\":[[0,\"            \"],[7,\"h5\"],[9],[7,\"i\"],[9],[1,[27,\"t\",[\"quickfiles.description\"],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"height: 14px;\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[1,[27,\"file-browser\",null,[[\"user\",\"items\",\"filter\",\"sort\",\"canEdit\",\"newProject\",\"openFile\",\"updateFilter\",\"dropZoneId\",\"deleteFiles\",\"moveFile\",\"renameFile\",\"addFile\"],[[23,[\"user\"]],[23,[\"files\"]],[23,[\"filter\"]],[23,[\"sort\"]],[23,[\"canEdit\"]],[23,[\"newProject\"]],[27,\"action\",[[22,0,[]],\"openFile\"],null],[27,\"perform\",[[23,[\"updateFilter\"]]],null],\"quickfiles-dropzone\",[27,\"perform\",[[23,[\"deleteFiles\"]]],null],[27,\"perform\",[[23,[\"moveFile\"]]],null],[27,\"perform\",[[23,[\"renameFile\"]]],null],[27,\"perform\",[[23,[\"addFile\"]]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"feedback-button\",null,[[\"text\",\"pageName\"],[[27,\"t\",[\"quickfiles.feedback_dialog_text\"],null],[23,[\"pageName\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-user/quickfiles/template.hbs" } });
});
define("handbook/osf-components/tests/guid-user/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "jwQvtGaj", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/guid-user/template.hbs" } });
});
define('handbook/osf-components/tests/home/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('home/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/home/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "iUo59RM0", "block": "{\"symbols\":[\"featuresColumn\",\"i\",\"feature\",\"modal\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"home.title\"],null]],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"goodbye\"]]],null,{\"statements\":[[4,\"bs-alert\",[[23,[\"data-test-goodbye-banner\"]]],[[\"type\",\"classNames\",\"onDismiss\",\"class\"],[\"success\",\"text-center\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Home - dismiss_alert\"],[[\"target\"],[[23,[\"analytics\"]]]]],[27,\"concat\",[[27,\"local-class\",[\"goodbye\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]],null]]],{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"home.alert_logged_out\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"bs-modal\",null,[[\"open\",\"backdrop\",\"onHidden\"],[[23,[\"modalOpen\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"modalOpen\"]]],null],false],null]]],{\"statements\":[[4,\"component\",[[22,4,[\"header\"]]],null,{\"statements\":[[0,\"        \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"home.youtube_modal_title\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"body\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"ember-youtube\",null,[[\"ytid\",\"playerVars\"],[[23,[\"youtubeId\"]],[23,[\"playerVars\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null],[7,\"div\"],[11,\"id\",\"home-hero\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container text-center\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"network-bg\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n        \"],[7,\"h1\"],[12,\"class\",[28,[[27,\"local-class\",[\"hero-brand\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.brand\"],null],false],[10],[0,\"\\n        \"],[7,\"h3\"],[12,\"class\",[28,[[27,\"local-class\",[\"hero-tagline\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.tagline\"],null],false],[10],[0,\"\\n        \"],[1,[27,\"osf-logo\",null,[[\"animate\"],[true]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"signUp\"],[11,\"class\",\"anchor\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"hero-signup\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-sm-6 hidden-xs\"],[9],[0,\"\\n                    \"],[7,\"a\"],[11,\"class\",\"youtube\"],[12,\"href\",[28,[\"//www.youtube.com/watch?v=\",[21,\"youtubeId\"]]]],[12,\"aria-label\",[28,[[27,\"t\",[\"home.youtube_label\"],null]]]],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"modalOpen\"]]],null],true]],[3,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - youtube_video\"],[[\"target\"],[[23,[\"analytics\"]]]]],[9],[0,\"\\n                        \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-play\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/screenshot-0b7d40737bea16f820ff2fe1f5c73fd6.png\"],[11,\"class\",\"img-responsive\"],[11,\"id\",\"screenshot\"],[12,\"alt\",[28,[[27,\"t\",[\"home.osf_screenshot_alt\"],null]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-6 \",[27,\"local-class\",[\"sign-up-div\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.signup_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"id\",\"signUpScope\"],[9],[0,\"\\n                        \"],[1,[27,\"sign-up-form\",[[23,[\"data-test-sign-up-form\"]]],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"grey-pullout space-top space-bottom\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"space-bottom\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 text-center\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"\\n                \"],[7,\"strong\"],[9],[1,[27,\"t\",[\"home.collaboration\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.management\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"feature-1\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-cloud icon-feature\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.structured_projects_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.structured_projects_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.secure_cloud\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-group icon-feature\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.control_access_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.control_access_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.control_access_span\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-workflow icon-feature\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.workflow_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.workflow_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.workflow_span\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"student-wrap\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"student-image\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quote\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"main\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.student_main\"],null],false],[10],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"attrib\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.student_attrib\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-2 space-top space-bottom\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-12 text-center \",[27,\"local-class\",[\"headline\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.integrations_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"integrations\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/dropbox-e4e3059d89c393d22227a57283c88a7f.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_dropbox\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/github-1726b376138f10f88a356bf68c6bf5e6.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_github\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/amazon-4981231206692d93388986f82dfa6d91.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_amazon\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/box-982fd696b759cc755ed9772fd08273db.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_box\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"integrations\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/google-e7a2b515fd37a51754a8c25387fff13b.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_google\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/figshare-14c9facb8b84bdfc0a0fefab05b9c11e.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_figshare\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/dataverse-82fcc61b4583b516290077ed599ecca1.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_dataverse\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/mendeley-ae299e6acac6003cafe0a605cc89fb96.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_mendeley\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-3\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row space-top\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-12 text-center space-bottom\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.features_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row space-bottom\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"features\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-6 text-\",[27,\"if\",[[22,2,[]],\"left\",\"right\"],null]]]],[9],[0,\"\\n\"],[4,\"each\",[[22,1,[]]],null,{\"statements\":[[0,\"                        \"],[7,\"h3\"],[9],[1,[27,\"t\",[[27,\"concat\",[\"home.features_\",[22,3,[]],\"_title\"],null]],null],false],[10],[0,\"\\n                        \"],[7,\"p\"],[9],[1,[27,\"t\",[[27,\"concat\",[\"home.features_\",[22,3,[]],\"_paragraph\"],null]],null],false],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-4\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row text-center \",[27,\"local-class\",[\"space-top space-bottom\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 col-md-offset-1\"],[9],[0,\"\\n                \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-earth\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.global_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.global_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"/explore/activity/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - explore_activity\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"home.global_link\"],null],false],[10],[0,\"\\n                    \"],[7,\"span\"],[12,\"class\",[28,[\"label label-warning \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.global_label\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 col-md-offset-1\"],[9],[0,\"\\n                \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-nonprofit\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.non_profit_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.non_profit_paragraph1\"],null],false],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"https://cos.io/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - cos_webpage\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"home.non_profit_link\"],null],false],[10],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.non_profit_paragraph2\"],null],false],[0,\"\\n                    \"],[7,\"span\"],[12,\"class\",[28,[\"label label-success \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.non_profit_label\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"space-top space-bottom feature-5\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-12 text-center\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.users_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-4 col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user2-1bf0ee128e31ea923498a2df846d297a.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_1_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-8\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_1_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_1_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_1_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row hidden-xs hidden-sm\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-7 col-md-offset-2\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_2_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_2_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_2_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user3-b1fa97c51de86215545366b643e95639.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_2_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row hidden-xs hidden-sm\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user4-267acdfd6b79295d429909a464e6dbd9.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_3_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-7\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_3_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_3_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_3_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"space-top space-bottom feature-6\"],[[\"from\"],[\"handbook/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[0,\"\\n                    \"],[7,\"strong\"],[9],[1,[27,\"t\",[\"home.free_title1\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"home.free_title2\"],null],false],[10],[0,\"\\n                \"],[7,\"a\"],[11,\"href\",\"#signUp\"],[11,\"class\",\"btn btn-info btn-lg\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - goto_signup\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"home.free_link\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 hidden-xs hidden-sm\"],[9],[0,\"\\n                \"],[1,[27,\"osf-logo\",null,[[\"double\"],[true]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/home/template.hbs" } });
});
define('handbook/osf-components/tests/institutions/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('institutions/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'institutions/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/institutions/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "uoqAHOvV", "block": "{\"symbols\":[\"institution\"],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"institutions.title\"],null]],null],false],[0,\"\\n\"],[1,[21,\"scheduled-banner\"],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__page\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block Institutions__header\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"text-center m-t-lg col-xs-12\"],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__header-logo\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[10],[0,\"\\n                    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"institutions.description\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block__link\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[11,\"href\",\"https://cos.io/our-products/osf-institutions/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Header - Read more\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"institutions.read_more\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__browser\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container p-t-lg\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row m-t-lg\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__table\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n                                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                                    \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-3 \",[27,\"local-class\",[\"Institutions__sorting\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"institutions.title\"],null],false],[0,\"\\n                                        \"],[1,[27,\"sort-button\",null,[[\"sortAction\",\"sort\",\"sortBy\"],[[27,\"action\",[[22,0,[]],\"sort\"],null],[23,[\"sortOrder\"]],\"title\"]]],false],[0,\"\\n                                    \"],[10],[0,\"\\n                                    \"],[7,\"div\"],[11,\"class\",\"col-xs-9 filter-input\"],[9],[0,\"\\n                                        \"],[1,[27,\"input\",[[27,\"html-attributes\",null,[[\"aria-label\"],[[27,\"t\",[\"institutions.search_placeholder\"],null]]]]],[[\"value\",\"type\",\"class\",\"placeholder\",\"keyPress\"],[[23,[\"textValue\"]],\"text\",\"form-control\",[27,\"t\",[\"institutions.search_placeholder\"],null],[27,\"perform\",[[23,[\"trackFilter\"]]],null]]]],false],[0,\"\\n                                    \"],[10],[0,\"\\n                                \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"institutions\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"a\"],[12,\"class\",[28,[\"m-v-sm row \",[27,\"local-class\",[\"Institutions__table__item\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[12,\"href\",[28,[[22,1,[\"id\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Visit institution\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"col-xs-3\"],[9],[0,\"\\n                                            \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__logo\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[12,\"alt\",[28,[[22,1,[\"name\"]]]]],[12,\"src\",[28,[[22,1,[\"logoPath\"]]]]],[9],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                        \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-9 \",[27,\"local-class\",[\"Institutions__table__title\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[7,\"span\"],[9],[1,[22,1,[\"name\"]],false],[10],[10],[0,\"\\n                                    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"hasMore\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__more\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[11,\"role\",\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"next\"],null]],[9],[0,\"\\n                                        \"],[1,[27,\"fa-icon\",[\"chevron-down\"],[[\"class\"],[\"Institutions__pagination\"]]],false],[0,\"\\n                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block Institutions__footer\"],[[\"from\"],[\"handbook/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"text-center col-xs-12\"],[9],[0,\"\\n                    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"institutions.footer\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[11,\"href\",\"https://cos.io/contact\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Footer - Contact us\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"institutions.contact_us\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/institutions/template.hbs" } });
});
define("handbook/osf-components/tests/not-found/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "+ZR6cNjO", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"not_found.title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"not_found.body\"],[[\"supportEmail\"],[[23,[\"supportEmail\"]]]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/not-found/template.hbs" } });
});
define("handbook/osf-components/tests/quickfiles/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "eSZhSJJ7", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[1,[27,\"t\",[\"quickfiles.transition_auth\"],null],false],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/quickfiles/template.hbs" } });
});
define('handbook/osf-components/tests/register/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('register/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'register/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/register/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZMHM6F1C", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"routes.register.sign_up\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-t-xl m-b-xl\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"p-md bg-color-light \",[27,\"local-class\",[\"sign-up-container\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"h3\"],[11,\"class\",\"m-sm\"],[9],[1,[27,\"t\",[\"routes.register.create_a_free_account\"],null],false],[10],[0,\"\\n            \"],[7,\"h4\"],[11,\"class\",\"m-md\"],[9],[1,[27,\"t\",[\"routes.register.sign_up_using\"],null],false],[10],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"sign-up-buttons\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-orcid-button\",\"\"],[12,\"href\",[28,[[21,\"orcidUrl\"],\"#show_login\"]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Sign up - ORCID\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                    \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__logo\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[11,\"src\",\"/ember-osf-web/assets/images/register/orcid-logo-1a839a5c3c91523236e4ab4e97f29da1.png\"],[12,\"alt\",[27,\"t\",[\"routes.register.orcid\"],null]],[9],[10],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__label\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[9],[1,[27,\"t\",[\"routes.register.orcid\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-institution-button\",\"\"],[12,\"href\",[21,\"institutionUrl\"]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Sign up - Institution\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                    \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__logo\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[11,\"src\",\"/ember-osf-web/assets/images/register/institution-logo-a7f3300c65845fec6021186ccc48504d.png\"],[12,\"alt\",[27,\"t\",[\"routes.register.institution\"],null]],[9],[10],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__label\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[9],[1,[27,\"t\",[\"routes.register.institution\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n            \"],[7,\"hr\"],[12,\"class\",[28,[[27,\"local-class\",[\"hr-text\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[11,\"data-content\",\"OR\"],[9],[10],[0,\"\\n\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"m-sm \",[27,\"local-class\",[\"sign-up-form\"],[[\"from\"],[\"handbook/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n                \"],[5,\"sign-up-form\",[],[[],[]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/register/template.hbs" } });
});
define('handbook/osf-components/tests/settings/developer-apps/-components/app-card/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/-components/app-card/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/-components/app-card/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/developer-apps/-components/app-card/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "5OGhbzBS", "block": "{\"symbols\":[\"placeholder\",\"@developerApp\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"DeveloperAppCard\"],[[\"from\"],[\"handbook/osf-components/tests/settings/developer-apps/-components/app-card/styles\"]]]]]],[12,\"data-test-developer-app-card\",[22,2,[\"id\"]]],[9],[0,\"\\n\"],[4,\"if\",[[22,2,[]]],null,{\"statements\":[[4,\"link-to\",[\"settings.developer-apps.edit\",[22,2,[\"id\"]]],[[\"data-test-developer-app-link\"],[[22,2,[\"id\"]]]],{\"statements\":[[0,\"            \"],[1,[22,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"content-placeholders\",null,[[\"class\"],[[27,\"concat\",[[27,\"local-class\",[\"DeveloperAppCard__placeholder\"],[[\"from\"],[\"handbook/osf-components/tests/settings/developer-apps/-components/app-card/styles\"]]]],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,1,[\"heading\"]]],[[\"subtitle\"],[false]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[0,\"\\n    \"],[1,[27,\"delete-button\",null,[[\"small\",\"delete\",\"disabled\",\"analyticsScope\",\"modalTitle\",\"modalBody\"],[true,[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[27,\"not\",[[22,2,[]]],null],\"Settings - Developer apps\",[27,\"t\",[\"settings.developer-apps.confirmDelete.title\"],[[\"appName\"],[[22,2,[\"name\"]]]]],[27,\"t\",[\"settings.developer-apps.confirmDelete.body\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/-components/app-card/template.hbs" } });
});
define("handbook/osf-components/tests/settings/developer-apps/-components/client-secret/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "I+tKZ/aa", "block": "{\"symbols\":[],\"statements\":[[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientSecretDescription\"],null],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"copyable-text\",[[23,[\"data-test-client-secret\"]]],[[\"text\",\"disabled\",\"analyticsLabel\"],[[27,\"if\",[[22,0,[\"shouldShowSecret\"]],[22,0,[\"developerApp\",\"clientSecret\"]],\"*********************\"],null],[27,\"not\",[[22,0,[\"shouldShowSecret\"]]],null],\"Settings - Developer apps - Copy client secret\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"bs-button\",[[23,[\"data-test-toggle-client-secret\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"toggleShowSecret\"]]],null]]],{\"statements\":[[4,\"if\",[[22,0,[\"shouldShowSecret\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"eye-slash\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.hideSecret\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"eye\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.showSecret\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"delete-button\",[[23,[\"data-test-reset-client-secret\"]]],[[\"delete\",\"analyticsScope\",\"buttonLabel\",\"confirmButtonText\",\"modalTitle\",\"errorMessage\"],[[27,\"action\",[[22,0,[]],[22,0,[\"resetSecret\"]]],null],\"Settings - Developer apps - Reset client secret\",[27,\"t\",[\"settings.developer-apps.resetSecret.label\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.label\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.modalTitle\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.error\"],null]]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.resetSecret.description\"],null],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.resetSecret.confirm\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/-components/client-secret/template.hbs" } });
});
define("handbook/osf-components/tests/settings/developer-apps/create/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "czXDHvqV", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-developer-apps\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps - Create - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[10],[0,\"\\n\\n\"],[4,\"validated-model-form\",null,[[\"modelName\",\"onSave\",\"analyticsScope\"],[\"developer-app\",[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],\"Settings - Developer apps - Create\"]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-name\"]]],[[\"valuePath\",\"label\"],[\"name\",[27,\"t\",[\"settings.developer-apps.appName\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-homepage\"]]],[[\"valuePath\",\"label\"],[\"homeUrl\",[27,\"t\",[\"settings.developer-apps.appHomepage\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"textarea\"]],[23,[\"data-test-developer-app-description\"]]],[[\"valuePath\",\"label\"],[\"description\",[27,\"t\",[\"settings.developer-apps.appDescription\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-callback-url\"]]],[[\"valuePath\",\"label\"],[\"callbackUrl\",[27,\"t\",[\"settings.developer-apps.appCallbackUrl\"],null]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"bs-button\",[[23,[\"data-test-create-developer-app-button\"]]],[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[22,1,[\"submitting\"]]]],{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/create/template.hbs" } });
});
define('handbook/osf-components/tests/settings/developer-apps/edit/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/edit/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/edit/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/developer-apps/edit/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "KIviHv4R", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-developer-apps\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps - Edit - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.appDetail\"],[[\"appName\"],[[22,0,[\"developerApp\",\"name\"]]]]],false],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"taskInstance\",\"isError\"]]],null,{\"statements\":[[0,\"    \"],[1,[23,[\"model\",\"taskInstance\",\"error\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"dl\"],[12,\"class\",[28,[[27,\"local-class\",[\"DeveloperApp__client\"],[[\"from\"],[\"handbook/osf-components/tests/settings/developer-apps/edit/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"dt\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientID\"],null],false],[10],[0,\"\\n        \"],[7,\"dd\"],[9],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientIDDescription\"],null],false],[10],[0,\"\\n            \"],[1,[27,\"copyable-text\",[[23,[\"data-test-client-id\"]]],[[\"text\",\"analyticsLabel\"],[[22,0,[\"developerApp\",\"clientId\"]],\"Settings - Developer apps - Copy client ID\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"dt\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientSecret\"],null],false],[10],[0,\"\\n        \"],[7,\"dd\"],[9],[0,\"\\n            \"],[1,[27,\"settings/developer-apps/-components/client-secret\",null,[[\"developerApp\"],[[22,0,[\"developerApp\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.editApp\"],null],false],[10],[0,\"\\n\"],[4,\"validated-model-form\",null,[[\"model\",\"disabled\",\"onSave\",\"analyticsScope\"],[[22,0,[\"developerApp\"]],[22,0,[\"model\",\"taskInstance\",\"isRunning\"]],[27,\"action\",[[22,0,[]],[22,0,[\"appSaved\"]]],null],\"Settings - Developer apps - Create\"]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-name\"]]],[[\"valuePath\",\"label\"],[\"name\",[27,\"t\",[\"settings.developer-apps.appName\"],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-homepage\"]]],[[\"valuePath\",\"label\"],[\"homeUrl\",[27,\"t\",[\"settings.developer-apps.appHomepage\"],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"textarea\"]],[23,[\"data-test-developer-app-description\"]]],[[\"valuePath\",\"label\"],[\"description\",[27,\"t\",[\"settings.developer-apps.appDescription\"],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-developer-app-callback-url\"]]],[[\"valuePath\",\"label\"],[\"callbackUrl\",[27,\"t\",[\"settings.developer-apps.appCallbackUrl\"],null]]]],false],[0,\"\\n\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[27,\"delete-button\",null,[[\"delete\",\"disabled\",\"analyticsScope\",\"modalTitle\",\"modalBody\"],[[27,\"action\",[[22,0,[]],[22,0,[\"deleteApp\"]]],null],[22,1,[\"disabled\"]],\"Settings - Developer apps - Edit\",[27,\"t\",[\"settings.developer-apps.confirmDelete.title\"],[[\"appName\"],[[22,0,[\"developerApp\",\"name\"]]]]],[27,\"t\",[\"settings.developer-apps.confirmDelete.body\"],null]]]],false],[0,\"\\n\\n\"],[4,\"bs-button\",[[23,[\"data-test-save-developer-app-button\"]]],[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/edit/template.hbs" } });
});
define('handbook/osf-components/tests/settings/developer-apps/index/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/index/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/index/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/developer-apps/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Gci2bWMv", "block": "{\"symbols\":[\"list\",\"developerApp\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top\"],[[\"from\"],[\"handbook/osf-components/tests/settings/developer-apps/index/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top__explanation\"],[[\"from\"],[\"handbook/osf-components/tests/settings/developer-apps/index/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.explanation\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[[23,[\"data-test-create-app-link\"]],\"settings.developer-apps.create\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"paginated-list/all\",null,[[\"modelName\",\"analyticsScope\"],[\"developer-app\",\"Settings - Developer apps\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"settings/developer-apps/-components/app-card\",null,[[\"developerApp\",\"onDelete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,1,[\"doReload\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/index/template.hbs" } });
});
define("handbook/osf-components/tests/settings/developer-apps/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "IkR186pU", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"settings.developer-apps.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.developer-apps.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/developer-apps/template.hbs" } });
});
define('handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/profile/name/-components/citation-preview/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/profile/name/-components/citation-preview/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/profile/name/-components/citation-preview/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "vSPj95DU", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,0,[\"shouldCite\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"CitationContainer\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-citation-container\",\"\"],[9],[0,\"\\n        \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"settings.profile.name.citationPreview\"],null],false],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"CitationPreview\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"SmallBlock\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.profile.name.apa\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"LargeBlock\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-apa-citation\",\"\"],[9],[0,\"\\n                    \"],[1,[22,0,[\"citeApa\"]],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"SmallBlock\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.profile.name.mla\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"LargeBlock\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-mla-citation\",\"\"],[9],[0,\"\\n                    \"],[1,[22,0,[\"citeMla\"]],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/profile/name/-components/citation-preview/template.hbs" } });
});
define('handbook/osf-components/tests/settings/profile/name/-components/name/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/profile/name/-components/name/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/profile/name/-components/name/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/profile/name/-components/name/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "8bx25BZK", "block": "{\"symbols\":[\"form\"],\"statements\":[[4,\"validated-model-form\",null,[[\"onSave\",\"onWillDestroy\",\"model\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[22,0,[\"user\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-full-name-field\"]]],[[\"valuePath\",\"label\"],[\"fullName\",[27,\"t\",[\"settings.profile.name.fullName\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"t\",[\"settings.profile.name.instructions\"],null],false],[0,\"\\n    \\n    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"settings.profile.name.citationName\"],null],false],[10],[0,\"\\n    \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"NameParts\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-given-name-field\"]]],[[\"valuePath\",\"label\",\"class\"],[\"givenName\",[27,\"t\",[\"settings.profile.name.givenName\"],null],[27,\"concat\",[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-middle-names-field\"]]],[[\"valuePath\",\"label\",\"class\"],[\"middleNames\",[27,\"t\",[\"settings.profile.name.middleNames\"],null],[27,\"concat\",[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-family-name-field\"]]],[[\"valuePath\",\"label\",\"class\"],[\"familyName\",[27,\"t\",[\"settings.profile.name.familyName\"],null],[27,\"concat\",[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]],null]]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-suffix-field\"]]],[[\"valuePath\",\"label\",\"class\"],[\"suffix\",[27,\"t\",[\"settings.profile.name.suffix\"],null],[27,\"concat\",[[27,\"local-class\",[\"SmallField\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"settings/profile/name/-components/citation-preview\",null,[[\"user\"],[[22,0,[\"user\"]]]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"FormButtons\"],[[\"from\"],[\"handbook/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"bs-button\",[[23,[\"data-test-discard-changes\"]]],[[\"buttonType\",\"disabled\",\"onClick\"],[\"button\",[27,\"not\",[[22,0,[\"isPageDirty\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]],[22,0,[\"user\"]]],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"validated_input_form.discard_changes\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-button\",[[23,[\"data-test-save\"]]],[[\"buttonType\",\"disabled\",\"type\"],[\"submit\",[27,\"and\",[[27,\"not\",[[22,0,[\"isPageDirty\"]]],null],[22,1,[\"disabled\"]]],null],\"primary\"]],{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/profile/name/-components/name/template.hbs" } });
});
define("handbook/osf-components/tests/settings/profile/name/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "nZi9Q93t", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"settings.profile.name.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.profile.name.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"settings/profile/name/-components/name\",null,[[\"user\",\"onWillDestroy\",\"onSave\",\"isPageDirty\"],[[22,0,[\"user\"]],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[22,0,[\"user\",\"hasDirtyAttributes\"]]]]],false],[0,\"\\n\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/profile/name/template.hbs" } });
});
define('handbook/osf-components/tests/settings/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "PpwHjHLX", "block": "{\"symbols\":[\"nav\",\"profileNav\"],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[11,\"class\",\"page-header\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"general.settings\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[\"hidden-md hidden-lg \",[27,\"local-class\",[\"NavToggle\"],[[\"from\"],[\"handbook/osf-components/tests/settings/styles\"]]]]]],[11,\"role\",\"button\"],[12,\"aria-label\",[27,\"t\",[\"settings.toggleNav\"],null]],[3,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"navCollapsed\"]]],null],[27,\"not\",[[22,0,[\"navCollapsed\"]]],null]]],[9],[0,\"\\n                    \"],[1,[27,\"fa-icon\",[\"bars\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n\"],[4,\"bs-collapse\",null,[[\"collapsed\",\"class\"],[[22,0,[\"navCollapsed\"]],[27,\"concat\",[[27,\"local-class\",[\"SideNav\"],[[\"from\"],[\"handbook/osf-components/tests/settings/styles\"]]]],null]]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n\"],[4,\"bs-nav\",null,[[\"type\",\"stacked\"],[\"pills\",true]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"link-to\"]],\"settings.profile\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.profile.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-nav\",null,[[\"type\",\"stacked\",\"class\"],[\"pills\",true,[27,\"concat\",[[27,\"local-class\",[\"ProfileNav\"],[[\"from\"],[\"handbook/osf-components/tests/settings/styles\"]]]],null]]],{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.name\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Name\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.name.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.social\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Social\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.social.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.education\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Education\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.education.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.employment\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Employment\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.employment.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"a\"],[11,\"href\",\"/settings/account\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Account settings\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.account.title\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"a\"],[11,\"href\",\"/settings/addons\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Configure add-on accounts\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.addons.title\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"a\"],[11,\"href\",\"/settings/notifications\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Notifications\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.notifications.title\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"link-to\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.developer-apps.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"link-to\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Personal access tokens\"],[[\"target\"],[[23,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.tokens.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-9\"],[9],[0,\"\\n            \"],[1,[21,\"outlet\"],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/template.hbs" } });
});
define('handbook/osf-components/tests/settings/tokens/-components/token-card/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/-components/token-card/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/-components/token-card/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/tokens/-components/token-card/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "b2hu+jPP", "block": "{\"symbols\":[\"placeholder\",\"@token\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TokenCard\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/-components/token-card/styles\"]]]]]],[12,\"data-test-token-card\",[22,2,[\"id\"]]],[9],[0,\"\\n\"],[4,\"if\",[[22,2,[]]],null,{\"statements\":[[4,\"link-to\",[\"settings.tokens.edit\",[22,2,[\"id\"]]],[[\"data-test-token-link\"],[[22,2,[\"id\"]]]],{\"statements\":[[0,\"            \"],[1,[22,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"content-placeholders\",null,[[\"class\"],[[27,\"concat\",[[27,\"local-class\",[\"TokenCard__placeholder\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/-components/token-card/styles\"]]]],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,1,[\"heading\"]]],[[\"subtitle\"],[false]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[0,\"\\n    \"],[1,[27,\"delete-button\",null,[[\"small\",\"delete\",\"disabled\",\"analyticsScope\",\"modalTitle\",\"modalBody\"],[true,[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[27,\"not\",[[22,2,[]]],null],\"Settings - Tokens\",[27,\"t\",[\"settings.tokens.confirmDelete.title\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],[27,\"t\",[\"settings.tokens.confirmDelete.body\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/-components/token-card/template.hbs" } });
});
define('handbook/osf-components/tests/settings/tokens/-components/token-form/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/-components/token-form/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/-components/token-form/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/tokens/-components/token-form/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "tVlwF+Om", "block": "{\"symbols\":[\"form\",\"cb\",\"&default\"],\"statements\":[[4,\"validated-model-form\",null,[[\"model\",\"modelName\",\"disabled\",\"onSave\",\"analyticsScope\"],[[22,0,[\"token\"]],[27,\"if\",[[22,0,[\"token\"]],[26],\"token\"],null],[22,0,[\"disabled\"]],[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[22,0,[\"analyticsScope\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"text\"]],[23,[\"data-test-token-name\"]]],[[\"valuePath\",\"label\"],[\"name\",[27,\"t\",[\"settings.tokens.tokenName\"],null]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[1,[27,\"t\",[\"settings.tokens.scopes\"],null],false],[10],[0,\"\\n        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.tokens.scopesDescription\"],null],false],[10],[0,\"\\n\\n\"],[4,\"component\",[[22,1,[\"checkboxes\"]]],[[\"valuePath\",\"options\",\"ariaLabel\"],[\"scopes\",[22,0,[\"allScopes\"]],[27,\"t\",[\"settings.tokens.scopes\"],null]]],{\"statements\":[[0,\"            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Scope\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/-components/token-form/styles\"]]]]]],[11,\"data-test-scope\",\"cb.option.id\"],[9],[0,\"\\n                \"],[1,[22,2,[\"checkbox\"]],false],[0,\"\\n                \"],[7,\"label\"],[12,\"for\",[22,2,[\"checkboxId\"]]],[9],[0,\"\\n                    \"],[1,[22,2,[\"option\",\"id\"]],false],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Scope__description\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/-components/token-form/styles\"]]]]]],[11,\"data-test-scope-description\",\"\"],[9],[0,\"\\n                        \"],[1,[22,2,[\"option\",\"description\"]],false],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[14,3,[[27,\"hash\",null,[[\"disabled\"],[[22,0,[\"inputsDisabled\"]]]]]]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/-components/token-form/template.hbs" } });
});
define("handbook/osf-components/tests/settings/tokens/create/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "0bvrmGV4", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-tokens\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Tokens - Create - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[10],[0,\"\\n\\n\"],[4,\"settings/tokens/-components/token-form\",null,[[\"onSave\",\"analyticsScope\"],[[27,\"action\",[[22,0,[]],\"onSave\"],null],\"Settings - Tokens - Create\"]],{\"statements\":[[4,\"bs-button\",[[23,[\"data-test-create-token-button\"]]],[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/create/template.hbs" } });
});
define('handbook/osf-components/tests/settings/tokens/edit/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/edit/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/edit/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/tokens/edit/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "nIu0M4Yy", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-tokens\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Tokens - Edit - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[22,0,[\"token\",\"tokenValue\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.createSuccess.message\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"copyable-text\",[[23,[\"data-test-new-token-value\"]]],[[\"text\",\"analyticsLabel\"],[[22,0,[\"token\",\"tokenValue\"]],\"Settings - Tokens - Copy token\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[\"bg-danger \",[27,\"local-class\",[\"NewTokenWarning\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/edit/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"strong\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.warning\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.instructions\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"bs-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"refresh\"]]],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.editScopes\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.editToken\"],null],false],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"taskInstance\",\"isError\"]]],null,{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"taskInstance\",\"error\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"settings/tokens/-components/token-form\",null,[[\"onSave\",\"token\",\"disabled\",\"analyticsScope\"],[[27,\"action\",[[22,0,[]],[22,0,[\"tokenSaved\"]]],null],[22,0,[\"token\"]],[22,0,[\"model\",\"taskInstance\",\"isRunning\"]],\"Settings - Tokens - Edit\"]],{\"statements\":[[0,\"            \"],[1,[27,\"delete-button\",null,[[\"delete\",\"disabled\",\"analyticsScope\",\"modalTitle\",\"modalBody\"],[[27,\"action\",[[22,0,[]],[22,0,[\"deleteToken\"]]],null],[22,1,[\"disabled\"]],\"Settings - Tokens - Edit\",[27,\"t\",[\"settings.tokens.confirmDelete.title\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],[27,\"t\",[\"settings.tokens.confirmDelete.body\"],null]]]],false],[0,\"\\n\\n\"],[4,\"bs-button\",[[23,[\"data-test-save-token-button\"]]],[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/edit/template.hbs" } });
});
define('handbook/osf-components/tests/settings/tokens/index/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/index/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/index/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/settings/tokens/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "E2Udt6Kr", "block": "{\"symbols\":[\"list\",\"token\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/index/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top__explanation\"],[[\"from\"],[\"handbook/osf-components/tests/settings/tokens/index/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.explanation\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[[23,[\"data-test-create-token-link\"]],\"settings.tokens.create\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"paginated-list/all\",null,[[\"modelName\",\"analyticsScope\"],[\"token\",\"Settings - Tokens\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"settings/tokens/-components/token-card\",null,[[\"token\",\"onDelete\"],[[22,2,[]],[22,1,[\"doReload\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/index/template.hbs" } });
});
define("handbook/osf-components/tests/settings/tokens/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3TZPJbO0", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"settings.tokens.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.tokens.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/settings/tokens/template.hbs" } });
});
define('handbook/osf-components/tests/styles/_accessibility.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_accessibility.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_accessibility.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/styles/_global.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_global.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_global.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/styles/_mixins.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_mixins.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_mixins.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/styles/_typography.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_typography.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_typography.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/styles/_variables.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_variables.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_variables.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/styles/headers.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/headers.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/headers.scss should pass stylelint');
  });
});
define('handbook/osf-components/tests/support/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('support/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'support/styles.scss should pass stylelint');
  });
});
define("handbook/osf-components/tests/support/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "5knnZ8dI", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"title\",[[27,\"t\",[\"support.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Support\"],[[\"from\"],[\"handbook/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"m-b-lg\"],[9],[1,[27,\"t\",[\"support.title\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"handbook/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"/faq\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_title\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_title\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"href\",[28,[[21,\"faqPageUrl\"]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_link\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.faq_link_text\"],null],false],[10],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[21,\"faqPageUrl\"]]]],[11,\"class\",\"btn btn-info m-t-lg pull-right\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_button\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_button\"],null],false],[0,\"\\n                        \"],[7,\"i\"],[11,\"class\",\"fa fa-angle-right\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"handbook/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[21,\"helpUrl\"]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_title\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.guides_title\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_paragraph_1\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"href\",[28,[[21,\"helpUrl\"]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_link\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.guides_link_text\"],null],false],[10],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_paragraph_2\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[21,\"helpUrl\"]]]],[11,\"class\",\"btn btn-info m-t-lg pull-right\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_button\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_button\"],null],false],[0,\"\\n                        \"],[7,\"i\"],[11,\"class\",\"fa fa-angle-right\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"handbook/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[1,[27,\"t\",[\"support.contact_title\"],null],false],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"support.contact_technical\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[7,\"a\"],[12,\"href\",[28,[\"mailto:\",[21,\"supportEmail\"]]]],[11,\"class\",\"text-bigger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - support_email\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[21,\"supportEmail\"],false],[10],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"support.contact_questions\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[7,\"a\"],[12,\"href\",[28,[\"mailto:\",[21,\"contactEmail\"]]]],[11,\"class\",\"text-bigger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - contact_email\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[21,\"contactEmail\"],false],[10],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.prereg_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.prereg_paragraph_1\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[21,\"preregUrl\"]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - prereg_link\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.prereg_link_text\"],null],false],[10],[0,\"\\n                \"],[1,[27,\"t\",[\"support.prereg_paragraph_2\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.status_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.status_paragraph_1\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[21,\"statusPageUrl\"]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - status_page_link\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.status_link_text\"],null],false],[10],[0,\"\\n                \"],[1,[27,\"t\",[\"support.status_paragraph_2\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.consultation_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.consultation_paragraph\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[21,\"consultationUrl\"]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - consultation_link\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.consultation_link_text\"],null],false],[10],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-12 text-center \",[27,\"local-class\",[\"bold-links\"],[[\"from\"],[\"handbook/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"h4\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.social_title\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[21,\"twitterUrl\"]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_twitter\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-twitter\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_twitter\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[21,\"mailingUrl\"]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_email\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-users\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_mailing\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[21,\"facebookUrl\"]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_facebook\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-facebook\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_facebook\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[21,\"githubUrl\"]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_github\"],[[\"target\"],[[23,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-github\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_github\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "handbook/osf-components/tests/support/template.hbs" } });
});
define("handbook/osf-components/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define('handbook/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define.alias('ember-cli-addon-docs/routes/docs', 'handbook/routes/docs');
define.alias('ember-cli-addon-docs/routes/docs/api/item', 'handbook/routes/docs/api/item');
define.alias('ember-cli-addon-docs/serializers/-addon-docs', 'handbook/serializers/-addon-docs');
define.alias('ember-fetch-adapter', 'handbook/services/adapter');
define.alias('ember-cli-addon-docs/services/docs-fetch', 'handbook/services/docs-fetch');
define.alias('ember-cli-addon-docs/services/docs-routes', 'handbook/services/docs-routes');
define.alias('ember-cli-addon-docs/services/docs-search', 'handbook/services/docs-search');
define('handbook/services/etw-tailwind-styleguide', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    // body
  });
});
define.alias('ember-i18n/services/i18n', 'handbook/services/i18n');
define.alias('ember-keyboard/services/keyboard', 'handbook/services/keyboard');
define("handbook/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('handbook/services/media', ['exports', 'ember-responsive/services/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _media.default;
});
define('handbook/services/modal-dialog', ['exports', 'handbook/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define.alias('ember-cli-addon-docs/services/project-version', 'handbook/services/project-version');
define.alias('ember-router-scroll/services/router-scroll', 'handbook/services/router-scroll');
define.alias('ember-text-measurer/services/text-measurer', 'handbook/services/text-measurer');
define("handbook/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "bs-alert.danger-hidden.hbs": "            {{#bs-alert type='danger' dismissible=false hidden=hideAlert}}\n                    <strong>Danger, Will Robinson!</strong>\n            {{/bs-alert}}",
    "bs-alert.info.hbs": "            {{#bs-alert type='info'}}\n                    <strong>Hey! You like info?</strong>\n                    This is some fine info\n            {{/bs-alert}}",
    "bs-alert.warn-no-dismiss.hbs": "            {{#bs-alert type='warning' dismissible=false}}\n                    <strong>Uh oh.</strong>\n                    I've got a bad feeling about this.\n            {{/bs-alert}}",
    "copyable-text.hbs": "        {{copyable-text\n            text='bunchoftextblahblahblah'\n        }}\n        {{! Optional arguments:\n            success=(action 'onCopySuccess')\n            error=(action 'onCopyError')\n            analyticsLabel='This Page - Clicked copy button'\n        --}}",
    "delete-button.delete-action.ts": "    @action\n    async delete(text: string) {\n        await timeout(1000);\n        this.toast.success(text, 'Deleted!');\n    }",
    "delete-button.demo-block.hbs": "        {{#delete-button\n            delete=(action delete 'block')\n        }}\n            <strong>Really</strong> really sure?\n        {{/delete-button}}",
    "delete-button.demo-default.hbs": "        {{delete-button\n            delete=(action delete 'default')\n        }}",
    "delete-button.demo-disabled.hbs": "        {{delete-button\n            disabled=true\n            delete=(action delete 'disabled')\n        }}\n        {{delete-button\n            small=true\n            disabled=true\n            delete=(action delete 'disabled')\n        }}",
    "delete-button.demo-hard-confirm.hbs": "        {{delete-button\n            hardConfirm=true\n            delete=(action delete 'hard-confirm')\n        }}",
    "delete-button.demo-small.hbs": "        {{delete-button\n            small=true\n            delete=(action delete 'small')\n        }}",
    "delete-button.demo-text.hbs": "        {{delete-button\n            delete=(action delete 'custom-text')\n            buttonLabel='Custom delete!'\n            modalTitle='Such a title'\n            modalBody='Sure you want to?'\n            cancelButtonText='No.'\n            confirmButtonText='Yes?'\n            errorMessage='It did not work.'\n        }}",
    "loading-indicator.dark.hbs": "        <LoadingIndicator @dark=true />",
    "loading-indicator.default-light.hbs": "        <div local-class='dark-background'>\n            {{! BEGIN-SNIPPET loading-indicator.default.hbs }}\n            <LoadingIndicator />\n            {{! END-SNIPPET }}\n        </div>",
    "loading-indicator.default.hbs": "            <LoadingIndicator />",
    "loading-indicator.inline-dark.hbs": "        <LoadingIndicator @dark=true @inline=true />",
    "loading-indicator.inline-default-light.hbs": "        <div local-class='dark-background'>\n            {{! BEGIN-SNIPPET loading-indicator.inline-default.hbs }}\n            <LoadingIndicator @inline=true />\n            {{! END-SNIPPET }}        \n        </div>",
    "loading-indicator.inline-default.hbs": "            <LoadingIndicator @inline=true />",
    "new-project-modal.controller.ts": "    @action\n    openModal(this: NewProjectModalController) {\n        this.set('newNode', null);\n        this.set('shouldShowModal', true);\n    }\n\n    @action\n    projectCreated(this: NewProjectModalController, newNode: Node) {\n        this.set('newNode', newNode);\n        this.closeModal(true);\n    }\n\n    @action\n    closeModal(this: NewProjectModalController, reload = false) {\n        this.set('shouldShowModal', false);\n        this.set('shouldReload', reload);\n    }",
    "new-project-modal.demo.hbs": "            {{#if this.shouldShowModal}}\n                <NewProjectModal\n                    @afterProjectCreated={{action @projectCreated}}\n                    @analyticsContext=\"Dashboard\"\n                    @closeModal={{action @closeModal reload=false}}\n                />\n            {{/if}}",
    "new-project-navigation-modal.demo.hbs": "        {{#bs-button class='center-block m-b-lg' onClick=(action (mut shouldShowModal) true)}}\n            Create project\n        {{/bs-button}}\n        {{#if shouldShowModal}}\n            <NewProjectNavigationModal\n                @node={{node}}\n                @closeModal={{action (mut shouldShowModal) false}}\n                @title='Project created! Would you like to go there now?'\n            />\n        {{/if}}",
    "panel.demo-args.hbs": "        <Panel as |panel|>\n            <panel.heading @title=\"I'm a panel\" />\n            <panel.body @text=\"This is my body\" />\n            <panel.footer @text=\"This is my footer\" />\n        </Panel>",
    "panel.demo-blocks.hbs": "        <Panel as |panel|>\n            <panel.heading>\n                <h2>I'm a panel</h2>\n            </panel.heading>\n            <panel.body>\n                <strong>This is my body</strong>\n            </panel.body>\n            <panel.footer>\n                <h3>This is my footer</h3>\n            </panel.footer>\n        </Panel>",
    "panel.demo-mix.hbs": "        <Panel as |panel|>\n            <panel.heading @title=\"I'm a panel\">\n                <span class=\"pull-right\">Here's some other stuff in the heading</span>\n            </panel.heading>\n            <panel.body @text=\"This is my body\">\n                <button class=\"btn btn-default\">This is something additional</button>\n            </panel.body>\n        </Panel>",
    "tags-widget.default.hbs": "        <TagsWidget\n            @tags={{@tags}}\n            @addTag={{action @addTag}}\n            @removeTag={{action @removeTag}}\n            @showAdd={{this.showAdd}}\n            @analyticsScope=\"Handbook Tags\"\n        />\n",
    "tags-widget.inline-readonly.hbs": "        <TagsWidget\n            @tags={{@tags}}\n            @readOnly=true\n            @inline=true\n            @analyticsScope=\"Handbook Tags\"\n        />\n",
    "tags-widget.inline.hbs": "        <TagsWidget\n            @tags={{@tags}}\n            @addTag={{action @addTag}}\n            @removeTag={{action @removeTag}}\n            @showAdd={{this.showAdd}}\n            @inline=true\n            @analyticsScope=\"Handbook Tags\"\n        />\n",
    "tags-widget.readonly.hbs": "        <TagsWidget\n            @tags={{@tags}}\n            @readOnly=true\n            @analyticsScope=\"Handbook Tags\"\n        />\n",
    "validated-model-form.demo-create.hbs": "        {{#validated-model-form\n            onSave=(action this.onSave)\n            modelName='node'\n            as |form|\n        }}\n            {{form.text valuePath='title' label='Title'}}\n            {{form.textarea valuePath='description' label='Description'}}\n            {{#bs-button buttonType='submit' disabled=form.disabled}}\n                Save\n            {{/bs-button}}\n        {{/validated-model-form}}",
    "validated-model-form.demo-edit.hbs": "        {{#validated-model-form\n            onSave=(action this.onSave)\n            onWillDestroy=(action this.onWillDestroy)\n            model=this.node\n            disabled=this.model.taskInstance.isRunning\n            as |form|\n        }}\n            {{form.text valuePath='title' label='Title'}}\n            {{form.textarea valuePath='description' label='Description'}}\n            {{#bs-button buttonType='submit' disabled=form.disabled}}\n                Save\n            {{/bs-button}}\n        {{/validated-model-form}}",
    "validated-model-form.is-page-dirty.ts": "    // This tells ember-onbeforeupload's ConfirmationMixin whether or not to stop transitions\n    @computed('controller.existingNode', 'controller.existingNode.hasDirtyAttributes')\n    get isPageDirty() {\n        const controller = this.controller as ValidatedModelFormController;\n        const existingNode = controller.existingNode !== undefined ? controller.existingNode : null;\n        const value = (existingNode !== null) ? existingNode.hasDirtyAttributes : false;\n        return () => value;\n    }",
    "validated-model-form.on-will-destroy.ts": "    @action\n    onWillDestroy() {\n        if (this.existingNode !== undefined) {\n            this.existingNode.rollbackAttributes();\n        }\n    }"
  };
});
define.alias('ember-popper/templates/components/ember-popper-targeting-parent', 'handbook/templates/components/ember-popper-targeting-parent');
define.alias('ember-popper/templates/components/ember-popper', 'handbook/templates/components/ember-popper');
define('handbook/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.hasClass('modal-fade-and-drop'), this.use('fadeAndDrop'));

    this.transition(this.hasClass('modal-fade'), this.use('fade', { duration: 150 }));
  };
});
define.alias('liquid-fire/transitions/cross-fade', 'handbook/transitions/cross-fade');
define.alias('liquid-fire/transitions/default', 'handbook/transitions/default');
define.alias('liquid-fire/transitions/explode', 'handbook/transitions/explode');
define.alias('ember-cli-addon-docs/transitions/fade-and-drop', 'handbook/transitions/fade-and-drop');
define.alias('liquid-fire/transitions/fade', 'handbook/transitions/fade');
define.alias('liquid-fire/transitions/flex-grow', 'handbook/transitions/flex-grow');
define.alias('liquid-fire/transitions/fly-to', 'handbook/transitions/fly-to');
define.alias('liquid-fire/transitions/move-over', 'handbook/transitions/move-over');
define.alias('liquid-fire/transitions/scale', 'handbook/transitions/scale');
define.alias('liquid-fire/transitions/scroll-then', 'handbook/transitions/scroll-then');
define.alias('liquid-fire/transitions/to-down', 'handbook/transitions/to-down');
define.alias('liquid-fire/transitions/to-left', 'handbook/transitions/to-left');
define.alias('liquid-fire/transitions/to-right', 'handbook/transitions/to-right');
define.alias('liquid-fire/transitions/to-up', 'handbook/transitions/to-up');
define.alias('liquid-fire/transitions/wait', 'handbook/transitions/wait');
define.alias('ember-keyboard/utils/get-cmd-key', 'handbook/utils/get-cmd-key');
define.alias('ember-i18n/utils/i18n/compile-template', 'handbook/utils/i18n/compile-template');
define.alias('ember-i18n/utils/i18n/missing-message', 'handbook/utils/i18n/missing-message');
define.alias('ember-keyboard/utils/listener-name', 'handbook/utils/listener-name');
define.alias('ember-cli-string-helpers/utils/titleize', 'handbook/utils/titleize');
define.alias('ember-cp-validations/validators/alias', 'handbook/validators/alias');
define.alias('ember-cp-validations/validators/belongs-to', 'handbook/validators/belongs-to');
define.alias('ember-cp-validations/validators/collection', 'handbook/validators/collection');
define.alias('ember-cp-validations/validators/confirmation', 'handbook/validators/confirmation');
define.alias('ember-cp-validations/validators/date', 'handbook/validators/date');
define.alias('ember-cp-validations/validators/dependent', 'handbook/validators/dependent');
define.alias('ember-cp-validations/validators/ds-error', 'handbook/validators/ds-error');
define.alias('ember-cp-validations/validators/exclusion', 'handbook/validators/exclusion');
define.alias('ember-cp-validations/validators/format', 'handbook/validators/format');
define.alias('ember-cp-validations/validators/has-many', 'handbook/validators/has-many');
define.alias('ember-cp-validations/validators/inclusion', 'handbook/validators/inclusion');
define.alias('ember-cp-validations/validators/length', 'handbook/validators/length');
define.alias('ember-cp-validations/validators/messages', 'handbook/validators/messages');
define.alias('ember-cp-validations/validators/number', 'handbook/validators/number');
define.alias('ember-cp-validations/validators/presence', 'handbook/validators/presence');//# sourceMappingURL=/ember-osf-web/engines-dist/handbook/assets/engine-58be6aa48015e0d7a48c2162f5e21244.map
