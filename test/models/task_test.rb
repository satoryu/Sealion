require "test_helper"

class TaskTest < ActiveSupport::TestCase
  test "must give later than today as due date" do
    assert Task.new(summary: 'Task A', due_date: Date.today).valid?
    assert Task.new(summary: 'Task B', due_date: Date.tomorrow).valid?
  end
end
