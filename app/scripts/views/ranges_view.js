define(
	['backbone', 'views/range_view', 'models/range', 'collections/ranges'], 
	function(Backbone, RangeView, Range, Ranges){
		return Backbone.View.extend({
			_drag_move: 		null,
			_drag_end: 			null,

			// require $el
			initialize: function(options){
				this._drag_move 		= 	_.bind( this.drag_move, this );
				this._drag_end 			= 	_.bind( this.drag_end, 	this );

				this.collection = new Ranges();
				this.$el.find(".handle").each( 
					_.bind( 
						function(index, el){
							var model = new Range({value: $(el).find("input").val() });
							new RangeView({
								model: 	model,
								el: 		el
							});
							this.collection.push(model);
						},
						this
					)
				);

				this.collection.at(0).set("is_active", true);
			},

			events: {
				"mousedown":  "drag_start",
				"touchstart": "drag_start"
			},

			active_model: function(){
				return this.collection.findWhere({"is_active": true});
			},

			drag_start: function(e){
				e.preventDefault();

				this.active_model().set_value( ( this.page_x(e) - this.$el.offset().left ) / this.width() );

				$(document).on("mousemove touchmove", this._drag_move );
				$(document).on("mouseup touchend", 		this._drag_end  );
			},

			drag_move: function(e){
				e.preventDefault();

				this.active_model().set_value( ( this.page_x(e) - this.$el.offset().left ) / this.width() );
			},

			drag_end: function(e){
				e.preventDefault();

				var next_model = this.collection.next( this.active_model() );
				this.collection.activate( next_model );

				$(document).off("mousemove touchmove", this._drag_move );
				$(document).off("mouseup touchend", 	 this._drag_end  );
			},

			page_x: function(e){
				if( document.ontouchstart !== undefined ){
					return e.originalEvent.targetTouches[0].pageX
				}else{
					return e.pageX
				}
			},

			width: function(){
				return this.$el.width();
			}

		});
	}
);