class Board:

	def __init__(self):
		self.square = []
		self.missing_number_list = [i for i in range(1, 17)]
		self.missing_number = 0

	'''
		override equality function untuk class
	'''
	def __eq__(self, other):
		return self.square == other.square


	'''
		override hash function untuk class
	'''

	def __hash__(self):
		return hash(tuple(self.square))

	'''
		Fungsi ini berfungsi untuk
		memasukkan angka ke dalam
		papan dengan berurut
	'''
	def add_square(self, new_square):
		if new_square in self.square:
			return False
		self.square.append(new_square)
		if new_square != -1:
			self.missing_number_list.remove(new_square)
		if len(self.missing_number_list) == 1:
			self.missing_number = self.missing_number_list[0]
		return True

	'''
		fungsi ini berfungsi untuk
		mengambila angka yang berada
		pada indeks ke-i di dalam papan.
		Mengembalikan -1 apabila
		out of range
	'''
	def get_number(self, index):
		if (index < 1) and (index > 16):
			return -1
		return (self.square[index-1])

	'''
		fungsi ini mengembalikan sebuah indeks yang equivalent dengan format (x, y)
	'''

	def get_index_xy(self, x, y):
		return (y * 4) + x

	'''
		fungsi ini berfungsi untuk
		mengambil indeks dari angka
		yang terdapat di dalam papan.
		Fungsi ini akan mengembalikan nilai
		-1 apabila tidak terdapat angka tersebut
		di dalam papan
	'''

	def get_index(self, number):
		result = None
		try:
			result = self.square.index(number) + 1
		except ValueError:
			result = -1
		return result

	'''
		fungsi ini berfungsi untuk mengembalikan banyaknya
		angka yang tidak berada pada indeks yang seharusnya
	'''

	def g_cost(self):
		result = 0
		for index in range(len(self.square)):
			index_check = index + 1
			elem = self.square[index]
			if elem == -1:
				continue
			if index_check != elem:
				result += 1
		return result

	'''
		fungsi ini berfungsi untuk mengembalikan copy dari self
	'''

	def copy(self):
		new_self = Board()
		for elem in self.square:
			new_self.add_square(elem)
		return new_self
		
	'''
		fungsi ini berfungsi convert
		class Board ke string
	'''

	def __str__(self):
		result = ''
		temp = 0
		for elem in self.square:
			if temp == 0:
				result += '['
			if elem == -1:
				result += '__'
			else:
				if elem // 10 < 1:
					result += '0'
				result += str(elem)
			temp += 1
			if temp == 4:
				result += ']\n'
				temp = 0
			else:
				result += ' '
		return result

	def __repr__(self):
		return self.__str__()
