//服务层
app.service('contentService',function($http){
	    	
	// 根据categoryId查找content
	this.findContentListByCategoryId = function(categoryId) {
		return $http.get("../content/findContentListByCategoryId?categoryId="+categoryId);
	}
	
});
