class Book < ActiveRecord::Base

  before_save :sentence_parse
  serialize :sentences

  def sentence_parse
    self.sentences = self.sentence_string.split(".")
  end

end
