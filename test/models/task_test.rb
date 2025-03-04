require "test_helper"

class TaskTest < ActiveSupport::TestCase
  test "must give later than today as due date" do
    assert Task.new(summary: 'Task A', due_date: Date.today).valid?
    assert Task.new(summary: 'Task B', due_date: Date.tomorrow).valid?
  end

  test "must not give earlier than today as due date" do
    task = Task.new(summary: 'Task C', due_date: Date.yesterday)
    assert_not task.valid?
    assert_includes task.errors[:due_date], 'must be later than today'
  end

  test "summary must be present" do
    task = Task.new(due_date: Date.tomorrow)
    assert_not task.valid?
    assert_includes task.errors[:summary], "can't be blank"
  end

  test "completed defaults to false" do
    task = Task.new(summary: 'Task D', due_date: Date.tomorrow)
    assert_equal false, task.completed
  end
end
