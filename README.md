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

