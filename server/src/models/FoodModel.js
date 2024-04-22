const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        FoodName: {type: String, required: true},
        FoodCode: {type: String, required: true},
        FoodImg: {type: String, required: true},
        FoodCategory: {type: String, required: true},
        FoodQTY: {type: String, required: true},
        FoodPrice: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FoodModel = mongoose.model('foods', DataSchema);

module.exports = FoodModel;
