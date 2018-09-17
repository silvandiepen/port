<template>
	<section class="intro">
		<div class="convert">
			<div class="input-text input">
				<input ref="insert" placeholder="type a name to convert" type="text" v-model="insert" max-length="10" />
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
	background-color: color(Black, 0.95);
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
	background-color: color(Black, 1);
	width: auto;
	padding: grid(1);
	border-radius: 4px;
}
</style>
