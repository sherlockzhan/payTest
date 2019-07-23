//定义基础控制器
app.controller("baseController", function($scope) {
	// 重新加载列表 数据
	$scope.reloadList = function() {
		// 切换页码
		$scope.search($scope.paginationConf.currentPage,
				$scope.paginationConf.itemsPerPage);
	};
	// 分页控件配置
	$scope.paginationConf = {
		currentPage : 1,
		totalItems : 10,
		itemsPerPage : 10,
		perPageOptions : [ 10, 20, 30, 40, 50 ],
		onChange : function() {
			$scope.reloadList();// 重新加载
		}
	};
	// selectIds初始化
	$scope.selectIds = [];
	// 选中品牌列表id事件
	$scope.updateSelection = function($event, id) {
		// 选中品牌时添加
		if ($event.target.checked) {
			$scope.selectIds.push(id);
		} else {
			// 取消时删除
			$scope.selectIds.splice($scope.selectIds.indexOf(id), 1);
		}
	};
	//将json数组转换成json对象
	$scope.jsonToString = function(jsonList,key) {
		var obj = JSON.parse(jsonList);
		var value = "";
		for(var i=0; i<obj.length; i++) {
			if(i>0) {
				value += ",";
			}
			value += obj[i][key];
		}
		return value;
	}
})