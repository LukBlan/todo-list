# frozen_string_literal: true

class BoardDisplay
  def display_board(board)
    puts
    board.each_with_index do |row, row_index|
      row.each_with_index do |element, column_index|
        if element.to_s.length > 1
          txt = "  #{element} "
        else
          txt = "  #{element}  "
        end


        if column_index != row.length - 1
          txt += "|"
        end
        print txt
      end

      puts
      if row_index != board.length - 1
        line_separator = self.get_line_separator(row.length)
        puts line_separator
      end
    end

    puts
  end

  def get_line_separator(elements)
    line_separator = ""
    dash_amount = elements * 6 - 1

    dash_amount.times { line_separator += "-" }

    line_separator
  end
end
