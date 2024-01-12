class Ia_player
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def play_turn(valid_moves, console_formatter)
    move = valid_moves.sample
    puts("Player #{@mark} (Ia) turn")
    console_formatter.move_message(move)
    puts
    move
  end
end
