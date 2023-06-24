<template>
	<view class="wrapper">
		<view class="left">
			<img :src="book.pic" alt="" class="book-img">
		</view>
		<view class="right">
			<view class="name">{{book.title}}</view>
			<view class="author">{{book.author}}</view>
			<view class="price">${{book.price}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			book:{
				type: Object,
				require: true,
				deafult: ()=>({}),
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.wrapper{
	/* border-top: 1px solid gray; */
	margin: 10px;
	display:flex;
	border-bottom: 1px solid gray;
	justify-content: space-between;
	.book-img{
		height: 250rpx;
		width: 250rpx;
	}
	.right{
		margin-top: 50rpx;
		margin-left: 50rpx;
		flex-grow: 1;
	}
} 

</style>
