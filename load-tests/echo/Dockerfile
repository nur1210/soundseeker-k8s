# Start from the k6 image
FROM grafana/k6:latest

# Set the working directory in the container
WORKDIR /app

# Copy the directory contents into the container at /app
COPY . /app

# Run the load test
CMD ["run", "/app/load-test-echo.js"]