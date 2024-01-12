class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def play_turn(valid_moves, console_formatter)
    loop do
      puts("Player #{@mark} turn: ")
      console_formatter.move_message
      move = gets.chomp.to_i

      if valid_move(valid_moves, move)
        return move
      end

      console_formatter.dash_message("Invalid move, try Again\n")
    end
  end

  def valid_move(valid_moves, move)
    valid_moves.include?(move)
  end
end
