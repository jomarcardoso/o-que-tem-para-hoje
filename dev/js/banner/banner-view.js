app.Views.Banner = Backbone.View.extend({

  className: 'header__banner',
  template: _.template($('#header__banner').html()),

  initialize: function() {
    this.collection = new app.Collections.Banner(this.data.banners)
  },

  renderOne(model) {
    var bannerView = new app.Views.BannerItem({
      model: model
    });
    $('.header__banner__carousel').append(bannerView.render().$el);
  },

  render() {
    var html = this.template
    this.$el.html(html)
    return this
  },

  renderChilds() {
    this.collection.each(this.renderOne, this);
    carrossel()
  },

  data: {
    banners: [
      {
        id: 1,
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
      },
      {
        id: 2,
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
      },
      {
        id: 3,
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
      },
      {
        id: 4,
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
      }
    ]
  }

})


app.Views.BannerItem = Backbone.View.extend({

  template: _.template('<img src="<%- img %>" alt="<%- nome %>">'),
  className: 'item',

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }

})
