# while statement (executes while condition true)
  $i = 0
  $num = 5

  while $i < $num  do
    puts("Inside the loop i = #$i" )
    $i +=1
  end

# while modifier
  $i = 0
  $num = 5
  begin
    puts("Inside the loop i = #$i" )
    $i +=1
  end while $i < $num

# until statement (executes while condition false)
  $i = 0
  $num = 5

  until $i > $num  do
    puts("Inside the loop i = #$i" )
    $i +=1;
  end

# until modifier
  $i = 0
  $num = 5
  begin
    puts("Inside the loop i = #$i" )
    $i +=1;
  end until $i > $num

# for statement
for i in 0..5
  puts "Value of local variable is #{i}"
end

# break statement
for i in 0..5
  if i > 2 then
     break
  end
  puts "Value of local variable is #{i}"
end

# next statement
  # jumps to next iteration of the most inner loop
  for i in 0..5
    if i < 2 then
       next
    end
    puts "Value of local variable is #{i}"
 end

# redo statement
  # restarts this iteration of the inner most loop without checking condition
  for i in 0..5
    if i < 2 then
       puts "Value of local variable is #{i}"
       redo
    end
 end