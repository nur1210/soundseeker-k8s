# Start from the k6 image
FROM grafana/k6:latest

COPY . .

CMD ["k6", "run", "./load-test-echo.js"]