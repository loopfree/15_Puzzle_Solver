import eel
from board import Board
from time import time
from functools import cmp_to_key

'''
	fungsi untuk dimasukkan ke dalam parameter key
	di dalam fungsi min(), mengembalikan tuple dimana
	elem[0] merupakan level dan elem[1] merupakan cost
'''
def bnb_cmp(a, b):
	if a[0] < b[0]:
		return 1
	elif a[0] > b[0]:
		return -1
	else:
		if a[1] > b[1]:
			return 1
		elif a[1] < b[1]:
			 return -1
		else:
			return 0

'''	
	fungsi untuk mendapatkan semua angka yang lebih kecil dari X
	dengan constraint lebih besar dari 1
'''
def get_smaller_number_list(number):
	result = []
	temp = number - 1
	while temp != 0:
		result.append(temp)
		temp -= 1
	return result

'''
	fungsi ini untuk mendapatkan apakah kurang nanti akan
	ditamabah 1 atau 0. Fungsi ini mendapatkan hasil tersebut dengan patterm
	apabila index dari kosong yang terdapat pada board tersebut (asumsi mulai dari 0),
	dibagi 4 dan dimod 2 haslinya sama dengan dimod 2 saja, maka tidak berada di area arsir, sebaliknya
	apabila hasilnya dibagi 4 dan dimod 2 tidak sama dengan dimod 2 saja, maka berada di area arsir.
'''
def get_kurang_x(board):
	position = board.get_index(-1)
	position -= 1
	row_check = (position // 4) % 2
	column_check = position % 2
	if row_check == column_check:
		return 0
	else:
		return 1

'''
	fungsi ini mengkalkulasi semua kurang()
	dan mengembalikannya dalam bentuk list
'''
def get_kurang(board):
	result = []
	for index in range(len(board.square)):
		elem = board.square[index]
		if elem == -1:
			elem = board.missing_number
		smaller_list = get_smaller_number_list(elem)
		count = 0
		for i in smaller_list:
			other_index = board.get_index(i)
			if other_index > index:
				count += 1
		result.append((elem, count))
	result.sort(key=lambda x: x[0])
	return result

'''
	pruning setelah mendapatkan solusi
	dari algoritma branch and bound
'''
def prune(queue):
	queue.empty()

'''
	fungsi untuk membuat branch and bound
'''
def bnb(board):
	# result = {}

	kurang = get_kurang(board)
	# result['kurang'] = kurang
	eel.set_kurang(kurang)

	kurang_sum = 0
	for elem in kurang:
		kurang_sum += elem[1]

	x = get_kurang_x(board)

	checker = kurang_sum + x
	eel.set_kurang_x(checker)
	if checker % 2 != 0:
		# result['error'] = 'Unable to finish the 15 puzzle'
		eel.set_error('Unable to finish the 15 puzzle')
		return

	queue = [(0, 0, board)]
	set_board = {board}

	# result['boards'] = []
	eel.reset_board()

	board_id = 1

	while True:

		to_check = min(queue, key=cmp_to_key(bnb_cmp))
		queue.remove(to_check)
		check_board = to_check[2]
		check_level = to_check[0] + 1

		# result['boards'].append({'board_id': board_id, 'board':check_board.square})
		eel.add_board({'board_id': board_id, 'board': check_board.square})
		board_id += 1

		if check_board.g_cost() == 0:
			break

		'''
			mendapatkan posisi dari square yang kosong di board
		'''
		
		empty_pos = check_board.square.index(-1)
		row_pos = empty_pos // 4
		col_pos = empty_pos % 4
		
		'''
			move up
		'''

		succeed = True
		up_board = check_board.copy()
		if row_pos == 0:
			succeed = False
		else:
			up_row = row_pos - 1
			up_index = up_board.get_index_xy(col_pos, up_row)

			temp = up_board.square[up_index]
			up_board.square[up_index] = up_board.square[empty_pos]
			up_board.square[empty_pos] = temp

		if up_board in set_board:
			succeed = False

		if succeed:
			cost = up_board.g_cost() + (check_level)
			queue.append((check_level, cost, up_board))
			set_board.add(up_board)

		'''
			move bottom
		'''

		succeed = True
		bottom_board = check_board.copy()

		if row_pos == 3:
			succeed = False
		else:
			bottom_row = row_pos + 1
			bottom_index = bottom_board.get_index_xy(col_pos, bottom_row)

			temp = bottom_board.square[bottom_index]
			bottom_board.square[bottom_index] = bottom_board.square[empty_pos]
			bottom_board.square[empty_pos] = temp

		if bottom_board in set_board:
			succeed = False

		if succeed:
			cost = bottom_board.g_cost() + (check_level)
			queue.append((check_level, cost, bottom_board))
			set_board.add(bottom_board)

		'''
			move left
		'''

		succeed = True
		left_board = check_board.copy()

		if col_pos == 0:
			succeed = False
		else:
			left_pos = col_pos - 1
			left_index = left_board.get_index_xy(left_pos, row_pos)

			temp = left_board.square[left_index]
			left_board.square[left_index] = left_board.square[empty_pos]
			left_board.square[empty_pos] = temp

		if left_board in set_board:
			succeed = False

		if succeed:
			cost = left_board.g_cost() + (check_level)
			queue.append((check_level, cost, left_board))
			set_board.add(left_board)

		'''
			move right
		'''

		succeed = True
		right_board = check_board.copy()

		if col_pos == 3:
			succeed = False
		else:
			right_pos = col_pos + 1
			right_index = right_board.get_index_xy(right_pos, col_pos)

			temp = right_board.square[right_index]
			right_board.square[right_index] = right_board.square[empty_pos]
			right_board.square[empty_pos] = temp

		if right_board in set_board:
			succeed = False

		if succeed:
			cost = right_board.g_cost() + (check_level)
			queue.append((check_level, cost, right_board))
			set_board.add(right_board)
	# return result

def main():
	eel.init('dist')

	@eel.expose
	def calculate_bnb(board_val):
		board = Board()
		for elem in board_val:
			board.add_square(elem)
		print('calculating')
		bnb(board)

	@eel.expose
	def stop_program():
		exit()

	#eel.start('index.html', mode='edge')
	#eel.start('index.html', mode='chrome')
	eel.start('index.html')


if __name__ == '__main__':
	main()