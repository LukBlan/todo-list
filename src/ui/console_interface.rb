require_relative '../domain/game.rb'

class ConsoleInterface
  def initialize
    @game = Game.new
  end

  def init
    self.show_welcome_message
    self.configure_players
    self.configure_grid
    self.show_rules
    self.game_loop
    self.display_result
  end

  def display_result
    result = @game.result
    puts("Game Over!")
    puts(result)
  end

  def show_welcome_message
    puts("------------------------")
    puts(" Welcome to Tic Tac Toe")
    puts("------------------------")
  end

  def configure_players
    @game.add_human_player("x")
    @game.add_human_player("o")
  end

  def configure_grid
    @game.create_grid
  end

  def show_rules
    puts("Rules: ")
    puts("  - Your goal is to mark 3 contiguous cells from a row, columns or diagonals to win")
    puts("  - During the game give one of the following valid moves that are not already marked")
    self.display_board_with_moves
  end

  def game_loop
    while !@game.over?
      move = self.get_player_move
      @game.mark_grid(move)
      @game.next_turn
      self.display_result_board
    end
  end

  def get_player_move
    loop do
      move = @game.execute_turn

      if @game.valid_move?(move)
        return move
      end

      puts "Invalid Move: Try Again"
    end
  end

  def display_board_with_moves
    board_with_moves = @game.get_board_with_moves
    display_board(board_with_moves)
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
