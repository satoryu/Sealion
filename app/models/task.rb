class Task < ApplicationRecord
  validates :summary, presence: true
end
