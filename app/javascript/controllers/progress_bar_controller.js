import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="progress-bar"
export default class extends Controller {
  static targets = ["progressBar"]
  static outlets = ["task"]

  connect() {
    console.log(this.taskOutlets.length)
    this.updateProgressBar()
  }

  updateProgressBar() {
    const tasks = this.taskOutlets.length
    const completedTasks = this.taskOutlets.filter(outlet => outlet.completed).length
    const progress = Math.round(completedTasks / tasks * 100)
    this.progressBarTarget.style.width = `${progress}%`
  }

  taskOutletConnected() {
    this.updateProgressBar()
  }

  taskOutletDisconnected() {
    console.log("task outlet disconnected")
    this.updateProgressBar()
  }
}
