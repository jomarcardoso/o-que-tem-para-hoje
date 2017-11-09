window.BannerController = function(collection) {

  var bannerCollection = new Manage.Collections.Banner(collection);

  bannerCollection.each(function(m) {
    var bannerView = new Manage.Views.Banner({
      model: m
    });
    $('.header__banner__carousel').append(bannerView.render().$el);
  })
}
