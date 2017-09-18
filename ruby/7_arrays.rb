
# ways to define an array
arr1 = Array.new(4)
arr2 = Array.new(4, "mac")
arr3 = Array.new(4) { |e| e = e * 2 }
arr4 = Array.[](1, 2, 3, 4, 5)
arr5 = Array[1, 2, 3, 4, 5]
arr6 = Array(0..9)

# puts "arr1 --> #{arr1}"
# puts "arr2 --> #{arr2}"
# puts "arr3 --> #{arr3}"
# puts "arr4 --> #{arr4}"
# puts "arr5 --> #{arr5}"
# puts "arr6 --> #{arr6}"

# methods
puts "#{arr5 & arr6}"     # returns common elements (no duplicates)
puts "#{arr5 * "test"}"
puts "#{arr5 + arr6}"

