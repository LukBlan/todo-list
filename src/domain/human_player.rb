class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def play_turn(valid_moves)
    loop do
      puts("Player #{@mark} turn: ")
      print("move -> ")
      move = gets.chomp.to_i

      if valid_move(valid_moves, move)
        return move
      end

      puts("Invalid move, try Again")
    end
  end

  def valid_move(valid_moves, move)
    valid_moves.include?(move)
  end
end
