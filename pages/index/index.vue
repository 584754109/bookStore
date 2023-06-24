<template>
	<view class="content">
  <view class="search-container">
    <input type="text" v-model="title" class="search-input" placeholder="请输入关键字" />
    <button class="search-button" @click="goToAbout">搜索</button>
  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			}
		},
		onLoad() {

		},
		methods: {
			goToAbout() {
				console.log(this.title);
				uni.navigateTo({
					url:`/pages/list/list?title=${this.title}`,
				});
			}
		}
	}
</script>

<style>
	.content{
		padding: 20rpx;
	}
.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

.search-button {
  margin-left: 10px;
  padding: 0 15px;
  height: 40px;
  border-radius: 20px;
  background-color: #333;
  color: #fff;
  outline: none;
}
</style>
