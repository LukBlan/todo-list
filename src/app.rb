require_relative 'domain/game'

require_relative 'ui/console_interface'
require_relative 'ui/console_formatter'
require_relative 'ui/board_display'

# Domain
game = Game.new(6)

# Ui
board_display = BoardDisplay.new
console_formatter = ConsoleFormatter.new(50)
user_interface = ConsoleInterface.new(game, console_formatter, board_display)
user_interface.init