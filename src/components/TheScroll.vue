<template>
<div class="scrolldown" data-gw-scrollto="#media" data-gw-scrollto-offset="-60">
	<div class="scrolldown__arrows">
		<div class="scrolldown__arrow scrolldown__arrow_1"></div>
		<div class="scrolldown__arrow scrolldown__arrow_2"></div>
		<div class="scrolldown__arrow scrolldown__arrow_3"></div>
	</div>
</div>
</template>

<style scoped>
.scrolldown {
	position: relative;
	z-index: 0;
	cursor: pointer;
}

.scrolldown__arrows {
	position: relative;
	top: 12px;
	width: 48px;
	height: 48px;
}

.scrolldown__arrow {
	background: url(https://demo.l2banners.ru/res/scrolldown/scrolldown.svg) no-repeat;
	width: 48px;
	height: 16px;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	transform: scale(0.3) translateY(-30px);
}

.scrolldown__arrow_1 {
	animation: scrolldown__arrow 3s ease-out infinite;
}

.scrolldown__arrow_2 {
	animation: scrolldown__arrow 3s ease-out 1s infinite;
}

.scrolldown__arrow_3 {
	animation: scrolldown__arrow 3s ease-out 2s infinite;
}

@keyframes scrolldown__arrow {
	33.3% {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
	66.6% {
		opacity: 1;
		transform: scale(1) translateY(12px);
	}
	100% {
		opacity: 0;
		transform: scale(0.5) translateY(40px);
	}
}
</style>