<template>
	<section class="page port">
		<port></port>

	</section>
</template>

<script>
import Port from '~/components/port.vue';
export default {
	components: {
		Port
	}
};
</script>

<style lang="scss">
@import './assets/scss/vars';
@import '~piet';
.page {
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	@media #{$small-only} {
		padding: 30px;
	}
}
</style>