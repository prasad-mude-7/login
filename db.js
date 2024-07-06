var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://prasad:prasadmude7@cluster0.ellerap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BHARAT',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log("connection successfully....")
  })
  .catch((err)=>{
    console.log(err)
  })