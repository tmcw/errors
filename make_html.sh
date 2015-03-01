cd types

echo "<h1>error types</h1>" > ../index.html
echo "<ul>" >> ../index.html

for js in *.js; do
    html=`basename $js .js`.html
    echo "<script src=$js></script>" > $html
    echo "<li><a href="types/$html">$html</a></li>" >> ../index.html
done

echo "</ul>" >> ../index.html
