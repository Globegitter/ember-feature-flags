import Ember from 'ember';

export default {
  name: 'ember-feature-flags',
  initialize: function( container, application ) {
    container.optionsForType('features', { instantiate: false, singleton: true });
    application.inject('route', 'features', 'features:main');
    application.inject('controller', 'features', 'features:main');
    application.inject('view', 'features', 'features:main');
    application.inject('component', 'features', 'features:main');
    application.inject('helper', 'features', 'features:main');
  }
};
