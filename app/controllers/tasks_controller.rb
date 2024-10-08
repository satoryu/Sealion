class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.create(task_params)

    render :new unless @task.persisted?
  end

  def show
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])

    render :edit unless @task.update(task_params)
  end

  def destroy
    @task = Task.find(params[:id])

    @task.destroy!

    respond_to do |format|
      format.html { redirect_to tasks_path }
      format.turbo_stream
    end
  end

  private

  def task_params
    params.require(:task).permit(:summary, :due_date, :completed)
  end
end
