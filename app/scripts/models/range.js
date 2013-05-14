define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		defaults: {
			value: 	0.5,
			max: 		1.0,
			min: 		0.0,
			is_active: false
		},
		set_value: function(val) {
			this.set("value", Math.max( 0, Math.min( 1, val )));
		}
	});
});