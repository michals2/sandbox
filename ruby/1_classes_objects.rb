# this is a single comment
=begin
  this is a comment
  block
=end

# declares code to be called before the program is run
BEGIN {
  puts "Initializing Ruby Program"
}
# declares code to be called at the end of the program
END {
  puts "Ruby program terminating"
}

# defining a class
class Customer
end



class Customer
  @@no_of_customers = 0
end

cust1 = Customer. new
cust2 = Customer. new

# Custom method to create Ruby objects
class Customer
  @@no_of_customers = 0
  def initialize(id, name, addr)
     @cust_id = id
     @cust_name = name
     @cust_addr = addr
  end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
cust2 = Customer.new("2", "Poul", "New Empire road, Khandala")

# Member functions in Ruby class
class Sample
  def hello
     puts "Hello Ruby!"
  end
end

# Now using above class to create objects
object = Sample. new
object.hello