
const Helper = require('../helper');
// const UserModal = require('../modal/UserModal');
const ProductModal = require('../modal/ProductModal');
const Validation = require('../validation');
const Joi = require('joi'); 
const sendMail = require('../mail');
const jwt = require('jsonwebtoken');

const add = async (req, res) => {
    
    const reqData = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    };    
    
    const {error} =  Validation.addProduct.validate(reqData, {abortEarly: false}); 
    if (error) {        
        const allErrors = error.details.map( (err) => {
            const errorObject = {
                type: err.path[0],
                message : err.message
                
            }
            return errorObject;
        });
        return res.status(409).json({ status: "error", messages: allErrors });
    }else {
        try {
            const oldProduct = await ProductModal.findOne({ title : reqData.title}); 
            if(oldProduct){
                return res.send(409, {status : "error", message : "this product is allready registered!"});
            }
            const product = await ProductModal.create(reqData);    
            return res.send(200, {status : 200, message : "successfully registered! ", data : product });
    
        } catch (err) {
            console.error(err);
            return res.send(409, {status : "error", message : "Something Went Wronge!"});
        }
    }
}

const list = async (req, res) => {
    try {
        const products = await ProductModal.find().sort({ createdAt: -1 });
        return res.send(200, {status : 200, message : "successfully registered! ", data : products });
    
    } catch (err) {
        console.error(err);
        return res.send(409, {status : "error", message : "Something Went Wronge!"});
    }
}


module.exports = {
    add,
    list
}