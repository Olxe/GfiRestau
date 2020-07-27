/*eslint-disable no-console, no-alert */

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox"
], function(Controller, JSONModel, Filter, FilterOperator, MessageBox) {
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
			
			// var oModel = new sap.ui.model.odata.v2.ODataModel("/S4H/sap/opu/odata/sap/ZMENU_PO_FINAL_SRV/");
			// sap.ui.getCore().setModel(oModel, "myModel");
			// var readurl = "/MenuSet";
			// console.log(oModel);
			// oModel.read(readurl, {
			// 	success : function(oData, oResponse) {
			// 		console.log(oData);
 
			// 	}
			// });
			
			 // access OData model declared in manifest.json file
			 //var oModel = this.getOwnerComponent().getModel("MenuModel");
			 //console.log(oModel);
			 //set the model on view to be used by the UI controls
			 //this.getView().setModel(oModel);
			
			// var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMENU_PO_FINAL_SRV/");
			// sap.ui.getCore().setModel(oModel, "myModel");
			// var readurl = "/MenuSet";
			// oModel.read(readurl, {
			// 	success : function(oData, oResponse) {
			// 		console.log(oData);
 
			// 	},
			// 	error : function(err) {
			// 		console.log(err);
			// 	}
			// });
			
			// this.getView().setModel(oModel);
			
			// this.getOwnerComponent().getModel("MenuSet");

			// var oModel = this.getView().getModel("MenuSet");
			// console.log(oModel);
			
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

			
    		// var that = this;
			var readurl = "/PlatSet";
			var oModel = sap.ui.getCore().getModel("MyModel");
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var oTable = this.getView().byId("projectlistid");
			
			oModel.read(readurl, {
				success : function(oData) {
					oJsonModel.setProperty("/Plat", oData.results);
					
                    oTable.setModel(oJsonModel);
					
					console.log(oJsonModel);
				},
				error : function(err) {
					console.log(err);
				}
			});
			// this.getView().byId("projectlistid").bindElement(oJsonModel);
			// this.getView().byId("projectlistid").bindElement(path);		
		},
		
		
		onDetailObjectItemPress: function(oEvent) {
			MessageBox.information(oEvent.getSource().getDescription());
		},
		
		onDetailAddPress: function(oEvent) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("view3");
		},
		
		onMasterAddPress: function(oEvent) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("view2");
		},
		
		onDatePickerChange: function(oEvent) {
			// create a blank filter array
			var aFilter = [];
			// get the string which was searched by the user
			var sQuery = oEvent.getSource().getValue();
			// create new filter object using the searched string
			var oFilter = new sap.ui.model.Filter("date", FilterOperator.Contains, sQuery);
			// push the newly created filter object in the blank filter array created above.
			aFilter.push(oFilter);
			// get the binding of items aggregation of the List
			var oBinding = this.getView().byId("emplist").getBinding("items");
			// apply filter on the obtained binding
			oBinding.filter(aFilter);
		}
	});

});