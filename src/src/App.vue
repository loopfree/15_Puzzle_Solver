<script>
import GameBoard from './components/GameBoard.vue'

export default {
	name: 'App',
	components: {
		GameBoard
	},
	data() {
		return {
			error: false,
			errorMessage: '',
			hasResult: false,
			kurang: [],
			boards: [],
			kurangX: 0
		}
	},
	mounted() {
		const reset_board = () => {
			this.boards = []
		}
		eel.expose(reset_board, 'reset_board')

		const add_board = (newBoard) => {
			for(let i = 0; i < newBoard.board.length; ++i) {
				if(newBoard.board[i] == -1) {
					newBoard.board[i] = ''
				}
			}
			this.boards.push(newBoard)
		}
		eel.expose(add_board, 'add_board')

		const set_kurang_x = (newKurangX) => {
			this.kurangX = newKurangX
		}
		eel.expose(set_kurang_x, 'set_kurang_x')
		
		const set_kurang = (newKurang) => {
			this.hasResult = true
			this.kurang = newKurang
		}
		eel.expose(set_kurang, 'set_kurang')
		
		const set_error = (newErrMsg) => {
			this.error = true
			this.errorMessage = newErrMsg
			this.boards = []
		}
		eel.expose(set_error, 'set_error')
		
		
	},
	methods: {
		randomize() {
			this.$refs.gameBoard.randomizeValues()
		},
		stopApp() {
			eel.stop_program()
			window.close()
		},
		clearBoard() {
			this.hasResult = false
			this.$refs.gameBoard.resetValues()
			this.error = false
		},
		readFile() {
			let file = this.$refs.fileInput.files[0]
			const reader = new FileReader()

			reader.onload = (res) => {
				let fullText = res.target.result
				fullText = fullText.replace('\r', '')

				let lines = fullText.split('\n')
				
				let squares = []

				let square_set = new Set()
				for(let i = 0; i < lines.length; ++i) {
					let numbers = lines[i].split(' ')

					if(numbers.length != 4) {
						this.error = true
						this.errorMessage = "The file doesn't contain enough data"
						return
					}

					for(let j = 0; j < numbers.length; ++j) {
						if(square_set.has(numbers[j]) == false) {
							square_set.add(numbers[j])
						} else {
							this.error = true
							this.errorMessage = "There's a duplicate value"
							return
						}

						if(numbers[j] == '_') {
							squares.push('')
							continue
						}

						if(numbers[j].indexOf('.') > 1) {
							this.error = true
							this.errorMessage = "There's non-integer value"
							return
						}

						let temp = parseInt(numbers[j])

						if(isNaN(temp)) {
							this.error = true
							this.errorMessage = "There's non integer value"
							return
						}

						if(temp < 1 || temp > 15) {
							this.error = true
							this.errorMessage = "There's value out of range"
							return
						}

						squares.push(numbers[j])
					}
				}

				this.$refs.gameBoard.setValues(squares)
			}

			reader.readAsText(file)
		},
		/**
		 * fungsi ini berfungsi untuk menerima masukkan yang diterima dan mengecek
		 * error.
		 */
		calculateBnb() {
			let board_data = this.$refs.gameBoard.board_data
			let squares = []

			/**
			 * menerima masukkan dari papan yang berbentuk array of string
			 * dan mengubahnya menjadi array of integer
			 * sekalian mengecek apakah:
			 * -terdapat non integer
			 * -terdapat duplikat
			 * -terdapat angka diluar range
			 * -angka tidak mencukupi
			 */

			let square_set = new Set()
			
			for(let i = 0; i < board_data.length; ++i) {

				if(square_set.has(board_data[i]) === false) {
					square_set.add(board_data[i])
				} else {
					this.error = true
					this.errorMessage = 'The board contains duplicate value'
					return
				}

				if(board_data[i] == '') {
					squares.push(-1)
					continue
				}

				if(board_data[i].indexOf('.') > -1) {
					this.error = true
					this.errorMessage = 'The board contains non integer value'
				}

				let temp = parseInt(board_data[i])

				if(isNaN(temp)) {
					this.error = true
					this.errorMessage = 'The board contains non integer value'
					return
				}

				if(temp < 1 || temp > 15) {
					this.error = true
					this.errorMessage = `There's a number out of range`
					return
				}

				squares.push(temp)
			}

			this.error = false
			eel.calculate_bnb(squares)
		}
	}
}
</script>


<template>
	<section class="title">
		<h1>15-Puzzle</h1>
		<h2>Steven - 13520131</h2>
	</section>
	<div class='horizontal' style='justify-content: center'>
		<div class='vertical' style='align-items: center'>
			<div class='error-color' v-if=error>
				{{errorMessage}}
			</div>
			<div class='horizontal inner-div'>
				<GameBoard ref='gameBoard'/>
				<button class='calculate' @click='calculateBnb'>Calculate BnB</button>
			</div>
			<input type='file' @change='readFile' ref='fileInput' />
			<button @click='randomize' class='randomize'>Randomize Squares</button>
			<button @click='clearBoard'>Clear Board</button>
			<button @click='stopApp'> Quit App </button>
		</div>
		<div class='horizontal' v-if='hasResult'>
			<div class='vertical result-div'>
				Kurang:
				<div v-for='item in kurang' :key='item[0]'>
					<div class='horizontal'>
						<div class='box'>
							{{item[0]}}
						</div>
						<div class='box'>
							{{item[1]}}
						</div>
					</div>
				</div>
				<div>
					<p>&Sigma; <sub>i=0</sub> <sup>16</sup> KURANG(i) + X = {{ kurangX }} </p>
				</div>
			</div>
			
			<div class='vertical result-div'>
				Board:
				<div v-for='item in boards' :key='item.board_id'>
					<GameBoard class='gameboard-margin' :square_values='item.board' />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
@import './assets/styles/flexbox.css';

html {
	width: 100%;
}

body {
	width: 100%;
	background-color: black;
}

button {
	width: 200px;
	height: 100px;
	font-size: 30px;
}

input {
	width: 200px;
	height: 100px;
	font-size: 15px;
}

div {
	font-size: 50px;
	color: white;
}

footer {
	font-size: 50px;
	color: white;
}

.inner-div {
	align-items: center;
}

.calculate {
	margin-left: 10px;

}

.randomize{
	margin-top: 10px;
}

.error-color {
	color: red;
}

.result-div {
	margin-left: 30px;
}

.box {
	width: 120px;
	height: 60px;
	background-color: lightgray;
	border: 1px solid black;
	color: black;
}

.gameboard-margin {
	margin-top: 30px;
}

@-webkit-keyframes glow {
	from {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #122b7d, 0 0 40px #122b7d, 0 0 50px #122b7d, 0 0 60px #122b7d, 0 0 70px #122b7d;
	}
	
	to {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #122b7d, 0 0 40px #122b7d, 0 0 50px #122b7d, 0 0 60px #122b7d, 0 0 70px #122b7d;
	}
}

@-webkit-keyframes breathing-glow {
	from {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #122b7d, 0 0 40px #122b7d, 0 0 50px #122b7d, 0 0 60px #122b7d, 0 0 70px #122b7d;
	}
	
	to {
		text-shadow: 0 0 20px #fff, 0 0 30px #6b2db2, 0 0 40px #6b2db2, 0 0 50px #6b2db2, 0 0 60px #6b2db2, 0 0 70px #6b2db2, 0 0 80px #6b2db2;
	}
}

.title {
	color: white;
	text-align: center;
	font-size: 40px;

	color: #fff;
	text-align: center;
	animation: breathing-glow 1s ease-in-out infinite alternate;
}

</style>
