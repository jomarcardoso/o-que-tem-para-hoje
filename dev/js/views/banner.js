ContactManager.Views.Banner = Backbone.View.extend({

  template: _.template('<img src="<%- img %>" alt="<%- nome -%>">'),

  className: 'item',

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }

})
