import http from "k6/http";
import { check, sleep } from "k6";

// Test configuration
export const options = {
  thresholds: {
    http_req_duration: ["p(97) < 3000"],
  },
  // Ramp the number of virtual users up and down
  stages: [
    { duration: "2m", target: 200 },
    { duration: "10m", target: 200 },
    { duration: "2m", target: 0 },
  ],
};

// Simulated user behavior
export default function () {
  let res = http.post("http://192.168.221:80/echo");
  // Validate response status
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}