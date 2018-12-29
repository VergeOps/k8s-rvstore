echo "Starting nginx"
nginx
echo "Sleeping for 30"
sleep 30 
echo "Removing file" 
rm /usr/share/nginx/html/index.html
nginx -s stop
nginx -g 'daemon off;'