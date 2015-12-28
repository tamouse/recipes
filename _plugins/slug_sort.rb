# Sort the site posts by slug instead of date
module Jekyll
  module SlugSort

    def slug_sort(posts)
      $stderr.puts "in #{__method__}, WWOOOOPPPS!! This collection is empty! #{posts.inspect}" if posts.nil?
      return if posts.nil?
      slug_sorted_posts = posts.sort{|a,b| a.data["title"] <=> b.data["title"] }
      slug_sorted_posts
    end

  end
end

Liquid::Template.register_filter(Jekyll::SlugSort)
