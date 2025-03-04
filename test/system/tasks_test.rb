require "application_system_test_case"

class TasksTest < ApplicationSystemTestCase
  setup do
    @task = Task.create!(summary: "Test task", due_date: Date.tomorrow)
  end

  test "visiting the index" do
    visit tasks_url

    assert_selector "h1", text: "タスク一覧"
  end

  test "open a modal to create new task" do
    visit tasks_url

    click_on "新規タスク"

    within '.modal' do
      assert_selector "h5", text: "新規タスク作成"

      fill_in '内容', with: 'Buy a milk'
      fill_in '期限', with: Date.tomorrow

      click_on '作成'
    end

    within '#tasks' do
      assert_selector "li", text: "Buy a milk"
    end
  end

  test "editing a task" do
    visit tasks_url

    within "#task_#{@task.id}" do
      click_on @task.summary
    end

    fill_in 'task_summary', with: 'Updated task'
    fill_in 'task_due_date', with: Date.tomorrow + 1.day
    click_on 'Update'

    assert_selector "li", text: "Updated task"
  end

  test "deleting a task" do
    visit tasks_url

    within "#task_#{@task.id}" do
      accept_confirm do
        click_on '削除'
      end
    end

    assert_no_selector "#task_#{@task.id}"
  end

  test "marking a task as completed" do
    visit tasks_url

    within "#task_#{@task.id}" do
      check 'task_completed'
    end

    # Wait for the AJAX request to complete
    sleep 0.5

    # Reload the page to verify the change persisted
    visit tasks_url

    within "#task_#{@task.id}" do
      assert_selector "label.text-decoration-line-through"
      assert_selector "input[type=checkbox][checked]"
    end
  end

  test "progress bar updates when task is completed" do
    # Create another task
    Task.create!(summary: "Another task", due_date: Date.tomorrow)

    visit tasks_url

    # Initially progress bar should be at 0%
    assert_equal "width: 0%;", find(".progress-bar", visible: false)["style"]

    # Mark the first task as completed
    within "#task_#{@task.id}" do
      check 'task_completed'
    end

    # Wait for the AJAX request to complete
    sleep 0.5

    # Progress bar should now be at 50% (1 of 2 tasks completed)
    assert_equal "width: 50%;", find(".progress-bar", visible: false)["style"]
  end
end
