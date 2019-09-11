// var basePath = 'http://hk.demo.yunjy.com.cn';//测试
// // var basePath = 'http://hk.demo.yunjy.com.cn/api';//线下
// // var project = 'https://ceshi.yunjy.com.cn/project/detail/';//测试项目
// var project = 'https://youshiyun.yx.yunjy.com.cn/project/detail/';//正式项目
// var activit ='https://dev.yunjy.com.cn/activityhtml/activity_home.html';//测试活动

var app = new Vue({
	el: '#app',
	data: function() {
		return {
			// http:basePath,
			titlef: "什么是工作坊？",
			pchvi: "为更好地发挥有经验的老师的示范、辐射、引导作用，提升其专业化的发展空间， 促进所有教师的共同发展，形成良性的教师互动机制， 实现优质教育资源共享。",
			gduo: "更多",
			imgSrc1: 'img/20180903144307.png',
			imgSrc2: "img/gz-author-portrait.png",
			imgSrc3: "img/500549129.png",
			imgSrc4: "img/500549128.png",
			articleid: '',
			mysrc: '',
			headline: '',
			presentation: '',
			portrait: '',
			name: '大标题',
			time: '2019/9/11',
			title: '测试产品已就绪',
			picture: '',
			groceryList: [{
				id: 'id-1',
				text: '测试数据',
				picture: '测试数据',
				headportrait: '测试数据',
				membership: '789',
				pageviews: '560',
				describe: '测试数据测试数据测试数据测试数据测试数据测试数据'
			}, {
				id: 'id-2',
				text: '测试数据2',
				picture: '测试数据',
				headportrait: '测试数据',
				membership: '300',
				pageviews: '568',
				describe: '测试数据测试数据测试数据测试数据测试数据测试数据'
			}],
			current: 0,
			tapid: '',
			tablink: [],
			facebookCard: [{
				id: 'id-1',
				cover: 'img/500549128.png',
				price: '9.9',
				rating: '3',
				studentNum: '44',
				studio_name: '陶老师',
				taskNum: '4',
				task_title: '测试标签',
				title: '测试课程名称',
				hitNum: '56',
			}, {
				id: 'id-1',
				cover: 'img/500549128.png',
				price: '9.9',
				rating: '5',
				studentNum: '44',
				studio_name: '陶老师',
				taskNum: '2',
				task_title: '测试标签',
				title: '测试课程名称',
				hitNum: '56',
			}],
			asterastrstar: [1, 2, 3, 4, 5], //星星的颗数
			getevent: [{
				studio_id: 'id-1',
				id: 'id-1',
				title: '测试数据1',
				titleing: '国培',
				username: '陶老师',
				postNum: '56',
				hitNum: '45',
				studio_id: 'id-1',
				studio_name: '陶老师',
				createdTime: '2019/10/11',
			}, {
				studio_id: 'id-1',
				id: 'id-1',
				title: '测试数据1',
				titleing: '国培',
				username: '陶老师',
				postNum: '56',
				hitNum: '45',
				studio_id: 'id-1',
				studio_name: '刘先生',
				createdTime: '2019/10/11',
			}],
			discussion: [{
				studio_id: 'id-1',
				id: 'id-1',
				title: '测试数据',
				titleing: '省陪',
				username:'陶老师',
				postNum: '56',
				hitNum: '45',
				studio_id: 'id-1',
				studio_name: '刘老师',
				createdTime: '2019/10/11',
			},{
				studio_id: 'id-1',
				id: 'id-1',
				title: '测试数据',
				titleing: '省陪',
				username:'陶老师',
				postNum: '56',
				hitNum: '45',
				studio_id: 'id-1',
				studio_name: '刘老师',
				createdTime: '2019/10/11',
			}],
			getproject: [{
				projectId: 'id-1',
				title: '国培项目测试数据123456',
				titleing: '国培项目测试数据',
				status: '未开始',
				statuscss: 'gz-wks',
				createTime: '2019/9/11',
				startTime: '2019/9/11',
				studioName: '标签',
				createUser: '测试数据',
			}, {
				projectId: 'id-1',
				title: '国培项目测试数据123456',
				titleing: '国培项目测试数据',
				status: '进行中',
				statuscss: 'gz-jxz',
				createTime: '2019/9/11',
				startTime: '2019/9/11',
				studioName: '标签',
				createUser: '测试数据',
			}, {
				projectId: 'id-1',
				title: '国培项目测试数据123456',
				titleing: '国培项目测试数据',
				status: '已结束',
				statuscss: 'gz-ywj',
				createTime: '2019/9/11',
				startTime: '2019/9/11',
				studioName: '标签',
				createUser: '测试数据',
			}],
			getactivity: [{
				studioId: 'id-1',
				activityId: 'id-1',
				img: 'img/500549129.png',
				status: '进行中',
				statuscss: 'gz-jxz',
				title: '测试标题',
				type: '测试类型',
				createUser: '陶老师',
				createDate: '1分钟',
				memberNum: '456',
			}, {
				studioId: 'id-1',
				activityId: 'id-1',
				img: 'img/500549129.png',
				status: '未开始',
				statuscss: 'gz-wks',
				title: '测试标题',
				type: '测试类型',
				createUser: '陶老师',
				createDate: '1分钟',
				memberNum: '456',
			}, {
				studioId: 'id-1',
				activityId: 'id-1',
				img: 'img/500549129.png',
				status: '已结束',
				statuscss: 'gz-ywj',
				title: '测试标题',
				type: '测试类型',
				createUser: '陶老师',
				createDate: '1分钟',
				memberNum: '456',
			}]
		}
	},
	//可以在这加个loading事件
	beforecreate: function() {
		showData();
	},
	//html加载完成之前，loading结束 执行。执行顺序：父组件-子组件
	created: function() {

	},
	//html加载完成后执行。执行顺序：子组件-父组件
	mounted: function() {
		// this.getGzlook('/api/master/studio/gzlook');
		//工作室列表
		// this.getworkshop_list('/api/master/studio/index', {
		// 	province: '520000',
		// 	start: '0',
		// 	limit: '10'
		// });
		//项目
		// this.getProject({
		// 	module: 'project'
		// });
		//活动
		// this.getActivity({
		// 	module: 'activity'
		// });
		//课程
		// this.getThinKresults({
		// 	module: 'course'
		// });
		//课题
		// this.getEvent({
		// 	module: 'event'
		// });
		//成果
		// this.getDiscussion({
		// 	module: 'discussion'
		// });
	},
	//事件方法执行
	methods: {
		addClass: function(index, e) {
			let target = e.target;
			var rec = this;
			rec.current = index;
			var tapid = target.getAttribute("data-id");
			rec.tapid = tapid;
			rec.$options.methods.getThinKresults({
				role: '001',
				tapid: tapid,
			}, rec);
		},
		//智库看台
		itemsArticle: function(id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/article/' + id
		},
		gzLook: function() {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/article/category/gz_look'
		},
		//工作室
		clickHref: function(id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/mobile/studio/home/page/' + id
		},
		//工作室更多
		evenMore: function() {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/mobile/studio/list?province_id=520000'
		},
		//查看项目
		itemsProject: function(id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = project + id
		},
		//查看活动
		itemsactivit: function(activityId, studioId) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = activit + '?activityId=' + activityId + '&studioId=' + studioId
		},
		//查看课程
		itemsCourse_set: function(id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/course_set/' + id
		},
		//查看课题
		itemsSubject: function(studio_id, id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/mobile/studio/' + studio_id + '/subject/' + id
		},
		//查看成果
		itemsResults: function(studio_id, id) {
			$.toast('操作成功，正在跳转...', 2345, 'success top');
			// window.location.href = basePath + '/mobile/studio/' + studio_id + '/results/' + id
		},
		getGzlook: function(url) {
			var _this = this;
			axios.get(basePath + url, '')
				.then(function(response) {
					if (response.status == 200) {
						_this.portrait = response.data.cover;
						_this.name = response.data.creator;
						_this.time = response.data.createTime;
						_this.title = response.data.title;
						_this.picture = response.data.avatar;
						_this.articleid = response.data.id;
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getworkshop_list: function(url, data) {
			var _this = this;
			axios.get(basePath + url, {
					params: data
				})
				.then(function(response) {
					var workshop = [];
					var list = response.data.resources;
					if (response.status == 200) {
						list.forEach(function(value, index, array) {
							workshop.push({
								id: list[index].id,
								text: list[index].studio_name,
								picture: list[index].largeCover,
								headportrait: list[index].cover,
								membership: list[index].user_num,
								pageviews: list[index].hit_num,
								describe: list[index].about,
							});
						});
					}
					_this.groceryList = workshop

				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getThinKresults: function(data) {
			var _this = this;
			axios.get(basePath + '/api/master/studio/module', {
					params: data
				})
				.then(function(response) {

					var thinkresults = [];
					var list = response.data.resources;
					if (response.status == 200) {
						list.forEach(function(value, index, array) {
							thinkresults.push({
								id: list[index].id,
								cover: list[index].cover,
								price: list[index].price,
								rating: list[index].rating,
								studentNum: list[index].studentNum,
								studio_name: list[index].studio_name,
								taskNum: list[index].taskNum,
								task_title: list[index].task_title,
								title: list[index].title,
								hitNum: list[index].hitNum,
							})
						});
					}
					_this.facebookCard = thinkresults;

				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getEvent: function(data) {
			var _this = this;
			axios.get(basePath + '/api/master/studio/module', {
					params: data
				})
				.then(function(response) {
					var event = [];
					var list = response.data.resources;
					if (response.status == 200) {
						list.forEach(function(value, index, array) {
							event.push({
								studio_id: list[index].studio_id,
								id: list[index].id,
								title: list[index].title,
								titleing: list[index].title.substring(0, 2),
								username: list[index].username,
								postNum: list[index].postNum,
								hitNum: list[index].hitNum,
								studio_id: list[index].studio_id,
								studio_name: list[index].studio_name,
								createdTime: list[index].createdTime,
							})
						});
						_this.getevent = event;

					}

				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getDiscussion: function(data) {
			var _this = this;
			axios.get(basePath + '/api/master/studio/module', {
					params: data
				})
				.then(function(response) {
					var discussion = [];
					var list = response.data.resources;
					if (response.status == 200) {
						list.forEach(function(value, index, array) {
							discussion.push({
								studio_id: list[index].studio_id,
								id: list[index].id,
								title: list[index].title,
								titleing: list[index].title.substring(0, 2),
								username: list[index].username,
								postNum: list[index].postNum,
								hitNum: list[index].hitNum,
								studio_id: list[index].studio_id,
								studio_name: list[index].studio_name,
								createdTime: list[index].createdTime,
							})
						});
						_this.discussion = discussion;
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getProject: function(data) {
			var _this = this;
			axios.get(basePath + '/api/master/studio/module', {
					params: data
				})
				.then(function(response) {

					var project = [];
					var list = response.data.resources;
					if (response.status == 200) {
						list.forEach(function(value, index, array) {
							var status, statuscss
							if (list[index].status == 0) {
								status = '未开始'
								statuscss = 'gz-wks'
							} else if (list[index].status == 1) {
								status = '进行中'
								statuscss = 'gz-jxz'
							} else if (list[index].status == 2) {
								status = '已结束'
								statuscss = 'gz-ywj'
							}
							project.push({
								projectId: list[index].projectId,
								title: list[index].title,
								titleing: list[index].title.replace(/\“/g, '').substring(0, 2),
								status: status,
								statuscss: statuscss,
								createTime: list[index].createTime,
								startTime: list[index].startTime,
								studioName: list[index].studioName,
								createUser: list[index].createUser,
							})
						});
						_this.getproject = project;

					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		getActivity: function(data) {
			var _this = this;
			axios.get(basePath + '/api/master/studio/module', {
					params: data
				})
				.then(function(response) {
					var activity = [];
					var list = response.data.resources;
					if (response.status == 200) {
						console.log(list)
						list.forEach(function(value, index, array) {
							var status, statuscss
							if (list[index].status == 1) {
								status = '未开始'
								statuscss = 'gz-wks'
							} else if (list[index].status == 2) {
								status = '进行中'
								statuscss = 'gz-jxz'
							} else if (list[index].status == 3) {
								status = '已结束'
								statuscss = 'gz-ywj'
							}
							activity.push({
								studioId: list[index].studioId,
								activityId: list[index].activityId,
								img: list[index].img,
								status: status,
								statuscss: statuscss,
								title: list[index].title,
								type: list[index].type,
								createUser: list[index].createUser,
								createDate: list[index].createDate,
								memberNum: list[index].memberNum,
							})
						});
						_this.getactivity = activity;
						console.log(activity)
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},


	},

	computed: {

		reversedMessage: function() {

			return '标题'
		}
	},
});
