class Board
  attr_reader :current_valid_move_range, :grid
  WHITE_SPACE = :-

  def initialize(size)
    grid_builder = Proc.new do |grid_size|
      grid = []
      grid_size.times { grid << WHITE_SPACE }
      grid
    end

    @grid = Array.new(3) { grid_builder.call(size) }
    @size = size
  end

  def valid_move?(move)
    move > 0 && (move <= @size * @size) && is_not_marked(move)
  end

  def is_not_marked(move)
    row = (move - 1) / @size
    column = (move - 1) % 3
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
    i = 0
    first_element = grid[i][i]
    count = 0

    grid.each do
      if grid[i][i] == first_element && first_element != WHITE_SPACE
        count += 1
      end

      i += 1
    end

    count == 3
  end

  def check_rows(grid)
    grid.each do |row|
      first_element = row[0]
      count = 0

      row.each do |element|
        if element == first_element && element != WHITE_SPACE
          count += 1
        end
      end

      if count == 3
        return true
      end
    end

    false
  end

end
