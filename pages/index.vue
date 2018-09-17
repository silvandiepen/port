<template>
	<section class="intro">
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="convert">
			<div class="input-text input">
				<input ref="insert" placeholder="type a name" type="text" v-model="insert" max-length="10" />
			</div>
			<div class="input-text output">
				<input ref="output" type="text" v-model="output" @click="selectText" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
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
		}
	},
	mounted() {
		let _this = this;
		setTimeout(function() {
			_this.$refs.insert.focus();
		}, 500);
		// console.log(this.$refs.insert);
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
	background-color: color(Black, 1);
}
input {
	background-color: transparent;
	width: 100%;
	border-radius: 5px;
	padding: 1rem;
	font-size: 2rem;
	border: none;
	caret-color: color(Orange);
	color: color(White);
	&::placeholder {
		color: color(White, 0.15);
		opacity: 1;
	}
	&,
	&:focus {
		outline: none;
	}
}
::selection {
	color: color(Black);
	background: color(Orange);
}
.output input {
	background-color: none;
	text-align: center;
	border: 2px solid color(White, 0.25);
	font-family: 'Courier New', Courier, monospace;
	color: color(Orange);
	&:empty {
		border: 2px solid color(Orange, 0.25);
	}
}
.convert {
	background-color: color(Black, 0.5);
	width: auto;
	padding: grid(1);
	border-radius: 4px;
	position: relative;
	z-index: 10;
	@media #{$small-only} {
		padding: 60px;
	}
}

.bg {
	width: 70vw;
	height: 70vw;
	position: absolute;
	left: 50%;
	top: 50%;
	filter: blur(15vw);
	background-color: color(Blue, 0.25);
	animation: bg 20s linear infinite;
	& + .bg {
		animation: bg 20s 5s linear infinite;
	}
}
@keyframes bg {
	0% {
		background-color: color(Blue, 0.25);
		transform: translateY(-50%) translateX(-50%) scale(1, 1) rotate(0deg);
	}
	10% {
		background-color: color(Purple, 0.25);
		transform: translateY(-60%) translateX(-40%) scale(0.5, 1.25) rotate(10deg);
	}
	20% {
		background-color: color(Yellow, 0.25);
		transform: translateY(-20%) translateX(40%) scale(0.8, 1.5) rotate(-10deg);
	}
	30% {
		background-color: color(Orange, 0.25);
		transform: translateY(10%) translateX(60%) scale(1.2, 0.8) rotate(-15deg);
	}
	40% {
		background-color: color(Green, 0.25);
		transform: translateY(-60%) translateX(-20%) scale(0.2, 1.8) rotate(35deg);
	}
	50% {
		background-color: color(Turquoise, 0.25);
		transform: translateY(20%) translateX(20%) scale(1.2, 0.8) rotate(15deg);
	}
	60% {
		background-color: color(Pink, 0.25);
		transform: translateY(20%) translateX(20%) scale(1.2, 1.8) rotate(0deg);
	}
	70% {
		background-color: color(Brown, 0.25);
		transform: translateY(20%) translateX(-20%) scale(1.5, 0.8) rotate(45deg);
	}
	80% {
		background-color: color(Red, 0.25);
		transform: translateY(-20%) translateX(20%) scale(0.2, 0.8) rotate(15deg);
	}
	90% {
		background-color: color(Red, 0.25);
		transform: translateY(-120%) translateX(-120%) scale(1.2, 0.8) rotate(15deg);
	}
	100% {
		background-color: color(Blue, 0.25);
		transform: translateY(-50%) translateX(-50%) scale(1, 1) rotate(0deg);
	}
}
</style>
