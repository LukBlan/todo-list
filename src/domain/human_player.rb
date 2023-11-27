class HumanPlayer
  attr_reader :mark

  def initialize(symbol)
    @mark = symbol
  end

  def play_turn(range)
    print("Choose Move: ")
    user_move = gets.chomp.to_i

    if !range.to_a.include?(user_move)
      puts("Invalid move")
      user_move = play_turn(range)
    end

    user_move
  end
end
