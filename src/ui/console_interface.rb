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
    puts("Valid Moves: ")
    board_with_valid_moves = @game.get_board_with_valid_moves
    display_board(board_with_valid_moves)
  end

  def display_result_board
    puts("Result: ")
    board = @game.get_board
    display_board(board)
  end

  def display_board(board)
    puts

    board.each_with_index do |row, row_index|
      row.each_with_index do |element, column_index|
        txt = " #{element} "

        if column_index != row.length - 1
          txt += "|"
        end
        print txt
      end

      puts
      if row_index != board.length - 1
        line_separator = self.get_line_separator(row.length)
        puts line_separator
      end
    end

    puts
  end

  def get_line_separator(elements)
    line_separator = ""
    dash_amount = elements * 4 - 1

    dash_amount.times { line_separator += "-" }

    line_separator
  end
end
