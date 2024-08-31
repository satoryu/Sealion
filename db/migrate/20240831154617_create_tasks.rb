class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.text :summary
      t.date :due_date

      t.timestamps
    end
  end
end
