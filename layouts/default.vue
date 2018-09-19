<template>
	<div class="layout">
		<reload></reload>
		<nuxt/>
	</div>
</template>
<script>
import reload from '~/components/reload.vue';
export default { components: { reload } };
</script>

<style lang="scss">
@import './assets/scss/vars';
@import '~piet';
html,
body {
	background-color: black;
}
body {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
}
.page {
	min-height: 100vh;
	background-color: color(Offwhite);
}

.layout {
	overflow: visible;
}
.page {
	position: relative;
	z-index: 1;
}
</style>

