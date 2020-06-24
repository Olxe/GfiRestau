sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("GfiRestau.controller.view1", {
		onInit: function() {
			var oEmpData = {
				"emp": [{
					"empid": "111111",
					"empname": "John Walter",
					"exp": "12",
					"age": "40",
					"city": "Tokyo",
					"country": "Japan",
					"designation": "Delivery Manager",
					"cadre": "Band 5",
					"projects": [{
						"projectid": "PGIMPL",
						"projectname": "P &amp; G SAP Implementation"
					}, {
						"projectid": "ARMSUPPORT",
						"projectname": "Aramco Support"
					}]
				}, {
					"empid": "222222",
					"empname": "Rashid Khan",
					"exp": "3",
					"age": "24",
					"city": "Tokyo",
					"country": "Japan",
					"cadre": "Band 1",
					"designation": "Software Engineer",
					"projects": [{
						"projectid": "AIRBNB",
						"projectname": "AIRBNB Implementation"
					}, {
						"projectid": "TATA",
						"projectname": "Tata Power Support"
					}]
				}, {
					"empid": "333333",
					"empname": "Supriya Singh",
					"exp": "5",
					"age": "34",
					"city": "Tokyo",
					"country": "Japan",
					"cadre": "Band 3",
					"designation": "Sr. Software Engineer",
					"projects": [{
						"projectid": "INDIAGOV",
						"projectname": "INDIA GOV SAP Implementation"
					}, {
						"projectid": "ARMSUPPORT",
						"projectname": "Aramco Support"
					}]
				}]
			};
			var oModel = new JSONModel(oEmpData);
			this.getView().setModel(oModel);
		},
		
		onObjectItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			this.getView().byId("projectlistid").bindElement(path);		
		},
		
		onSearch: function(oEvent) {
			// create a blank filter array
			var aFilter = [];
			// get the string which was searched by the user
			var sQuery = oEvent.getParameter("query");
			// create new filter object using the searched string
			var oFilter = new sap.ui.model.Filter("empname", FilterOperator.Contains, sQuery);
			// push the newly created filter object in the blank filter array created above.
			aFilter.push(oFilter);
			// get the binding of items aggregation of the List
			var oBinding = this.getView().byId("emplist").getBinding("items");
			// apply filter on the obtained binding
			oBinding.filter(aFilter);
		},
		
		onClick: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("view2");
		}
	});

});