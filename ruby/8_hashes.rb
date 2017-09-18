H = Hash["a" => 100, "b" => 200, [1,"jan"] => "January"]
puts "#{H['a']}"
puts "#{H['b']}"
puts "#{H[[1,"jan"]]}"

$, = ", "
months = Hash.new( "month" )
months = {"1" => "January", "2" => "February"}
keys = months.keys
values = months.values

puts "#{keys}"
puts "#{values}"