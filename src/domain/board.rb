class Board
  attr_reader :current_valid_move_range, :grid

  def initialize(size)
    grid_builder = Proc.new do |grid_size|
      grid = []
      grid_size.times { grid << :- }
      grid
    end

    @grid = Array.new(3) { grid_builder.call(size) }
  end

  def get_valid_moves_grid
    move = 1

    @grid.map do |row|
      row.map do |element|
        if element == :-
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
      sum += row.count { |element| element == :- }
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

end
