const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    console.log("hi")
    var arr = []
    while(arr.length < 1000){
        var randomnumber = Math.floor(Math.random() * 9000) + 1000;
        var rnSplit = `${randomnumber}`.split('')
        if((arr.indexOf(randomnumber) > -1) || (Array.from(new Set(rnSplit)).length != 4)) continue;
        arr[arr.length] = randomnumber;
    }
    // console.log(arr)
    // to test unique values count 
    // console.log(Array.from(new Set(arr)).length) 
    res.json({data: arr, message: "unique nums"})
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))