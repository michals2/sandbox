# https://www.tutorialspoint.com/ruby/ruby_variables.htm

=begin
Variables in a Ruby Class
  Local Variable
    Defined on a method
    _variable_name
  Instance Variable
    Available across methods for any instance or object
    Change from object to object
    @variable_name
  Class Variable
    Available across different objects
    Not available across classes
    Belongs to the class
    @@variable_name
  Global Variable
    Available across classes
    $variable_name
=end

# Global variables (not recommended)
$global_variable = 10
class Class1
   def print_global
      puts "Global variable in Class1 is #$global_variable"
   end
end
class Class2
   def print_global
      puts "Global variable in Class2 is #$global_variable"
   end
end

# class1obj = Class1.new
# class1obj.print_global()
# class2obj = Class2.new
# class2obj.print_global()

# Instance variables
class Customer
  def initialize(id, name, addr)
     @cust_id = id
     @cust_name = name
     @cust_addr = addr
  end
  def display_details()
     puts "Customer id #@cust_id"
     puts "Customer name #@cust_name"
     puts "Customer address #@cust_addr"
  end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
cust2 = Customer.new("2", "Poul", "New Empire road, Khandala")

# cust1.display_details()
# cust2.display_details()

# Class variables
class Customer
  @@no_of_customers = 0
  def initialize(id, name, addr)
    # local variables: id, name, addr
    @cust_id = id
    @cust_name = name
    @cust_addr = addr
  end
  def display_details()
    puts "Customer id #@cust_id"
    puts "Customer name #@cust_name"
    puts "Customer address #@cust_addr"
  end
  def total_no_of_customers()
    @@no_of_customers += 1
    puts "Total number of customers: #@@no_of_customers"
  end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
cust2 = Customer.new("2", "Poul", "New Empire road, Khandala")

# cust1.total_no_of_customers()
# cust2.total_no_of_customers()

# Constants
class Example
  VAR1 = 100
  VAR2 = 200
  def show
     puts "Value of first Constant is #{VAR1}"
     puts "Value of second Constant is #{VAR2}"
  end
end

# Create Objects
# object = Example.new()
# object.show()


# Integer Numbers
123                  # Fixnum decimal
1_234                # Fixnum decimal with underline
-500                 # Negative Fixnum
0377                 # octal
0xff                 # hexadecimal
0b1011               # binary
?a                   # character code for 'a'
?\n                  # code for a newline (0x0a)
12345678901234567890 # Bignum

# Floating numbers
123.4                # floating point value
1.0e6                # scientific notation
4E20                 # dot not required
4e+20                # sign before exponential

# String literals
# puts 'escape using "\\"';
# puts 'That\'s right';
# puts "Multiplication Value : #{24*60*60}";

# Arrays
ary = [  "fred", 10, 3.14, "This is a string", "last element", ]
# ary.each do |i|
#    puts i
# end

# Hashes
# hsh = colors = { "red" => 0xf00, "green" => 0x0f0, "blue" => 0x00f }
# hsh.each do |key, value|
#    print key, " is ", value, "\n"
# end

# Ranges
# (10..15).each do |n| 
#   print n, ' ' 
# end

=begin
  puts vs. print
  The puts (short for "put string") and print commands are
  both used to display the results of evaluating Ruby code.
  The primary difference between them is that puts adds a
  newline after executing, and print does not.
=end

# Parallel assignment

  a = 10
  b = 20
  c = 30
  # is the same as
  a, b, c = 10, 20, 30
  # puts "a= #{a}, b=#{b}, c=#{c}"
  
  # swapping 2 variables
  a, b = b, a
  # puts "a= #{a}, b=#{b}, c=#{c}"

# Range Operators
1..10   # Creates a range from 1 to 10  (inclusive)
1...10  # Creates a range from 1 to 9   (exclusive)

# :: Operator
MR_COUNT = 0         # constant defined on main Object class
module Foo
   MR_COUNT = 0
   ::MR_COUNT = 1    # set global count to 1
   MR_COUNT = 2      # set local count to 2
end
puts MR_COUNT        # this is the global constant
puts Foo::MR_COUNT   # this is the local "Foo" constant