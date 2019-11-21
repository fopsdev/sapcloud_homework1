function initModel() {
	var sUrl = "/apihub_sandbox/sapb1/b1s/v2/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}