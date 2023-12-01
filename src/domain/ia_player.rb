require_relative '../ui/console_format_message_printer'

class Ia_player
  attr_reader :mark

  def initialize(mark)
    @mark = mark
    @formatter = ConsoleFormatMessagePrinter.new
  end

  def play_turn(valid_moves)
    move = valid_moves.sample
    puts("Player #{@mark} (Ia) turn")
    @formatter.move_message(move)
    puts
    move
  end
end
