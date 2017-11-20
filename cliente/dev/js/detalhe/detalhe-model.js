app.Models.Detalhe = Backbone.Model.extend({

  defaults: {
    id: null,
    nome: null,
    descricao: null,
    img: null
  },
  // localStorage: new Backbone.LocalStorage('banners'),

  initialize: function(dados) {
    if(dados.id) {
      this.set(window.todosEventosDetalhe.eventos.filter(function(x) {
        if(x.id == dados.id) {
          return x
        }
      })[0])
    }
  }

})
