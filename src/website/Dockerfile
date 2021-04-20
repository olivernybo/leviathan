# docker build --no-cache -t olivernybo/leviathan-website .
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/website /usr/share/nginx/html
