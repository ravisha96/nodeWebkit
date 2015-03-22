/* GET home page. */
exports.index = function(req, res){
  res.render('index');
};

exports.login = function (req, res) {
	console.log(res);
	console.log(req);
}
