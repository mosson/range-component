define(['backbone', 'models/range'], function(Backbone, Range){
	return Backbone.Collection.extend({
		model: Range,

		activate: function( model ){

			if( model ) {
				this.each(function(m){
					m.set("is_active", m === model );
				});
			}
		},

		next: function( model ){
			return this.at(this.indexOf(model)+1);
		},
		prev: function( model ){
			return this.at(this.indexOf(model)-1);
		}
	});
});