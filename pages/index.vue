<template>
	<section class="container port">
		<div class="port__panel">
			<h1 class="port__logo">:port</h1>
			<div class="input-text port__input">
				<input ref="insert" placeholder="port" type="text" v-model="insert" max-length="10" />
			</div>
			<div class="input-text port__output">
				<input placeholder="7678" ref="output" type="text" v-model="output" @click="selectText" />
				<button type="button" @click="doCopy" :class="{ active: output.length > 0 }">{{copyLabel}}</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			copyLabel: 'Copy',
			insert: '',
			output: '',
			table: [
				[' '],
				[''],
				['a', 'b', 'c'],
				['d', 'e', 'f'],
				['g', 'h', 'i'],
				['j', 'k', 'l'],
				['m', 'n', 'o'],
				['p', 'q', 'r', 's'],
				['t', 'u', 'v'],
				['w', 'x', 'y', 'z']
			]
		};
	},
	methods: {
		convertToNumbers(insert) {
			let _this = this;
			let output = [];
			for (let i = 0; i < insert.length; i++) {
				let char = insert.charAt(i).toLowerCase();

				for (let l = 0; l < _this.table.length; l++) {
					if (this.table[l].includes(char)) {
						output.push(l);
					}
				}
			}
			this.output = output.join('');
		},
		selectText() {
			this.$refs.output.focus();
			this.$refs.output.select();
		},
		doCopy: function() {
			let _this = this;
			_this.$copyText(this.output).then(
				function(e) {
					_this.copyLabel = 'Copied!';
				},
				function(e) {
					_this.copyLabel = 'Couldnt copy :(';
				}
			);
		}
	},
	mounted() {
		let _this = this;
		setTimeout(function() {
			_this.$refs.insert.focus();
		}, 500);
	},
	watch: {
		insert: function(val, oldVal) {
			this.convertToNumbers(val);
		}
	}
};
</script>

<style lang="scss">
@import '~piet';
body {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
}
::selection {
	color: color(Black);
	background: color(Orange);
}
.port {
	&__logo {
		position: absolute;
		left: -1rem;
		top: 0;
		border: none;
		width: 8rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		font-size: 1.5rem;
		font-family: 'Courier New', Courier, monospace;
		border-radius: 2px;
		transform: translateY(-50%);
		background-color: color(Blue);
		color: color(White);
		font-weight: bold;
		box-shadow: 0 -4px 0 0 darken(Blue, 10%) inset,
			0 0.5rem 1rem 0 color(Black, 0.05);
	}
	&__panel {
		background-color: color(White);
		width: auto;
		padding: 4rem 2rem;
		border-radius: 2px;
		box-shadow: 0 -4px 0 0 color(Blue) inset, 0 0.5rem 1rem 0 color(Black, 0.05);
		position: relative;
		z-index: 10;
		@media #{$small-only} {
			padding: 60px;
		}
	}
	&__output {
		position: relative;
		input {
			background-color: none;
			text-align: center;
			border: 2px solid color(Blue, 0.5);
			font-family: 'Courier New', Courier, monospace;
			color: color(Orange);
			border-radius: 3rem;
		}
		button {
			position: absolute;
			right: 1rem;
			top: 50%;
			width: 4rem;
			height: 3rem;
			transform: translateY(-50%);
			border: none;
			background: transparent;
			color: color(Blue);
			font-size: 1rem;
			transform: translateY(-50%) scale(0);
			&:focus {
				outline: none;
				color: color(Orange);
			}
			&.active {
				animation: popIn 0.2s ease-in-out forwards;
			}
		}
	}
}
@keyframes popIn {
	0% {
		transform: translateY(-50%) scale(0);
	}
	80% {
		transform: translateY(-50%) scale(1.2);
	}
	100% {
		transform: translateY(-50%) scale(1);
	}
}
input {
	background-color: transparent;
	width: 100%;
	border-radius: 5px;
	padding: 1rem;
	font-size: 2rem;
	border: none;
	caret-color: color(Orange);
	color: color(Black);
	&::placeholder {
		color: color(Black, 0.05);
		opacity: 1;
	}
	&,
	&:focus {
		outline: none;
	}
}
</style>
