class HumanPlayer
  attr_reader :mark

  def initialize(symbol)
    @mark = symbol
  end

  def play_turn
    print("-> #{@mark} turn: ")
    gets.chomp.to_i
  end
end
