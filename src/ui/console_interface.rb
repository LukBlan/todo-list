require_relative '../domain/human_player.rb'
require_relative '../domain/ia_player.rb'
require_relative '../domain/game.rb'

class ConsoleInterface
  MAX_AMOUNT_PLAYERS = 6

  def initialize
    @game = Game.new
    @marks = ["-"]
  end

  def init
    self.show_welcome_message
    self.configure
    self.show_rules
    self.game_loop
    self.display_result
  end

  def configure
    puts("Configuration is starting...")
    self.configure_grid
    self.configure_players
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
    puts
  end

  def configure_players
    players_total = get_total_players

    players_total.times do |number|
      mark = get_user_input_mark(number)
      option = get_player_type_option(number)

      if option == 1
        player = HumanPlayer.new(mark)
        @game.add_player(player)
      else
        player = Ia_player.new(mark)
        @game.add_player(player)
      end
    end
  end

  def get_total_players
    loop do
      print_format_message("Number of Players? (Max #{MAX_AMOUNT_PLAYERS}): ")
      players_amount = gets.chomp.to_i

      if players_amount >= 2 && players_amount <= MAX_AMOUNT_PLAYERS
        return players_amount
      end

      puts("Incorrect amount, Try again")
    end
  end

  def configure_grid
    size = nil

    loop do
      print_format_message("Grid size? (Max: #{@game.max_grid_size}): ")
      size = gets.chomp.to_i

      if size >= 3 && size <= @game.max_grid_size
        break
      end

      puts("Invalid grid size, try again")
    end

    @game.create_grid(size)
  end

  def show_rules
    puts("Rules: ")
    print_format_message("Your goal is to mark 3 contiguous cells from a row, columns or diagonals to win\n")
    print_format_message("During the game give one of the following valid moves that are not already marked\n")
    self.display_board_with_moves
  end

  def game_loop
    while !@game.over?
      move = @game.execute_turn
      @game.mark_grid(move)
      @game.next_turn
      self.display_result_board
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
        if element.to_s.length > 1
          txt = "  #{element} "
        else
          txt = "  #{element}  "
        end


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
    dash_amount = elements * 6 - 1

    dash_amount.times { line_separator += "-" }

    line_separator
  end

  def print_format_message(message)
    print("  - #{message}")
  end

  private

  def get_player_type_option(number)
    loop do
      print("      -> Player #{number + 1} Human (1) or Ia (2)?: ")
      option = gets.chomp.to_i

      if option == 1 || option == 2
        return option
      end

      puts("Invalid option, try again")
    end
  end

  def get_user_input_mark(number)
    loop do
      print("      -> Player #{number + 1} mark: ")
      mark = gets.chomp.downcase

      if @game.valid_mark(mark)
        return mark
      end

      puts("Invalid board mark try again")
    end
  end
end
