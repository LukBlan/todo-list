require_relative 'board'

class Game
  MAX_GRID_SIZE = 6
  attr_reader :result

  def initialize
    @players = []
    @board = nil
    @turn_order = 0
    @marks = ["-", " ", "|"]
    @result = nil
  end

  def max_grid_size
    MAX_GRID_SIZE
  end

  def next_turn
    @turn_order = (@turn_order + 1) % @players.length
  end

  def create_grid(size)
    @board = Board.new(size)
  end

  def get_board_with_moves
    @board.get_valid_moves_grid
  end

  def get_current_player
    @players[@turn_order]
  end

  def execute_turn
    player = get_current_player
    valid_moves = @board.get_valid_moves
    player.play_turn(valid_moves)
  end

  def mark_grid(move)
    player = get_current_player
    mark = player.mark
    @board.mark_grid(move, mark)
  end

  def valid_mark(mark)
    mark.length == 1 && !@marks.include?(mark)
  end

  def get_board
    @board.grid
  end

  def over?
    out_of_space = @board.count_white_space == 0
    winner = @board.check_grid

    if out_of_space
      result = "Tie"
    end

    if winner
      winner = get_last_player
      mark = winner.mark
      @result = "Winner #{mark}"
    end

    out_of_space || winner
  end

  def get_last_player
    position = (@turn_order - 1) % @players.size
    @players[position]
  end

  def add_player(player)
    @marks << player.mark
    @players << player
  end

end
