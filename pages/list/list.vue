<template>
	<view>
		<view v-for="book in books" :key="book.id">
			<book-item :book='book' class="book"></book-item>
		</view>
	</view>
</template>

<script>
	import bookItem from '../bookItem/bookItem.vue';
	export default {
		// props:{
		// 	title:{
		// 		type:String,
		// 		default:"",
		// 		required: true,
		// 	}
		// },
		data() {
			return {
				books:[
					  {
						"title": "算法",
						"author": "史钋镭著",
						"pic": "",
						"price": "30.00",
						"isbn": "9787214212320"
					  },
					  {
						"title": "算法",
						"author": " (美) 塞奇威克 (Sedgewick,R.) , 著",
						"pic": "https://api.jisuapi.com/isbn//upload/f7/c9ba4074775488.jpg",
						"price": "49.00",
						"isbn": "9787111285052"
					  },
					  {
						"title": "算法",
						"author": " (美) 塞奇威克 (Sedgewick,R.) , (美)",
						"pic": "https://api.jisuapi.com/isbn//upload/2c/f1438530f387fd.jpg",
						"price": "99.00",
						"isbn": "9787115293800"
					  },
					  {
						"title": "算法",
						"author": " (美) 塞奇威克 (Sedgewick,R.) , (美)",
						"pic": "https://api.jisuapi.com/isbn//upload/69/459802c8a8b424.jpg",
						"price": "129.00",
						"isbn": "9787115416902"
					  },
					  {
						"title": "算法",
						"author": "(美) 塞奇威克 (Sedgewick,R.) , 著",
						"pic": "https://api.jisuapi.com/isbn//upload/90/1940807d4842ad.jpg",
						"price": "79.00",
						"isbn": "9787111275718"
					  },
					  {
						"title": "随机算法",
						"author": "(美) 莫特瓦尼 (Motwani,R.) , (美) 拉格",
						"pic": "https://api.jisuapi.com/isbn//upload/87/f22f62f258a8cc.jpg",
						"price": "45.10",
						"isbn": "9787040237238"
					  },
					  {
						"title": "算法分析",
						"author": "(美) 麦康奈尔 (McConnell,J.J.) , 著",
						"pic": "https://api.jisuapi.com/isbn//upload/b0/bbeaee8ff44916.jpg",
						"price": "0.00",
						"isbn": "9787040126594"
					  },
					  {
						"title": "算法笔记",
						"author": "胡凡, 曾磊, 主编",
						"pic": "https://api.jisuapi.com/isbn//upload/ff/7faae0db051a7b.jpg",
						"price": "65.00",
						"isbn": "9787111540090"
					  },
					  {
						"title": "终极算法",
						"author": " (美) 佩德罗·多明戈斯, 著",
						"pic": "https://api.jisuapi.com/isbn//upload/9d/1e7c57dbfe753d.jpg",
						"price": "68.00",
						"isbn": "9787508668673"
					  },
					  {
						"title": "算法交易",
						"author": "高寒, 著",
						"pic": "",
						"price": "69.00",
						"isbn": "9787115508225"
					  },
					  {
						"title": "算法设计",
						"author": "郑宇军, 石海鹤, 陈胜勇著",
						"pic": "",
						"price": "32.00",
						"isbn": "9787115274359"
					  },
					  {
						"title": "算法心得",
						"author": " (美) 沃伦 (Warren,H.S.) , 著",
						"pic": "https://api.jisuapi.com/isbn//upload/78/407a53c5e3d155.jpg",
						"price": "89.00",
						"isbn": "9787111453567"
					  },
					  {
						"title": "算法详解",
						"author": " (美) 蒂姆·拉夫加登 (Tim Roughgarden)",
						"pic": "",
						"price": "49.00",
						"isbn": "9787115493521"
					  },
					  {
						"title": "算法基础",
						"author": "( ) 布拉萨德 (Brassard,G.) , ( ) 布",
						"pic": "https://api.jisuapi.com/isbn//upload/78/d6e6003eecaed8.jpg",
						"price": "52.00",
						"isbn": "9787302111559"
					  },
					  {
						"title": "数论算法",
						"author": "姜建国, 臧明相著",
						"pic": "",
						"price": "47.00",
						"isbn": "9787560633022"
					  },
					  {
						"title": "算法导论",
						"author": "(美) 科曼 (Cormen,T.H.) 等, 著",
						"pic": "https://api.jisuapi.com/isbn//upload/15/483e068ff2c724.jpg",
						"price": "100.00",
						"isbn": "9787111187776"
					  },
					  {
						"title": "算法图解",
						"author": " (美) 巴尔加瓦 (Aditya Bhargava) , ",
						"pic": "https://api.jisuapi.com/isbn//upload/3e/a27cc716dcc83d.jpg",
						"price": "49.00",
						"isbn": "9787115447630"
					  },
					  {
						"title": "算法霸权",
						"author": " (美) 凯西·奥尼尔, 著",
						"pic": "",
						"price": "68.00",
						"isbn": "9787508692067"
					  },
					  {
						"title": "图解算法",
						"author": "俞征武, 著",
						"pic": "https://api.jisuapi.com/isbn//upload/99/81b8ec98a712a4.jpg",
						"price": "49.00",
						"isbn": "9787111578871"
					  },
					  {
						"title": "算法概论",
						"author": "(美) 达斯格普特 (Dasgupta,S.) , (美) ",
						"pic": "https://api.jisuapi.com/isbn//upload/39/87128656afe4e2.jpg",
						"price": "39.99",
						"isbn": "9787302179399"
					  }
					]
			};
		},
		components:{
			bookItem,
		},
		
	  onLoad(options) {
		// axios.get("http://jisuisbn.market.alicloudapi.com/isbn/search",{
		// 	params:{
		// 		'title':options.title,
		// 	},
		// 	headers:{
		// 		"Authorization":"APPCODE ef5cf38429a84002b7a27cbeb4af43f0"
		// 	}
		// }).then(res=>{
		// 	console.log(res);
		// 	console.log(res.data);
		// })
		
		uni.request({
		        url: 'http://jisuisbn.market.alicloudapi.com/isbn/search',
		        method: 'GET',
				data:{
					'title':options.title,
				},
				 header: {
					"Authorization":"APPCODE ef5cf38429a84002b7a27cbeb4af43f0"
				},
		        success: res => {
		          // 处理响应数据
		          // console.log(res.data);
				  this.books = res.data.result.list;
		        },
		        fail: error => {
		          // 处理错误情况
		          console.error(error);
		        },
		      });
		
	  }
	}
</script>

<style lang="less">

</style>
