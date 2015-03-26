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
			console.log(req.body);
		}

	}


	return module.exports = new URL();

})();