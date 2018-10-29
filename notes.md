`pandoc -t gfm -o test.md chapter02.xhtml`

At first it seems like pandoc would be easiest to convert all the xhtml into md, but the files are very nicely structured, so it was actually easier to just find & replace to markdown. 

for f in *.xhtml; do mv "$f" "${f%.xhtml}.md"; done
