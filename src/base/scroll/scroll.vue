<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
	props: {
		data: {
			type: Array,
			default: []
		},
	},
	mounted() {
		setTimeout(() => {
			this._initScroll()
		},20)
	},
	methods: {
		_initScroll() {
			if(!this.$refs.wrapper) {
			return
		}
		this.scroll = new BScroll(this.$refs.wrapper, {
				click: true
			})
		},
		refresh() {
			this.scroll && this.scroll.refresh()
		},
		scrollToElement() {
			this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
		}
	},
	watch: {
		data() {
			setTimeout(() => {
				this.refresh()
			}, 20)
		}
	}



}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>