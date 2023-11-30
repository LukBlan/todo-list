class Board
  attr_reader :current_valid_move_range, :grid
  WHITE_SPACE = :-

  def initialize(size)
    grid_builder = Proc.new do |grid_size|
      grid = []
      grid_size.times { grid << WHITE_SPACE }
      grid
    end

    @grid = Array.new(size) { grid_builder.call(size) }
    @size = size
  end

  def is_not_marked(move)
    row = (move - 1) / @size
    column = (move - 1) % @size
    @grid[row][column] == WHITE_SPACE
  end

  def get_valid_moves_grid
    move = 1

    @grid.map do |row|
      row.map do |element|
        if element == WHITE_SPACE
          current_move = move
          move += 1
          current_move
        else
          element
        end
      end
    end
  end

  def count_white_space
    @grid.reduce(0) do |sum, row|
      sum += row.count { |element| element == WHITE_SPACE }
    end
  end

  def mark_grid(move, mark)
    current_move = 1

    @grid.each_with_index do |row, row_index|
      row.each_with_index do |column, column_index|
        if move == current_move
          @grid[row_index][column_index] = mark
        end

        current_move += 1
      end
    end
  end

  def check_grid
    check_rows(@grid) || check_columns || check_diagonals
  end

  def check_columns
    check_rows(@grid.transpose)
  end

  def check_diagonals
    diagonal(@grid) || diagonal(@grid.reverse)
  end

  def diagonal(grid)
    start_position = 0

    loop do
      position = start_position
      first_element = grid[position][position]
      count = 0

      3.times do
        if grid[position][position] == first_element && first_element != WHITE_SPACE
          count += 1
        end

        position += 1
      end

      if count == 3
        return true
      end

      start_position += 1
      if start_position + 2 > grid.length - 1
        break
      end
    end

    false
  end

  def check_rows(grid)
    grid.each_with_index do |row, row_index|
      start_position = 0

      loop do
        count = 0
        position = start_position
        element = row[start_position]

        3.times do
          if row[position] == element && element != WHITE_SPACE
            count += 1
          end

          position += 1
        end

        if count == 3
          return true
        end

        start_position += 1
        if start_position + 2 > row.length - 1
          break
        end

      end
    end

    false
  end

  def get_valid_moves
    (1..(@size * @size)).filter { |move| is_not_marked(move) }
  end

end
