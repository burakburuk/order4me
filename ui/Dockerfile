# stage: building image in docker image
FROM node:12.18-alpine as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - serve the production build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]