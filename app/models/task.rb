class Task < ApplicationRecord
  validates :summary, presence: true
  validate :due_date_later_than_today

  private

  def due_date_later_than_today
    if due_date.present? && due_date < Date.today
      errors.add(:due_date, 'must be later than today')
    end
  end
end
