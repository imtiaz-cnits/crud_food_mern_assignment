const FoodModel = require('../models/FoodModel');

exports.Create = async (req, res) => {
    try {
        let reqBody = req.body;
        await FoodModel.create(reqBody);
        res.status(200).json({status: 'Success', message: "Food Items Created"});
    }
    catch (err) {
        res.status(200).json({status: 'Failed', error: err});
    }
}


exports.Read = async (req, res) => {
    try {
        let foodRead = await FoodModel.find();
        res.status(200).json({status: 'Success', message: 'Request Completed', food: foodRead});
    }
    catch (err) {
        res.status(200).json({status: 'Failed', error: err});
    }
}


exports.Update = async (req, res) => {
    try {
        let {id} = req.params;
        let reqBody = req.body;
        await FoodModel.updateOne({ _id: id }, reqBody);
        res.status(200).json({status: 'Success', message: "Food Items Updated"});
    }
    catch (err) {
        res.status(200).json({status: 'Failed', error: err});
    }
}


exports.Delete = async (req, res) => {
    try {
        let {id} = req.params;
        await FoodModel.deleteOne({ _id: id });
        res.status(200).json({status: 'Success', message: "Food Items Deleted"});
    }
    catch (err) {
        res.status(200).json({status: 'Failed', error: err});
    }
}