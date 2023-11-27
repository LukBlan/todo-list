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
    @game.add_human_player("x")
    @game.add_human_player("0")
  end

  def configure_grid
    @game.create_grid
  end

  def game_loop
    self.display_board_with_valid_moves
    @game.execute_turn
    self.display_result_board
  end

  def display_board_with_valid_moves
    puts("Make a move: ")
    puts "---------------"
    board_with_valid_moves = @game.get_board_with_valid_moves
    display_board(board_with_valid_moves)
  end

  def display_result_board
    puts("Result: ")
    board = @game.get_board
    display_board(board)
  end

  def display_board(board)
    board.each do |row|
      row.each { |element| print " #{element}"}
      puts
    end
  end
end
