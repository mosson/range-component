define(['backbone', 'models/range'], function(Backbone, Range){
	return Backbone.View.extend({
		input: 			null,
		$input: 		null,

		// el / model required
		initialize: function(options){
			this.$input 	= this.$el.find("input");
			this.input 		= this.$input.get(0);

			this.set_position();

			this.listenTo(this.model, "change:value", 		this.set_position);
			this.listenTo(this.model, "change:is_active", this.toggle_active);
		},

		events: {
			"mousedown": "activate",
			"touchstart": "activate",
			"click": "activate"
		},

		activate: function(e){
			e.preventDefault();
			this.model.set("is_active", true);
		},

		set_position: function( model ){
			this.el.style.left =  ( this.model.get("value") * 100 ) + "%";
			this.$input.val( this.model.get("value") );
		},

		toggle_active: function( model ){
			if( this.model.get("is_active") ){
				this.$el.addClass("active");
			}else{
				this.$el.removeClass("active");
			}
		}
		
	});
});