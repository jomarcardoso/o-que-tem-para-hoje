app.Views.Banner = Backbone.View.extend({

  className: 'header__banner',
  template: _.template($('#header__banner').html()),

  initialize: function(dados) {
    if(dados.collection) {
      this.collection = new app.Collections.Banner(window.todosEventosDetalhe.eventos)
    } else {
      this.model = dados.model
    }
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
    if(this.collection) {
      this.collection.each(this.renderOne, this);
    } else {
      this.renderOne(this.model)
    }
  },

  carrossel: function() {
    $('.header__banner__carousel').addClass('owl-carousel')
    carrossel()
  }
})


app.Views.BannerItem = Backbone.View.extend({

  template: _.template('<img src="<%- banner %>" alt="<%- nome %>">'),
  className: 'item',

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);

    console.log('mais um item na prateleira')
    return this;
  },

  events: {
    'click img': 'detalhe'
  },

  detalhe: function() {
    Backbone.history.navigate('fiestas/'+ this.model.get('id'), {trigger: true})
  }

})
