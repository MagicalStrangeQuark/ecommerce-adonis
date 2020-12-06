'use strict'

const Order = require("../Order");

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async (modelInstance) => {
    modelInstance.$sideLoaded.subtotal = await modelInstance.items().getSum('subtotal');
    modelInstance.$sideLoaded.qty_items = await model.items().getSum('quantity');
    modelInstance.$sideLoaded.discount = await model.discounts().getSum('discount');
    modelInstance.total = modelInstance.$sideLoaded.subtotal - modelInstance.$sideLoaded.discount;
}

OrderHook.updateCollectionValues = async (modelInstances) => {
    for (let modelInstance of modelInstances) {
        model = await OrderHook.updateValues(modelInstance);
    }
}