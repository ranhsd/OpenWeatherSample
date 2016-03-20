sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createAPIModel: function() {
			var oModel = new JSONModel();
			oModel.setData({
				city: "",
				country: "",
				cols: [{
					name: "Date"
				}, {
					name: "Day Temperature"
				}, {
					name: "Units"
				},{
					name: "humidity"
				}],
				items: []
			});
			return oModel;			
		}

	};

});