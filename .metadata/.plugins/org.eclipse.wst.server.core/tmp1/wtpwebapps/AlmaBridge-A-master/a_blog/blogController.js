'use strict'
angular.module('almaApp').controller(
		'blogController',
		 [
		  '$scope',
		  'blogService',
		  '$location',
		  '$rootScope',
		  '$http',
		  function($scope,blogService,$location,$rootScope,$http) {
			  console.log("Inside blogController");
			  /*var self = this;*/
			  $scope.blog = {errorCode:"",errorMsg:"",blogId:null,title:"",description:"",userId:"",blogDate:"",noOfViews:"",status:"",reason:"",likes:"",dislikes:""};
			  
			 /* $scope.blogs = [] ;*/
			  
			  getAllBlogs();
			  
			   function getAllBlogs(){
				  console.log("in fetch all blogs..")
				  blogService.fetchAllBlogs()
				       		.then(
				       				function(d){$scope.blogs =d;
				       				console.log("blogs array length is .."+d.length) ;
				       				},
				       				function(errResponse){console.error('Error while getting blogs');});
				       				
			  }
			   
			   $scope.getBlog = function getBlog(id){
			        blogService.getBlog(id)
			            .then(
			            function(d) {
			                /*$scope.currentBlog = d;*/
			                $location.path('/blogDetails');
			                console.log("getting blog with id .."+id +'/'+d.title) ;
			                $rootScope.currentBlog = d; 
			                $rootScope.currentBlogId = id; 
			            },
			            function(errResponse){
			                console.error('Error while fetching current blog');
			            }
			        );
			    }
			 
			  	$scope.message = 'Look! I am a Blog page.';
			  	$scope.blog = 'Look! I am a abc page.';
			  	$scope.comments= [
                           {
                               rating:5,
                               comment:"Imagine all the eatables, living in conFusion!",
                               author:"John Lemon",
                               date:"2012-10-16T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                               author:"Paul McVites",
                               date:"2014-09-05T17:57:28.556094Z"
                           },
                           {
                               rating:3,
                               comment:"Eat it, just eat it!",
                               author:"Michael Jaikishan",
                               date:"2015-02-13T17:57:28.556094Z"
                           },
                           {
                               rating:4,
                               comment:"Ultimate, Reaching for the stars!",
                               author:"Ringo Starry",
                               date:"2013-12-02T17:57:28.556094Z"
                           },
                           {
                               rating:2,
                               comment:"It's your birthday, we're gonna party!",
                               author:"25 Cent",
                               date:"2011-12-02T17:57:28.556094Z"
                           }    
                        ];
                    
			  	
			  	
}]);