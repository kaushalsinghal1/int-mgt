var express = require('express');
var router=express.Router();
//var student = require('./../../common/student.student');

let response = {
    status: 200,
    message: null,
    data: []
}

var sendError = (err, res) =>{
        response.status=501;
        response.message = typeof err == Object ? err.message : err;
        res.status(501).json(response);
}

router.get('/students', (req, res)=>{
    
    response.data = getDummyJson();
    res.json(response);
})

getDummyJson = function(){
    return [{
        name: 'kaushal',
        age: 30
    }];
}

module.exports = router;