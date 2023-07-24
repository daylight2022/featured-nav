<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const sections = ['常用', '搜索', '社区', '生活', '影视'];

const searchText = ref('');
const tags: { [key: string]: string[] } = reactive({
	常用: ['站内', '百度', '谷歌', '翻译'],
	搜索: ['搜狗', '必应', '360'],
	社区: ['知乎', '微博', '豆瓣'],
	生活: ['美团', '饿了么', '大众点评'],
	影视: ['电影', '电视剧', '综艺'],
});
const selectedSection = ref('常用');
const selectedTags = computed(() => tags[selectedSection.value]);

// 指示器
const selectedPosition = ref(0);
// const indicatorPosition = computed(() => 150 + selectedPosition.value * 115)

const search = () => {
	console.log('开始搜索:', searchText.value);
};
</script>

<template>
	<div class="search-container">
		<div class="search-wrapper">
			<div class="search-list-menu">
				<div
					class="search-list-menu-item"
					v-for="(section, index) in sections"
					:key="index"
					:class="{ active: selectedPosition === index }"
					@click="selectedPosition = index">
					{{ section }}
				</div>
				<!-- <div class="indicator" :style="{ left: indicatorPosition + 'px' }" v-if="selectedPosition !== null"></div> -->
			</div>
			<div class="search-section">
				<input v-model="searchText" placeholder="请输入搜索内容" />
				<i class="iconfont icon-search search-button" @click="search()"></i>
			</div>
			<div class="search-list">
				<div class="search-list-item" v-for="(tag, index) in selectedTags" :key="index">{{ tag }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.search-container {
	width: 100%;
	height: 300px;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.search-wrapper {
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.search-list-menu {
	display: flex;
	justify-content: space-between;
	padding: 10px 5%;
	margin-bottom: 20px;
	color: #777;
	user-select: none;
	width: 50%;

	&-item {
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
		&:hover {
			color: #f2f2f2;
		}
	}

	.active {
		position: relative;
		color: #fff;
	}
}

.search-section {
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	width: 90%;

	input {
		flex: 1;
		height: 35px;
		padding: 5px 20px;
		border-radius: 50px;
		font-size: 16px;
		color: #f2f2f2;
		background: transparent;
		border: none;
		outline: none;
	}

	.search-button {
		cursor: pointer;
		color: #fff;
	}
}

.search-list {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 10px 5%;
	color: #777;
	user-select: none;
	width: 70%;

	&-item {
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
		&:hover {
			color: #f2f2f2;
		}
	}
}
</style>
