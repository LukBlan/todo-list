require_relative 'human_player'
require_relative 'board'

class Game
  attr_reader :result

  def initialize
    @players = []
    @board = nil
    @turn_order = 0
    @marks = ["-", " "]
    @result = nil
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

end
