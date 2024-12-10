# frozen_string_literal: true

# This line ensures all necessary test helpers are loaded
require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get home' do
    get root_url
    assert_response :success
  end
end
