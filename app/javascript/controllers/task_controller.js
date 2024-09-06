import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="task"
export default class extends Controller {
  static targets = ["completed"]

  connect() {
  }

  get completed() {
    return (this.completedTarget.checked)
  }
}
