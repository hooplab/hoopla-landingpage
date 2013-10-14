###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

with_layout :main_layout do
  page "/*"
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'www.hoopladev.no'
  s3_sync.region                = 'eu-west-1'
  s3_sync.delete                = true
  s3_sync.after_build           = false
  s3_sync.prefer_gzip           = true
end


# Guide files
 proxy "guide/index.html", "guide.html", :locals => { :steps => [0] }
 proxy "guide/intro.html", "guide.html", :locals => { :steps => [0] }
 proxy "guide/guidetest.html", "guide.html", :locals => { :steps => [1, 2, 3] }

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end



set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :livereload

activate :directory_indexes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Gzip
  activate :gzip

  # Minify Javascript on build
  activate :minify_javascript

  #Image Optim
  # activate :image_optim

  #Html minify
  activate :minify_html

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
