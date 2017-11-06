window.Manage = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var bannerCollection = new Manage.Collections.Banner(data.banners);

    console.log(bannerCollection.models[0].attributes)

    bannerCollection.each(function(m) {
      var bannerView = new Manage.Views.Banner({
        // collection: bannerCollection
        model: m
      });
      $('.header__banner__carousel').append(bannerView.render().$el);
    })
  }
}
