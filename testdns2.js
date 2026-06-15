import dns from "dns/promises";

try {
  const result = await dns.lookup("google.com");
  console.log(result);
} catch (err) {
  console.error(err);
}