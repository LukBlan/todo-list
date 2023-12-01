require_relative '../ui/console_format_message_printer'

class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
    @formatter = ConsoleFormatMessagePrinter.new
  end

  def play_turn(valid_moves)
    loop do
      puts("Player #{@mark} turn: ")
      @formatter.move_message
      move = gets.chomp.to_i

      if valid_move(valid_moves, move)
        return move
      end

      @formatter.dash_message("Invalid move, try Again\n")
    end
  end

  def valid_move(valid_moves, move)
    valid_moves.include?(move)
  end
end
