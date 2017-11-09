Manage.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'fiestas': 'fiestas',
    'fiestas/fiesta/:id': 'fiesta',
    'perfil': 'perfil'
  }
});
