var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const modulesSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Modules', modulesSchema);