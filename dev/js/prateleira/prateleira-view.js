app.Views.Prateleira = Backbone.View.extend({

  className: 'prateleira',
  template: _.template($('#home-prateleira').html()),

  initialize: function() {
    this.collection = new app.Collections.Banner(this.data.prateleiras)
    this.titulo = this.data.titulo
  },

  renderOne(model) {
    var bannerView = new app.Views.BannerItem({
      model: model
    });
    $('.prateleira__carousel').append(bannerView.render().$el);
  },

  render() {
    let self = this
    var html = this.template({titulo: self.titulo})
    this.$el.html(html)
    return this
  },

  renderChilds() {
    this.collection.each(this.renderOne, this)
    carrossel()
  },

  data: {
    titulo: 'As festas mais próximas',
    prateleiras: [
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
