//定义控制器
app.controller("loginController",function($scope,loginService) {
	//获取登录信息
	$scope.loadLoginName = function() {
		loginService.loadLoginName().success(function(data) {
			$scope.loginName = data.loginName;
		})
	}
});