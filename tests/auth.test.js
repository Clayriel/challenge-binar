const request = require("supertest");
const app = require("../app");

// auth create
describe.skip("POST /test/auth", () => {
  it("Should create data", async () => {
    const email = "akuntuyul@gmail.com";
    const username = "akuntuyul";
    const password = "root";
    const res = await request(app)
      .post("/test/auth")
      .send({ email, username, password });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("User Created!");
  });
});

//auth login
describe.skip("POST /test/auth/login", () => {
  it("Should create data", async () => {
    const email = "akuntuyul@gmail.com";
    const password = "root";
    const res = await request(app)
      .post("/test/auth/login")
      .send({ email, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Success Login");
    console.log(res.body.data);
  });
});
