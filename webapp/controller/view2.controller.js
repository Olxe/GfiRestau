sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, History, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("GfiRestau.controller.view2", {
		onInit: function() {
			var oModel = new JSONModel();
			oModel.setData({
				dateValue: new Date()
			});
			this.getView().setModel(oModel);	
		},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		},
		onAcceptPress: function () {
			var desc = this.getView().byId("InputDescription").getValue();
			var name = this.getView().byId("InputNom").getValue();
			var date  = this.getView().byId("DP4").getValue();
			
			if(desc !== "" && name !== "" && date !== "") {
				var myModel = sap.ui.getCore().getModel("MyModel");
				myModel.setHeaders({
					"X-Requested-With" : "X"
				});
				var that = this;
				var obj = {};
				obj.Description = this.getView().byId("InputDescription").getValue();
				obj.Name = this.getView().byId("InputNom").getValue();
				obj.DateMenu = this.getView().byId("DP4").getValue();
				myModel.create("/MenuSet", obj, {
					success : function(oData, oResponse) {
						MessageToast.show("Ajout effectué");
						that.getView().byId("InputDescription").setValue("");
						that.getView().byId("InputNom").setValue("");
					},
					error : function(err, oResponse) {
						MessageToast.show("Erreur lors de l'ajout: " + err.response.statusText);
					}
				});
			}
			else {
				MessageToast.show("Vous devez remplir tout les champs");
			}
		}, 
		onRejectPress: function () {
			MessageToast.show("Ajout d'un menu annulé");
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		}
	});

});