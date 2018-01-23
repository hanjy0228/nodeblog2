/**
 * Created by HanJingYi on 2018/1/20.
 */
var userModel=require("../models/userModel");
var blogModel=require("../models/blogModel");
exports.index=function(req, res, next) {
    //res.render('index');
    blogModel.getBlogs(function(blogs){
        if(blogs.length>0){
            blogModel.getTypes(function(types){
              res.render('index',{
                  name:req.session.loginUser,
                  blogs:blogs,
                  types:types
              })
            })
        }else{
            res.redirect('error');
        }
    })
};
exports.reg= function(req, res) {
    res.render('regist');
};
exports.regist= function(req, res) {

    var uname=req.query.name;
    var pwd=req.query.pwd;
    var pwd2=req.query.pwd2;
    var fn=function(results){
        res.send(results);
    };
    userModel.regist(uname,pwd,fn);

};
exports.login=function(req, res) {
    res.render('login');
};
exports.checkLogin = function (req,res) {
    var name = req.body.uname;
    var pwd = req.body.pwd;

    userModel.getUserByNameAndPwd(name,pwd,function(results){
        if(results.length > 0){
            req.session.loginUser = results[0];
            res.render('index',{
                name:name
            });
        }else{
            res.redirect('/login');
        }

    });

}