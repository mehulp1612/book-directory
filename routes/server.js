const express = require('express');
const mongoose = require('mongoose');
const userRouter  = require('./routers/userRouter');
const productRouter  = require('./routers/productRouter');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// `mongodb+srv://rahulmahajann:lala@cluster0.qkode.mongodb.net/lalasweets?retryWrites=true&w=majority`
// 'mongodb://localhost/lalasweets'


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/lalasweet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// mongoose.connect(`mongodb+srv://rahulmahajann:lala@cluster0.qkode.mongodb.net/lalasweets?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });


const port = process.env.PORT||5008;

app.get('/',(req,res)=>{
    res.send('hello lala sweets!');
});

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);

app.use((err, req, res, next)=>{
    res.status(500).send({
        message: err.message
    });
});

app.listen(port,()=>{
    console.log(`port running on -> http://localhost:${port}`);
});
