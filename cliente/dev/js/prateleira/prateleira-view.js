app.Views.Prateleira = Backbone.View.extend({

  className: 'prateleira',
  template: _.template($('#home-prateleira').html()),

  initialize: function(filtro) {
    self = this
    if(filtro) {
      self.tipo = filtro.tipo
      self.$el.addClass('prateleira--' + filtro.tipo)
      var dados = window.Prateleira(filtro)
      this.collection = new app.Collections.Banner(dados.eventos)
      this.titulo = dados.titulo
    } else {
      this.collection = new app.Collections.Banner(window.todosEventosDetalhe.eventos)
      this.titulo = window.todosEventosDetalhe.titulo
    }
  },

  renderOne(model) {
    var bannerView = new app.Views.BannerItem({
      model: model
    });
    $('.prateleira--'+this.tipo+' .prateleira__carousel').append(bannerView.render().$el);
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
  }

})
