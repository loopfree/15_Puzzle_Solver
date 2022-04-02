<script>
export default {
	props: {
		square_values: Array
	},
	data() {
		return {
			board_data: this.square_values || []
		}
	},
	mounted() {
		for(let i = this.board_data.length; i < 16; ++i) {
			this.board_data.push('')
		}
	},
	methods: {
		randomizeValues() {
			let temp = []
			for(let i = 1; i < 16; ++i) {
				temp.push(`${i}`)
			}
			temp.push('')
			for(let i = temp.length - 1; i  > 0; --i) {
				const j = Math.floor(Math.random() * (i + 1));
				[temp[i], temp[j]] = [temp[j], temp[i]]
			}
			this.board_data = temp
		},
		resetValues() {
			this.board_data = []
			for(let i = this.board_data.length; i < 16; ++i) {
				this.board_data.push('')
			}
		},
		setValues(newValue) {
			this.board_data = newValue
			for(let i = 0; i < this.board_data.length; ++i) {
				if(this.board_data[i] == '-1') {
					this.board_data[i] = ''
				} else {
					this.board_data[i] = '' + this.board_data[i]
				}
			}
			for(let i = this.board_data.length; i < 16; ++i) {
				this.board_data.push('')
			}
		}
	}
}
</script>


<template>
	<div class='vertical'>
		<div class='horizontal'>
			<input type='text' class='board-square' v-model='board_data[0]'>
			<input type='text' class='board-square' v-model='board_data[1]'>
			<input type='text' class='board-square' v-model='board_data[2]'>
			<input type='text' class='board-square' v-model='board_data[3]'>
		</div>
		<div class='horizontal'>
			<input type='text' class='board-square' v-model='board_data[4]'>
			<input type='text' class='board-square' v-model='board_data[5]'>
			<input type='text' class='board-square' v-model='board_data[6]'>
			<input type='text' class='board-square' v-model='board_data[7]'>
		</div>
		<div class='horizontal'>
			<input type='text' class='board-square' v-model='board_data[8]'>
			<input type='text' class='board-square' v-model='board_data[9]'>
			<input type='text' class='board-square' v-model='board_data[10]'>
			<input type='text' class='board-square' v-model='board_data[11]'>
		</div>
		<div class='horizontal'>
			<input type='text' class='board-square' v-model='board_data[12]'>
			<input type='text' class='board-square' v-model='board_data[13]'>
			<input type='text' class='board-square' v-model='board_data[14]'>
			<input type='text' class='board-square' v-model='board_data[15]'>
		</div>
	</div>
</template>

<style>
</style>