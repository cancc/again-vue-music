<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progress-btn-wrapper" ref="progressBtn"
                @touchstart.prevent="progressTouchStart"
                @touchmove.prevent="progressTouchMove"
                @touchend.prevent="progressTouchEnd"

            >
                <div class="progress-btn" ></div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

const progressBtnWidth = 16
export default {
    props: {
        percent: Number
    },
    created() {
        this.touch = {}
    },
    watch: {
        percent(newPercent) {
            if(newPercent>=0 && !this.touch.initVal) {
                const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
                const offsetWidth = newPercent * barWidth
            //    const leftWidth = newPercent*this.$refs.progressBar.clientWidth
                // const leftWidth = this.$refs.progress.clientWidth - 8
                this.$refs.progress.style.width = `${offsetWidth}px`
                this.$refs.progressBtn.style.left = `${offsetWidth-8}px`
            }
        } 
    },
    methods: {
        // 拖动改变播放进度
        progressTouchStart(e) {
            // console.log(e)
            this.touch.initVal = true
            this.touch.startWidth = e.touches[0].pageX 
            this.touch.left = this.$refs.progress.clientWidth
            // console.log(this.touch.startWidth)
        },
        progressTouchMove(e) {
            if(!this.touch.initVal) {
                return
            }
            const moveWidth = e.touches[0].pageX - this.touch.startWidth
            const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth,Math.max(0,this.touch.left + moveWidth))
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.left = `${offsetWidth-8}px`
            // console.log(e)
        },
        progressTouchEnd() {
            this.touch.initVal = false
            this._changePercent()
        },
        // 点击改变播放进度
        progressClick(e) {
            console.log(e)
            this.$refs.progress.style.width = e.offsetX + 'px'
            this.$refs.progressBtn.style.left = `${e.offsetX-8}px`
            this._changePercent()
        },
        _changePercent() {
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('changePercent', percent)
        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>