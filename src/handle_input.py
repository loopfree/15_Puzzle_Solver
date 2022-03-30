from board import Board
from random import shuffle, randint

def file_input():
	print('Please insert the file name')
	filename = input()
	board = Board()
	try:
		with open(filename, 'r') as f:
			for line in f:
				col_in = line.strip().split(' ')
				if len(col_in) != 4:
					print('the number of column doesn\'t match the required amount')
					return None

				int_form = []

				for elem in col_in:
					try:
						if elem == '_':
							int_form.append(-1)
						else:
							int_form.append(int(elem))
							checker = int_form[-1]
							if (checker < 1) and (checker > 16):
								print('your input contains a number that is out of range')
								return None
					except ValueError:
						print('one of your input doesn\'t contain integer')
						return None

				for elem in int_form:
					if(not board.add_square(elem)):
						print('There\'s a duplicate number in your board')
						return None
	except FileNotFoundError:
		print('file not found')		

	return board

def manual_input():
	print('Please enter the starting matrix.')
	print('For the empty space, please insert the _ symbol')
	row_index = 1
	board = Board()
	while row_index <= 4:
		print('please insert the', row_index, 'row')
		
		'''
			variable ini digunakan untuk mengecek
			kondisi dimana apabila input sukses, maka sambung
			ke baris selanjutnya, dan apabila gagal,
			mengulangi input baris yang gagal.
		'''

		succeed = True

		'''
			kode ini menerima inputan pengguna
			lalu menghilangkan spasi yang di mana
			setelah spasi tersebut dihilangkan,
			dilakukan pemisahan string inputan menjadi
			beberapa substring menggunakan spasi sebagai
			pemisah dan mengkonversinya menjadi list
			sehingga dapat diolah lebih lanjur
		'''

		user_in = list(input().strip().split(' '))
		
		'''
			Code ini mengecek apakah user menginput
			4 angka
		'''
		if len(user_in) != 4:
			print('Your input didn\'t have enough column')
			succeed = False

		if not succeed:
			continue

		'''
			Variable ini digunakan untuk
			menyimpan bentuk integer dari input user
		'''
		int_form = []

		'''
			Code ini berguna untuk
			mengubah input user
			menjadi bentuk integer,
			dan apabila input tersebut merupakan kosong (_)
			maka diubah menjadi -1 di int_form.
			Juga mengecek apakah angka yang dimasukkan
			berada di antara 1-16
		'''
		for elem in user_in:
			try:
				if elem == '_':
					int_form.append(-1)
				else:
					int_form.append(int(elem))
					checker = int_form[-1]
					if (checker < 1) and (checker > 16):
						print('your input contains a number that is out of range')
						succeed = False
			except ValueError:
				print('one of your input doesn\'t contain integer')
				succeed = False

		if not succeed:
			continue

		'''
			code ini berfungsi untuk memasukkan
			baris-baris ke dalam class Board
			sekalian mengecek apakah angka tersebut telah ada
			di dalam class tersebut
		'''
		for elem in int_form:
			if(not board.add_square(elem)):
				print('There\'s already a', elem, 'in the board')
				succeed = False

		if not succeed:
			continue

		if succeed:
			row_index += 1
	return board

def random_input():
	board_square = [i for i in range(1, 16)]
	board_square.append(-1)
	shuffle(board_square)
	board = Board()
	for elem in board_square:
		board.add_square(elem)
	return board