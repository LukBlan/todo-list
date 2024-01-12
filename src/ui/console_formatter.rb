class ConsoleFormatter
  def initialize(console_line_length)
    @console_line_length = console_line_length
  end

  def show_message_between_dashes(message)
    line = get_line(@console_line_length)
    message_in_middle = get_text_in_middle(message)

    puts(line)
    puts(message_in_middle)
    puts(line)
  end

  def get_text_in_middle(message)
    middle_point = @console_line_length / 2
    message_middle_point = message.length / 2
    middle_point_offset = middle_point - message_middle_point
    text = ""

    middle_point_offset.times { text += " " }
    text + message
  end

  def get_line(length)
    line = ""
    length.times { line += "-" }
    line
  end

  def dash_message(message)
    print("  - #{message}")
  end

  def move_message(move="")
    dash_message("move -> #{move}")
  end
end
