class HumanPlayer
  attr_reader :mark

  def initialize(symbol)
    @mark = symbol
  end

  def play_turn
    print("Choose Move: ")
    gets.chomp.to_i
  end
end
