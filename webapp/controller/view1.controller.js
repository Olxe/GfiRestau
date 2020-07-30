/*eslint-disable no-console, no-alert */

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/Text"
], function(Controller, JSONModel, Filter, FilterOperator, MessageBox, MessageToast, Dialog, Text) {
	"use strict";

	return Controller.extend("GfiRestau.controller.view1", {
		onInit: function() {
			// var oMenuData = {
			// 	"menu": [{
			// 		"id": "1",
			// 		"nom": "Plats français",
			// 		"description": "Spécialités françaises ",
			// 		"date": "24/06/2020",
			// 		"plats": [{
			// 			"id": "1",
			// 			"nom": "Tartiflette",
			// 			"description": "Composée de pommes de terre, de lardons, de reblochon et d’oignon et généralement accompagnée d’une bonne salade verte, la tartiflette est une spécialité culinaire française originaire de Savoie. Un repas simple, mais délicieux qui s’apprécie à tout moment de l’année, en hiver – le soir après une bonne journée de ski – comme en été."
			// 		}, 
			// 		{
			// 			"id": "2",
			// 			"nom": "Coq au Vin",
			// 			"description": "Le coq au vin est un plat traditionnel de la cuisine française. Pour préparer ce plat, vous avez besoin d’un coq découpé en morceaux cuisiné dans du bon vin (généralement rouge, mais le riesling peut également faire l’affaire) et accompagné d’oignons, de carottes, d’un bouquet garni et de champignons. Bon appétit."
			// 		},
			// 		{
			// 			"id": "3",
			// 			"nom": "Quiche lorraine",
			// 			"description": "La quiche est – avec les bergamotes, les madeleines et la mirabelle – l’une des plus délicieuses spécialités culinaires lorraines. Recouverte de lardons et de migaine, cette tarte salée se consomme idéalement en entrée. Cette spécialité française traditionnelle se déguste avec une bonne salade verte ou des endives."
			// 		}]
			// 	}, 
			// 	{
			// 		"id": "2",
			// 		"nom": "Plats marocains",
			// 		"description": "Spécialités marocaines",
			// 		"date": "25/06/2020",
			// 		"plats": [{
			// 			"id": "4",
			// 			"nom": "Couscous",
			// 			"description": "Probablement le plat le plus populaire avec le tajine, c’est en tout cas celui qui vient en premier à l’esprit lorsque l’on évoque la gastronomie marocaine. Traditionnellement servi le vendredi midi, après la prière de dhuhr, on le déguste aujourd’hui indifféremment tous les jours de la semaine. D’origine berbère, la version traditionnelle se compose de bœuf et de mouton, parfois de poulet, d’une multitude de légumes et légumineuses (courgettes, navets, fèves, lentilles, pois) et bien sûr, de semoule de blé. Les marocains le dégustent à même le plat, ou le servent dans des assiettes individuelles."
			// 		}, 
			// 		{
			// 			"id": "5",
			// 			"nom": "Tajine",
			// 			"description": "Le tajine est un plat typique marocain dont les origines sont également berbères. On dit d’ailleurs que les meilleurs tajines se savourent aujourd’hui encore en territoire berbère ! Il s’agit d’une sorte de ragoût cuit à l’étouffée dans un plat en terre surmonté d’un couvercle conique. Il existe un nombre infini de recettes de tajines, toutes plus savoureuses les unes que les autres: Tajine de poulet aux légumes, au safran ou aux pruneaux, tajines de légumes aux pois chiches, tajines de sardines, tajines de moutons aux oignons et pois chiches etc…"
			// 		}]
			// 	},
			// 	{
			// 		"id": "3",
			// 		"nom": "Plats mixte",
			// 		"description": "Spécialités françaises/marocaines",
			// 		"date": "26/06/2020",
			// 		"plats": [{
			// 			"id": "1",
			// 			"nom": "Tartiflette",
			// 			"description": "Composée de pommes de terre, de lardons, de reblochon et d’oignon et généralement accompagnée d’une bonne salade verte, la tartiflette est une spécialité culinaire française originaire de Savoie. Un repas simple, mais délicieux qui s’apprécie à tout moment de l’année, en hiver – le soir après une bonne journée de ski – comme en été."
			// 		}, 
			// 		{
			// 			"id": "4",
			// 			"nom": "Couscous",
			// 			"description": "Probablement le plat le plus populaire avec le tajine, c’est en tout cas celui qui vient en premier à l’esprit lorsque l’on évoque la gastronomie marocaine. Traditionnellement servi le vendredi midi, après la prière de dhuhr, on le déguste aujourd’hui indifféremment tous les jours de la semaine. D’origine berbère, la version traditionnelle se compose de bœuf et de mouton, parfois de poulet, d’une multitude de légumes et légumineuses (courgettes, navets, fèves, lentilles, pois) et bien sûr, de semoule de blé. Les marocains le dégustent à même le plat, ou le servent dans des assiettes individuelles."
			// 		}]
			// 	}]
			// };
			// var oModel = new JSONModel(oMenuData);
			// this.getView().setModel(oModel);
			// var modelUser = sap.ui.getCore().getModel("MenuModel");
			// console.log(modelUser);
			
			
			var sServiceURL 
			     = "/S4H/sap/opu/odata/sap/ZMENU_PO_FINAL_SRV/";
			 
 			var oModel = new sap.ui.model.odata.ODataModel(sServiceURL, true);
    		sap.ui.getCore().setModel(oModel, "MyModel");
    		this.getView().setModel(oModel);
		},
		
		onObjectItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();

			var oModel = sap.ui.getCore().getModel("MyModel");
			var oTable = this.getView().byId("projectlistid");
			var header = this.getView().byId("header");
			oModel.read(path, {
				success : function(oData) {
					var readurl = "/PlatSet?$filter=IdMenu eq '" + oData.Id + "'";
					var oJsonModel = new sap.ui.model.json.JSONModel();
					header.setText("Liste des plats du: " + oData.DateMenu);
					oModel.read(readurl, {
						success : function(oData2) {
							oJsonModel.setProperty("/Plat", oData2.results);
		                    oTable.setModel(oJsonModel);
						},
						error : function(err) {
							console.log(err);
						}
					});
				},
				error : function(err) {
					console.log(err);
				}
			});

			this.value = path;
			// this.getView().byId("projectlistid").bindElement(path);		
		},
		
		
		onDetailObjectItemPress: function(oEvent) {
			MessageBox.information(oEvent.getSource().getDescription());
		},
		
		onDetailAddPress: function(oEvent) {
			var oModel = sap.ui.getCore().getModel("MyModel");
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			var path = this.value;
			if(path === undefined) {
				MessageToast.show("Veuillez sélectionner un menu");
			}
			else {
				oModel.read(path, {
					success : function(oData) {
						var oJsonModel = new sap.ui.model.json.JSONModel();
						oJsonModel.setProperty("/MenuSelection", oData);
						sap.ui.getCore().setModel(oJsonModel, "MenuSelection");
						router.navTo("view3");
					},
					error : function(err) {
						console.log(err);
					}
				});	
			}
		},
		
		onMasterAddPress: function(oEvent) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("view2");
		},
		
		onMasterDelete: function(oEvent) {
			var oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext().getPath();

			var myModel = sap.ui.getCore().getModel("MyModel");
			myModel.setHeaders({
				"X-Requested-With" : "X"
			});
			
			var oDialog = new Dialog({
				title: "Confirmation",
				type: "Message",
				content: new Text({ text: "Etes vous sûr de vouloir supprimer ce menu ?" }),
				beginButton: new sap.m.Button({
					type: sap.m.ButtonType.Emphasized,
					text: "Valider",
					press: function () {
						myModel.remove(sPath, {
							success : function(oData, oResponse) {
								MessageToast.show("Menu supprimé");
							},
							error : function(err, oResponse) {
								MessageToast.show("Erreur lors de la suppression: " + err.response.statusText);
							}
						});
						oDialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: "Annuler",
					press: function () {
						oDialog.close();
					}
				}),
				afterClose: function () {
					oDialog.destroy();
				}
			});

			oDialog.open();
		},
		
		onDetailDelete: function(oEvent) {
			var oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext().getPath();
			
			var myModel = sap.ui.getCore().getModel("MyModel");
			myModel.setHeaders({
				"X-Requested-With" : "X"
			});
			
			var oDialog = new Dialog({
				title: "Confirmation",
				type: "Message",
				content: new Text({ text: "Etes vous sûr de vouloir supprimer ce plat ?" }),
				beginButton: new sap.m.Button({
					type: sap.m.ButtonType.Emphasized,
					text: "Valider",
					press: function () {
						myModel.remove("PlatSet('" + oItem.getBindingContext().getModel().getProperty("/Plat")[sPath.split("/")[2]].Id + "')", {
							success : function(oData, oResponse) {
								MessageToast.show("Plat supprimé");
							},
							error : function(err, oResponse) {
								MessageToast.show("Erreur lors de la suppression: " + err.response.statusText);
							}
						});
						oDialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: "Annuler",
					press: function () {
						oDialog.close();
					}
				}),
				afterClose: function () {
					oDialog.destroy();
				}
			});

			oDialog.open();
		},
		
		onDatePickerChange: function(oEvent) {
			// create a blank filter array
			var aFilter = [];
			// get the string which was searched by the user
			var sQuery = oEvent.getSource().getValue();
			// create new filter object using the searched string
			var oFilter = new sap.ui.model.Filter("DateMenu", FilterOperator.Contains, sQuery);
			// push the newly created filter object in the blank filter array created above.
			aFilter.push(oFilter);
			// get the binding of items aggregation of the List
			var oBinding = this.getView().byId("emplist").getBinding("items");
						console.log(oBinding);
			// apply filter on the obtained binding
			oBinding.filter(aFilter);
		}
	});

});