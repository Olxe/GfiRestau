/*eslint-disable no-console, no-alert */

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("GfiRestau.controller.view3", {
		onInit: function() {
			
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
			var oModelMenu = sap.ui.getCore().getModel("MenuSelection");
			
			var idMenu = oModelMenu.getProperty("/MenuSelection").Id;
			var desc = this.getView().byId("InputDescription").getValue();
			var name = this.getView().byId("InputNom").getValue();
			
			if(desc !== "" && name !== "") {
				var myModel = sap.ui.getCore().getModel("MyModel");
				myModel.setHeaders({
					"X-Requested-With" : "X"
				});
				var that = this;
				var obj = {};
				obj.Description = this.getView().byId("InputDescription").getValue();
				obj.Nom = this.getView().byId("InputNom").getValue();
				obj.IdMenu = idMenu;
				myModel.create("/PlatSet", obj, {
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
			MessageToast.show("Ajout d'un plat annulé");
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
