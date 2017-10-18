require "pg"
load './local_env.rb' if File.exist?('./local_env.rb')

def winning(winner)
    time = Time.new
    db_params = {
	host: ENV['host'],
	port: ENV['port'],
	dbname: ENV['dbname'],
	user: ENV['user'],
	password: ENV['password']
    }
db = PG::Connection.new(db_params)
db.exec("insert into scoreboard(wins,time)VALUES('#{winner}','#{time}')")
end

def score_list()
    db_params = {
	host: ENV['host'],
	port: ENV['port'],
	dbname: ENV['dbname'],
	user: ENV['user'],
	password: ENV['password']
    }
db = PG::Connection.new(db_params)
scores = db.exec("SELECT * FROM scoreboard")
scores.values
end