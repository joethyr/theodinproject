class NavLinkComponent < ViewComponent::Base
  def initialize(path:, link_text:, icon_path: nil, mobile: false)
    @path = path
    @link_text = link_text
    @icon_path = icon_path
    @mobile = mobile
  end

  def active?
    current_page?(path)
  end

  private

  attr_reader :path, :link_text, :icon_path, :mobile
end
