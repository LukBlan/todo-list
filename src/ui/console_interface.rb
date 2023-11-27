require_relative '../domain/game.rb'

class ConsoleInterface
  def initialize
    @game = Game.new
  end

  def init
    self.show_welcome_message
    self.configure_players
    self.configure_grid
  end

  def show_welcome_message
    puts("------------------------")
    puts(" Welcome to Tic Tac Toe")
    puts("------------------------")
  end

  def configure_players
    @game.add_human_player
    @game.add_human_player
  end

  def configure_grid
    @game.create_grid
  end
end
