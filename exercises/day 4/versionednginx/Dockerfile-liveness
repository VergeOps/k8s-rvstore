FROM nginx

COPY index-liveness.html /usr/share/nginx/html/index.html
COPY liveness-start.sh /

CMD sh /liveness-start.sh