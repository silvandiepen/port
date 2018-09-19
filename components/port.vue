<template>
	<div class="port">
		<div class="port__panel">
			<h1 class="port__logo">:port</h1>
			<div class="input-text port__input" :class="{'port__input--active' : output.length > 0 }">
				<input ref="insert" placeholder="port name" type="text" v-model="insert" max-length="10" @keyup.enter="selectText" />
			</div>
			<div class="input-text port__output" :class="{'port__output--active' : output.length > 0,'port__output--copied' : copy.active }">
				<input placeholder="7678" ref="output" type="text" v-model="output" @click="selectText" />
				<button class="btn" type="button" @click="doCopy" :class="{ active: output.length > 0, 'btn--copied' : copy.active }">
					<span v-if="copy.active">{{copy.txt.active}}</span>
					<span v-else>{{copy.txt.default}}</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			copy: {
				active: false,
				value: '',
				txt: {
					default: 'Copy',
					active: 'Copied!'
				}
			},

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
				if (!isNaN(char)) {
					output.push(char);
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
					_this.copy.active = true;
					_this.copy.value = _this.output;
				},
				function(e) {
					_this.copy.active = false;
					_this.copy.value = _this.output;
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
			this.copy.active = false;
		}
	}
};
</script>

<style lang="scss">
@import './assets/scss/vars';
@import '~piet';

::selection {
	color: color(Black);
	background: color(lightBlue, 0.25);
}
@keyframes comeIn {
	from {
		transform: translateY(100%);
		opacity: 0;
	}
	to {
		transform: translateY(0%);
		opacity: 1;
	}
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
		background-color: color(Pink);
		color: color(White);
		font-weight: bold;
		box-shadow: 0 -4px 0 0 darken(Pink, 10%) inset,
			0 0.5rem 1rem 0 color(Black, 0.05);
	}
	&__panel {
		transform: translateY(100%);
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation: comeIn 0.3s #{$i/10}s cubic-bezier(0, 1.3, 1, 1.18) forwards;
			}
		}
		width: 100%;
		counter-increment: provider;
		position: relative;

		padding: 2rem;
		// display: inline-block;
		background-color: color(White, 1);
		transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		background-size: 100% 200%;
		background-position: 50% 0;
		box-shadow: 0 -4px 0 0 color(lightBlue) inset,
			0 0.5rem 1rem 0 color(Black, 0.1);
		border-radius: 4px;
		justify-content: space-between;
		& + .map-compare__provider {
			margin-top: 1rem;
		}
		background-image: linear-gradient(
			to bottom,
			color(Green, 0) 50%,
			color(Green, 0.1),
			color(Green, 0.3)
		);
	}
	&__input {
		transform: translateY(50%) scale(1.2);

		transition: transform 0.3s cubic-bezier(0, 1.3, 1, 1.18);
		input {
			background-color: transparent;
			width: 100%;
			border-radius: 5px;
			padding: 1rem;
			font-size: 2rem;
			border: none;
			caret-color: color(Pink);
			text-align: center;
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
		&--active {
			transform: translateY(0) scale(1);
		}
	}
	&__output {
		position: relative;
		transform: scale(0.5);
		opacity: 0;
		transition: transform 0.3s cubic-bezier(0, 1.3, 1, 1.18),
			opacity 0.3s cubic-bezier(0, 1.3, 1, 1.18);
		input {
			width: 100%;
			border-radius: 5px;
			padding: 1rem;
			font-size: 2rem;
			background-color: none;
			text-align: center;
			border: 2px solid color(Pink, 0.5);
			font-family: 'Courier New', Courier, monospace;
			color: color(Pink);
			border-radius: 3rem;
			&:focus {
				border: 2px solid color(Pink, 1);
			}
			&,
			&:focus {
				outline: none;
			}
		}
		.btn {
			position: absolute;
			right: 1rem;
			text-shadow: 0 0 10px color(White), 0 0 10px color(White),
				0 0 10px color(White), 0 0 10px color(White);
			top: 50%;
			width: 5rem;
			height: 3rem;
			border: none;
			background: transparent;
			color: darken(Pink, 10%);
			font-size: 1rem;
			transform: translateY(-50%) scale(0);
			&:focus {
				outline: none;
				color: color(lightBlue);
			}
			&--copied {
				transform: translateY(-50%) scale(1);
			}
		}
		&:hover {
			button {
				animation: popIn 0.2s ease-in-out forwards;
			}
		}
		&--active {
			opacity: 1;
			transform: scale(1);
		}
		&--copied {
			input,
			input:focus {
				border: 2px solid color(lightGreen, 1);
			}
		}
	}
	input {
		box-shadow: none;
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
</style>
