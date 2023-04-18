let express = require('express')
let path = require('path')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let mongoDb = require('./database/db')
//mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database Successfully conected');
}).catch((err)=>{
  console.log(err);
})
const ProductRoute = require('./routes/Productroutes');
const ContactRoute = require('./routes/Contactroutes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors());

//Staticdirectory path
app.use(express.static(path.join(__dirname, 'dist/')))
//Base route
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

//API Root
app.use('/api',ProductRoute);
const port = process.env.PORT || 8000;

app.use('/api',ContactRoute);


//404 Handler
app.use((req,res,next) =>{
    next(createError(404));
})

//error handler
app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})


app.listen(port, () =>{
    console.log('Listening on port ' + port);
    console.log(mongoDb.db);
})