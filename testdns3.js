import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dns.resolveSrv(
  "_mongodb._tcp.cluster0.vca7gok.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);