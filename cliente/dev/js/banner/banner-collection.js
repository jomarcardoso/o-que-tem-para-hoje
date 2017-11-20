app.Collections.Banner = Backbone.Collection.extend({
  model: app.Models.Banner,
  localStorage: new Backbone.LocalStorage('banners')
});
