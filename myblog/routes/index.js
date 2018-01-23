var express = require('express');
var user =require('../controllers/user')
var router = express.Router();

router.get('/',user.index);
router.get('/login', user.login);
router.post('/login',user.checkLogin);
router.get('/regist', user.regist);
router.get('/reg', user.reg);


module.exports = router;
