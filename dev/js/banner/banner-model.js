app.Models.Banner = Backbone.Model.extend({

  defaults: {
    id: null,
    nome: null,
    descricao: null,
    img: null
  },
  // localStorage: new Backbone.LocalStorage('banners'),

  initialize: function(dados) {
    if(dados.id) {
      console.log('passou aq')
      // window.todosEventos.eventos.reduce(x => x.id === dados.id)
      this.set({id: 1,nome: 'oktoberfest', descricao: 'uma festa bem legal',img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'})
    }
  }

})
