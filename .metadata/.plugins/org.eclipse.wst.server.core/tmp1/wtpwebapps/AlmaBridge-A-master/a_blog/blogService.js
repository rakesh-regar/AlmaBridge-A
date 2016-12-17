'use strict'
almaApp.service('blogService',['$http','$q','$rootScope',function($http,$q,$rootScope){
	var BASE_URL = 'http://localhost:8200/AlmaBridgeB' 
	
		
		var factory = {
	        fetchAllBlogs: fetchAllBlogs,
	        getBlog:getBlog
	        /*createBlog: createBlog,
	        updateBlog:updateBlog,
	        deleteBlog:deleteBlog,
	        getCurrentBlog:getCurrentBlog*/
	    };

		return factory;

		function fetchAllBlogs() {
	        var deferred = $q.defer();
	        $http.get(BASE_URL+'/blogs')
	            .then(
	            function (response) {
	                deferred.resolve(response.data);
	            },
	            function(errResponse){
	                console.error('Error while fetching Blogs');
	                deferred.reject(errResponse);
	            }
	        );
	        return deferred.promise;
	    }
		
		function getBlog(id) {
	        var deferred = $q.defer();
	        $http.get(BASE_URL+'/blog/'+id)
	            .then(
	            function (response) {
	                deferred.resolve(response.data);
	            },
	            function(errResponse){
	                console.error('Error while fetching the Blog');
	                deferred.reject(errResponse);
	            }
	        );
	        return deferred.promise;
	    }
}]);