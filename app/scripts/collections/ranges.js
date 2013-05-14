define(['backbone', 'models/range'], function(Backbone, Range){
	return Backbone.Collection.extend({
		model: Range,
		next: function( model ){
			return this.at(this.indexOf(model)+1);
		},
		prev: function( model ){
			return this.at(this.indexOf(model)-1);
		}
	});
});