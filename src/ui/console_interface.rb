require_relative '../domain/game.rb'

class ConsoleInterface
  def initialize
    @game = Game.new
  end

  def init
    self.show_welcome_message
    self.configure_players
    self.configure_grid
    self.game_loop
  end

  def show_welcome_message
    puts("------------------------")
    puts(" Welcome to Tic Tac Toe")
    puts("------------------------")
  end

  def configure_players
    @game.add_human_player
    @game.add_human_player
  end

  def configure_grid
    @game.create_grid
  end

  def game_loop
    self.display_board_with_valid_moves
    #self.execute_turn
    #self.display_board
  end

  def display_board_with_valid_moves
    puts("Make a move")
    puts "---------------"
    board_with_valid_moves = @game.get_board_with_valid_moves
    board_with_valid_moves.each do |row|
      row.each { |element| print " #{element}"}
      puts
    end
  end
end
