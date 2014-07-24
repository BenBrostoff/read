class Book < ActiveRecord::Base

  before_save :sentence_parse

  def sentence_parse
    self.sentences = self.sentence_string.split(".")
  end

end
