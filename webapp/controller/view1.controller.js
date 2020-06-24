sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GfiRestau.controller.view1", {
		onClick: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("view2");
		}
	});

});