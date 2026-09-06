FROM nginx:alpine
COPY ["klien website/Botaney/site/", "/usr/share/nginx/html/"]
EXPOSE 80
