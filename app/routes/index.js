/* GET home page. */
(function () {

	/**
	 * [URL description]
	 */
	function URL () {

		this.index = function(req, res){
		  res.render('index');
		},

		this.login = function (req, res) {
			console.log(res);
			console.log(req);
		}

	}


	return module.exports = new URL();

})();