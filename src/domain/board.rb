class Board
  def initialize(size)
    grid_builder = Proc.new do |grid_size|
      grid = []
      grid_size.times { grid << :_ }
      grid
    end
    @grid = Array.new(3) { grid_builder.call(size) }
  end

  def get_valid_moves
    move = 1

    @grid.map do |row|
      row.map do |element|
        if element == :_
          current_move = move
          move +=1
          current_move
        else
          element
        end
      end
    end

  end

end
