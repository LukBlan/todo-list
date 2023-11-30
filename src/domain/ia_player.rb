class Ia_player
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def play_turn(valid_moves)
    move = valid_moves.sample
    puts("Player #{@mark} (Ia) turn")
    puts("move -> #{move}")
    move
  end
end
