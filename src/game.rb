require_relative 'human_player'
require_relative 'board'

class Game
  def initialize
    @players = []
    @board = nil
  end

  def add_human_player
    @players << HumanPlayer.new
  end

  def create_grid
    @board = Board.new(3)
  end

end
