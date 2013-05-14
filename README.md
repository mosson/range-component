Range HTML Component on Backbone.js
===============

This is pseudo \<input type="range" /\> element.

and, can have **multi** range handles.

also, you can edit **LOOK AND FEEL** by **CSS**.

enjoy.

---

[see demo](http://mosson.github.io/range-component/)

---

## Dependencies

- requirejs
- jquery
- underscore.js
- backbone.js

i recommend to use **yomen** generator-backbone

## Usage



```
require.config({
    /*
    ...
    */
    
    // it's important of name of keys
    paths: {
        jquery: '[jquery_path]',
        backbone: '[backbone_path]',
        underscore: '[underscore_path]',
    }
});

...

require(['jquery', 'views/ranges_view'], function($, RangesView){
    $(document).ready(function(){
    	// for example, all el, has range class, behavior range component.
        $(".range").each(function(){
            new RangesView({el: $(this)});
        });
    });
});
```

and, HTML structure is 


```
<div class="range">
	<div class="handles">
	    <a href="#" class="handle">
	    	<!-- invisible -->
	        <input type="range" value="0.5" step="any" min="0" max="1" />
	        <span>|</span>
	    </a>
	</div>
</div>
```


## LICENSE

MIT or Beerware

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */