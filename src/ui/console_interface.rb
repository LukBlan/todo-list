require_relative '../domain/human_player.rb'
require_relative '../domain/ia_player.rb'
require_relative '../domain/game.rb'
require_relative './console_formatter'

class ConsoleInterface
  def initialize(game, console_formatter, board_display)
    @game = game
    @console_formatter = console_formatter
    @board_display = board_display
  end

  def init
    @console_formatter.show_message_between_dashes("Welcome to Tic Tac Toe")
    puts
    self.configure
    self.show_rules
    self.display_board_with_moves
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
    @console_formatter.show_message_between_dashes("Game Over!")
    puts(result)
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
    max_amount_players = @game.max_amount_of_players

    loop do
      @console_formatter.dash_message("Number of Players? (Max #{max_amount_players}): ")
      players_amount = gets.chomp.to_i

      if players_amount >= 2 && players_amount <= max_amount_players
        return players_amount
      end

      puts("Incorrect amount, Try again")
    end
  end

  def configure_grid
    size = nil

    loop do
      @console_formatter.dash_message("Grid size? (Max: #{@game.max_grid_size}): ")
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
    @console_formatter.dash_message("Your goal is to mark 3 contiguous cells from a row, columns or diagonals to win\n")
    @console_formatter.dash_message("During the game give one of the following valid moves that are not already marked\n")
  end

  def game_loop
    while !@game.over?
      move = @game.execute_turn(@console_formatter)
      @game.mark_grid(move)
      @game.next_turn
      self.display_result_board
    end
  end

  def display_board_with_moves
    board_with_moves = @game.get_board_with_moves
    @board_display.display_board(board_with_moves)
  end

  def display_result_board
    puts("Result: ")
    board = @game.get_board
    @board_display.display_board(board)
  end

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
