# Compass configuration file.

# We also support plugins and frameworks, please read the docs http://docs.mixture.io/preprocessors#compass

# Important! change the paths below to match your project setup
css_dir = "public/css" # update to the path of your css files.
sass_dir = "public/css/sass" # update to the path of your sass files.
images_dir = "public/img" # update to the path of your image files.
javascripts_dir = "public/js" # update to the path of your script files.

line_comments = false # if debugging (or using Mixture chrome extension - set this to true)
cache = true
color_output = false # required for Mixture

project_path =File.expand_path("..",File.dirname(__FILE__))