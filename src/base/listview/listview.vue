<template>
		<scroll class="listview" :data="singers" ref="liseview">
			<ul>
				<li v-for="(group, index) in singers" ref="listgroup" :key="index" class="list-group">
					<h2 class="list-group-title">{{group.title}}</h2>
					<ul>
						<li v-for="(item, index) in group.items" :key="index" @click="selectItem(item)" class="list-group-item">
							<img class="avatar" v-lazy="item.avatar">
							<span class="name">{{item.name}}</span>
						</li>
					</ul>
				</li>
			</ul>
			<div class="list-shortcut">
				<ul>
					<li class="item" v-for="(item, index) in shortcutList" :key="index"
						@click="handleClick(index)">
						{{item}}
					</li>
				</ul>
			</div>
			<!-- <abc :singers="singers" @change="handleClick"></abc> -->
		</scroll>
		
	
</template>
<script type="text/ecmascript-6">
import Scroll from "base/scroll/scroll"
// import Abc from 'base/abc/abc'
	
	export default {
		props: {
			singers: Array,
		},
		data() {
			return {
				index: ''
			}
		},
		computed: {
			shortcutList() {
				return this.singers.map(group => {
					return group.title.slice(0,1)
				})
			}
		},
		methods: {
			handleClick(index) {
				console.log(index)
				this.index = index
				console.log(this.index)
			},
			selectItem(item) {
				this.$emit('select', item)
				// console.log(singer)
				// this.$router.push({path: `/singer/${singer.id}`})
			}
		},
		mounted() {
			
		},
		watch: {
			index() {
				if(this.index) {
					const element = this.$refs.listgroup[this.index]
					console.log(element)
					this.$refs.liseview.scrollToElement(element,0)
				}else{
					const elementHot = this.$refs.listgroup[0]
					console.log(elementHot)
					this.$refs.liseview.scrollToElement(elementHot, 0)
				}
			}
		},
		components: {
			Scroll,
			// Abc
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.listview
	position: relative
	width: 100%
	height: 100%
	overflow: hidden
	background: $color-background
	.list-group
		padding-bottom: 30px
		.list-group-title
			height: 30px
			line-height: 30px
			padding-left: 20px
			font-size: $font-size-small
			color: $color-text-l
			background: $color-highlight-background
		.list-group-item
			display: flex
			align-items: center
			padding: 20px 0 0 30px
			.avatar
				width: 50px
				height: 50px
				border-radius: 50%
			.name
				margin-left: 20px
				color: $color-text-l
				font-size: $font-size-medium
	.list-shortcut
		position: absolute
		z-index: 30
		right: 0
		top: 50%
		transform: translateY(-50%)
		width: 20px
		padding: 20px 0
		border-radius: 10px
		text-align: center
		background: $color-background-d
		font-family: Helvetica
		.item
			padding: 3px
			line-height: 1
			color: $color-text-l
			font-size: $font-size-small
			&.current
				color: $color-theme
	.list-fixed
		position: absolute
		top: 0
		left: 0
		width: 100%
		.fixed-title
			height: 30px
			line-height: 30px
			padding-left: 20px
			font-size: $font-size-small
			color: $color-text-l
			background: $color-highlight-background
	.loading-container
		position: absolute
		width: 100%
		top: 50%
		transform: translateY(-50%)
</style>
