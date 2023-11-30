cd ..
dir=$(pwd)
appPath=$dir/src/app.rb
rubyInterpreter=$dir/scripts/rubyinstaller-3.2.2-1-x64/bin/ruby
$rubyInterpreter $appPath
echo "Game close in 5 Seconds"
sleep 5
