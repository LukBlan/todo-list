require_relative 'human_player'
require_relative 'board'

class Game
  def initialize
    @players = []
    @board = nil
    @turn_order = 0
  end

  def add_human_player(symbol)
    @players << HumanPlayer.new(symbol)
  end

  def create_grid
    @board = Board.new(3)
  end

  def get_board_with_valid_moves
    @board.get_valid_moves_grid
  end

  def execute_turn
    valid_range = self.get_valid_move_range
    player = @players[@turn_order]
    player_move = player.play_turn(valid_range)
    player_mark = player.mark
    @board.mark_grid(player_move, player_mark)
  end

  def get_valid_move_range
    max_move_range = @board.count_white_space
    (1..max_move_range)
  end

  def get_board
    @board.grid
  end

end
