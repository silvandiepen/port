<template>
	<div class="page">
		<section class="port-section">
			<port></port>
		</section>
		<section class="extension">
			<div class="row center">
				<div class="column small-full medium-half">
					<h4 class="trigger">Extension?</h4>
					<h3>and there is an extension!</h3>
					<p>Every I forgot the numbers, so I created an extension which helps me with that.</p>
					<p>Install the extension and just type
						<code>localhost/</code> + the name of the project in your browser (Chrome) and go there automatically.</p>
					<p>&nbsp;</p>
					<a class="button button--lightblue" target="_blank" href="https://chrome.google.com/webstore/detail/akmeopjagninifebigecedjdmmbfmibn/">Download on Chrome Web store </a>
				</div>
			</div>
		</section>
	</div>
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
.port-section {
	min-height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	@media #{$small-only} {
		padding: 30px;
	}
}
.extension {
	background-color: color(Black);
	padding: grid(2);
	color: color(White);
	position: relative;
	z-index: 1;
	.trigger {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateY(-100%) translateX(-50%);
		padding: 2.5rem grid(2);
		color: color(lightBlue);
		&:before {
			content: '';
			position: absolute;
			bottom: 1rem;
			left: 50%;
			width: 2px;
			height: 1rem;
			background-color: color(lightBlue);
			transform: translate(-50%, -50%);
		}
		&:after {
			content: '';
			position: absolute;
			bottom: 1.25rem;
			height: 0.5rem;
			width: 0.5rem;
			left: 50%;
			transform: translate(-50%, -50%) rotate(-45deg);

			border-left: 2px solid color(lightBlue);
			border-bottom: 2px solid color(lightBlue);
		}
	}
	code {
		font-family: 'Courier New', Courier, monospace;
		background-color: color(Pink);
		color: color(Black);
		padding: 0.5rem;
	}
}
</style>