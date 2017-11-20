app.Views.Detalhe = Backbone.View.extend({

  template: _.template($('#tpl-detalhe').html()),
  className: 'detalhe',

  initialize: function(dados) {
    this.model = dados.model
  },

  render() {
    var html = this.template(this.model.toJSON())
    this.$el.append(html)
    return this
  },

  renderChilds: function() {

  }
})
