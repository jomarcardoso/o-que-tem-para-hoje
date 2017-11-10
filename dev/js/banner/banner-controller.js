app.Views.Banner = Backbone.View.extend({

  tagName: 'header__banner',
  template: _.template($('#header__banner').html()),

  initialize: function() {
    this.collection = new app.Collections.Banner(this.data.banners);
  },

  renderOne(model) {
    var bannerView = new app.Views.BannerItem({
      model: model
    });
    $('.header__banner__carousel').append(bannerView.render().$el);

    // this.$el.append(bannerView.render().$el);
  },

  render(container) {
    var html = this.template
    this.$el.html(html)
    container.prepend(html)
    this.collection.each(this.renderOne, this);
    return this
  },

  data: {
    banners: [
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
      }
    ]
  }

})
