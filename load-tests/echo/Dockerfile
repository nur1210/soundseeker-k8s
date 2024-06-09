# Start from the k6 image
FROM grafana/k6:latest

COPY ./load-test-echo.js /load-test-echo.js

CMD ["k6", "run", "./load-test-echo.js"]