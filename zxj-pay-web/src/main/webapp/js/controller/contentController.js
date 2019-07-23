//控制层 
app.controller('contentController', function($scope, contentService) {

	$scope.adList = [];
	
	// 根据categoryId查找content
	$scope.findContentListByCategoryId = function(categoryId) {
		contentService.findContentListByCategoryId(categoryId).success(function(data) {
			$scope.adList[categoryId] = data;
		})
	}
	
	//跳转页面
	$scope.search = function() {
		location.href = "http://localhost:8083/search.html#?keywords=" + $scope.keywords;
	}
});
