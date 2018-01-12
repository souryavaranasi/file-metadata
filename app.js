var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var multer=require('multer');
var upload = multer({ dest: 'uploads/' });
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(cors());

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/upload',upload.single('file'),function(req,res){
    res.json({size:req.file.size})
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
})