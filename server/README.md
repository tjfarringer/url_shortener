Deploying: 



APP_NAME="url-shortener-farringer-test"
echo "Deploying to ${APP_NAME}"

heroku container:push web --app ${APP_NAME}

heroku container:release web --app ${APP_NAME}
heroku open --app ${APP_NAME}
heroku logs --tail --app ${APP_NAME}