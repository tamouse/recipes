# Tamara's Online Recipe File

A rather bog-standard jekyll setup, using bootstrap 3.x

## Development

Source files are in the `source/` directory.

From the root dir, run:

    bin/jekyll s --incremental

to run the development server with incremental builds (should be a little faster).

## Deployment

The output files are saved in the `docs/` directory, and this is served up by GitHub Pages.

From the root dir, run:

    bin/jekyll build
	git add -Av ; git commit -m 'MESSAGE' ; git push -u origin master

to create the docs files, commit, and push them up to github.

### TIL

2020-12-20: If you want to run a frontmatter or data item through markdown, you can use the `markdownify` filter, which creates a `<p>` element. If you want to use a different element, you need to strip off the opening and closing tags:

    {{ 'markdonw source' | markdownify | remove: '<p>' | remove: '</p>' }}

If you are using the item inline, and don't want extra spaces around the element, you need to also trim spaces:

    {{ 'markdonw source' | markdownify | remove: '<p>' | remove: '</p>' | lstrip | rstrip }}


See <https://github.com/jekyll/jekyll/issues/3571>, and refer to Liquid filters: <https://jekyllrb.com/docs/liquid/filters/>.
