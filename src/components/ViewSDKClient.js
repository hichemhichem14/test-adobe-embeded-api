class ViewSDKClient {
    constructor() {
    this.readyPromise = new Promise((resolve) => {
    if (window.AdobeDC) {
    resolve();
    } else {
    document.addEventListener("adobe_dc_view_sdk.ready", () => {
    resolve();
    });
    }
    });
    this.adobeDCView = undefined;
    }
    ready() {
    return this.readyPromise;
    }
    previewFile(divId, viewerConfig, url) {
    const config = {
    clientId: "fc9d0f9671774fb2a0f500dd5f4d0f73" //this is my api key
    
    
    };
    if (divId) {
    config.divId = divId;
    }
    this.adobeDCView = new window.AdobeDC.View(config);
    const previewFilePromise = this.adobeDCView.previewFile(
    {
    content: {
    location: {
    url: url
    }
    },
    metaData: {
    fileName: "Menu.pdf",
    id: "6d07d124-ac85–43b3-a867–36930f502ac6"
    }
    },
    viewerConfig
    );
    return previewFilePromise;
    }
    previewFileUsingFilePromise(divId, filePromise, fileName) {
    this.adobeDCView = new window.AdobeDC.View({
    clientId: "fc9d0f9671774fb2a0f500dd5f4d0f73", //this is my api key
    divId
    });
    this.adobeDCView.previewFile(
    {
    content: {
    promise: filePromise
    },
    metaData: {
    fileName: fileName
    }
    },
    {}
    );
    }
    registerSaveApiHandler() {
    const saveApiHandler = (metaData, content, options) => {
    console.log(metaData, content, options);
    return new Promise((resolve) => {
    setTimeout(() => {
    const response = {
    code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
    data: {
    metaData: Object.assign(metaData, {
    updatedAt: new Date().getTime()
    })
    }
    };
    resolve(response);
    }, 2000);
    });
    };
    this.adobeDCView.registerCallback(
    window.AdobeDC.View.Enum.CallbackType.SAVE_API,
    saveApiHandler,
    {}
    );
    }
    registerEventsHandler() {
    this.adobeDCView.registerCallback(
    window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
    (event) => {
    console.log(event);
    },
    {
    enablePDFAnalytics: true
    }
    );
    }
    gotopage(previewFilePromise,page){
        previewFilePromise.then(adobeViewer => {

            adobeViewer.getAPIs().then(apis => {
                    apis.gotoLocation(page)
                            .then(() => console.log("Success"))
                            .catch(error => console.log(error));
             });
    });
    }
    gotopagev2(previewFilePromise,page){
        previewFilePromise.then(adobeViewer => {

            adobeViewer.getAPIs().then(apis => {
                    apis.gotoLocation(page)
                            .then(() => console.log("Success"))
                            .catch(error => console.log(error));
             });
    });
    }
   }
   export default ViewSDKClient;




/* ////////////////*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

