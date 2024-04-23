const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true,
    },
    clientName:{
        type:String,
        required: true,
    },
    startDate:{
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    isActive: {
        type: String,
        required: true,
    },
    clientManager: {
        type: String,
        required: true,
    },
    clientEngineer: { 
        type: String,
        required: true,
    },
    clientContact: { 
        type: String,
        required: true,
    },
});

const ClientForm = mongoose.model("clientForm", userSchema);
module.exports = ClientForm;