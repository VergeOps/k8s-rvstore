echo "Starting nginx"
nginx
echo "Sleeping"
#sleep 30 
sleep $((30 + RANDOM % 60))
echo "Removing file" 
rm /usr/share/nginx/html/index.html
nginx -s stop
nginx -g 'daemon off;'