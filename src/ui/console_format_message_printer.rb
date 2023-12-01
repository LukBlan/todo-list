# frozen_string_literal: true

class ConsoleFormatMessagePrinter
  def initialize
  end

  def dash_message(message)
    print("  - #{message}")
  end

  def move_message(move="")
    dash_message("move -> #{move}")
  end
end
