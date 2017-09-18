# default values
  # def test(a1 = "Ruby", a2 = "Perl")
  #   puts "The programming language is #{a1}"
  #   puts "The programming language is #{a2}"
  # end
  # test "C", "C++"
  # test

# returned values
  # def test
  #   i = 100
  #   j = 200
  #   k = 300
  # return i, j, k
  # end
  # var = test()
  # puts var

# variable number of parameters
  # def sample (*test)
  #   puts "The number of parameters is #{test.length}"
  #   for i in 0...test.length
  #     puts "The parameters are #{test[i]}"
  #   end
  # end
  # sample "Zara", "6", "F"
  # sample "Mac", "36", "M", "MCA"

# Class methods
  # Can access a method without instantiating it by prepending Class_Name.function_name
  class Accounts
    def reading_charge
      puts "test 1"
    end
    def Accounts.return_date
      puts "test 2"
    end
  end
  # Accounts.reading_charge   # will error
  Accounts.return_date        # won't error