var mongoose = require('mongoose');

//what kind of fields will be there in collections
var productSchema  = new mongoose.Schema({
    name:String,
   
    sort: {
        type: mongoose.Schema.Types.Mixed,

    }
}, { versionKey: false });
//mongoose.model('collection','schema)
mongoose.model('Product',productSchema);
module.exports = mongoose.model('Product');

// export default Product