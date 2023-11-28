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

  def valid_move?(move)
    @board.valid_move?(move)
  end

  def next_turn
    @turn_order = (@turn_order + 1) % @players.length
  end

  def create_grid
    @board = Board.new(3)
  end

  def get_board_with_moves
    @board.get_valid_moves_grid
  end

  def get_current_player
    @players[@turn_order]
  end

  def execute_turn
    player = get_current_player
    player.play_turn
  end

  def mark_grid(move)
    player = get_current_player
    mark = player.mark
    @board.mark_grid(move, mark)
  end

  def get_board
    @board.grid
  end

  def over?
    @board.count_white_space == 0
  end

end
