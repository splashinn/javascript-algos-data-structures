# factorial.rb
# splashinn

class Integer
  def factorial_simple(number)
    fat = 1
    (2..number).each { |n| fat = fat * n }
    fat
  end

  def factorial_reverse(number)
    (number - 1).downto(1).each { |i| n *= i }
    n
  end

  def factorial_recursive(number)
    (number == 1) ? 1 : (number * factorial_recursive(number-1))
  end

  def factorial_reduce(number)
    (1..number).reduce(:*)
  end

  alias_method :factorial, factorial_reduce
end