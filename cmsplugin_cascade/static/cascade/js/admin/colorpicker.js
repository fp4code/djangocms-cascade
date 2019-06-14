django.jQuery(function($) {
	'use strict';
	var $checkboxElem = $('.cascade-color-picker > input[type="checkbox"]');

	function color_selector(id_glossary) {
		var parent = id_glossary.parent();
		parent.append('<input class="color_picker" type="color" style="display:none;opacity:0;position:absolute;"/>');
		parent.append('<span class="thumb_color_picker" style="background-color:' + id_glossary.val() + '; position: absolute; top: 5px;  left: 5px; width: 18px; height:18px; border: 1px solid;" ></span>');
		id_glossary.add(".thumb_color_picker").on('click', function() {
			var cp =  parent.find('.color_picker');
			var thumb_cp = parent.find('.thumb_color_picker');
			cp.on('change', function() {
				thumb_cp.css('background-color', cp.val());
				id_glossary.val(cp.val());
			});
			cp.trigger('click');
		});
	}
	$('.color_picker input').each(function() {
		color_selector($(this));
	});

	function colorWidgetChanged(checkboxInput) {
		var $colorInput = $(checkboxInput).siblings('input[type="color"]');
		$colorInput.prop('disabled', checkboxInput.checked || checkboxInput.disabled);
	}

	$checkboxElem.on('change', function(evt) {
		colorWidgetChanged(evt.target);
	});
	$.each($checkboxElem, function() {
		colorWidgetChanged(this);
	});
});
