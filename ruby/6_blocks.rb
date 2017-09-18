# The yield statemment
  # def test
  #   puts "You are in the method"
  #   yield
  #   puts "You are again back to the method"
  #   yield
  # end
  # test {puts "You are in the block"}

  # can pass parameters to the yield statement
  # def test
  #   yield 5
  #   puts "You are in the method test"
  #   yield 100
  # end
  # test {|i| puts "You are in the block #{i}"}

# BEGIN and END blocks
BEGIN { 
  # BEGIN block code 
  puts "BEGIN code block"
} 

END { 
  # END block code 
  puts "END code block"
}

# MAIN block code 
puts "MAIN code block"