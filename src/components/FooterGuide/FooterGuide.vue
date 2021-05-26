<template>
  <div class="foter_guide" >
    <a class="guide_item"
	:class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai on"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;"
      class="guide_item"
	  :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;"
      class="guide_item"
	 :class="{on: '/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;"
      class="guide_item"
	  :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
	methods: {
		goTo(path) {
			this.$router.replace(path)
		}	
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	.foter_guide
		display flex 
		z-index 100
		top-border-1px(#eee)
		position fixed
		left 0
		bottom 0
		width 100%
		height 50px
		box-box-sizing border-box
		backgound #fff
		.guide_item 
			width 25%
			height 50px
			text-align center
			display flex
			flex-direction column
			&.on
				color #02a774
			span
				font-size 19px 
				margin-top 2px 
				margin-bottom 2px 
			.iconfont 
				line-height 12px
</style>
