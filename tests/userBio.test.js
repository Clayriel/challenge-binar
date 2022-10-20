const request = require("supertest");
const app = require("../app");

// user bio index
describe.skip("GET /test/userBio", () => {
  it("Should get all data", async () => {
    const res = await request(app)
      .get("/test/userBio")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Success Get All Data");
      });
  });
});

//create user bio
describe.skip("POST /test/userBio/add", () => {
  it("Should create data", async () => {
    const username = "tuyul";
    const bio = "ini akunnya si anu";
    const user_id = 8;
    const res = await request(app)
      .post("/test/userBio/add")
      .send({ username, bio, user_id });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Bio Created!");
  });
});

//user bio update
describe.skip("PUT /test/userBio/update", () => {
  it("Should update data", async () => {
    const username = "tuyul";
    const bio = "ini akunnya si tuyul";
    const res = await request(app)
      .post("/test/userBio/update")
      .send({ username, bio });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Bio Updated");
  });
});

//user bio detail
describe.skip("GET /test/userBio/8", () => {
  it("Should get data", async () => {
    const res = await request(app)
      .get("/test/userBio/8")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Success Get Data");
      });
  });
});

//test user bio detail false input
describe.skip("GET /test/userBio/4", () => {
  it("Should get data", async () => {
    const res = await request(app)
      .get("/test/userBio/4")
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.status).toBe(false);
        expect(res.body.message).toBe("User not Found");
      });
  });
});

//user bio delete
describe.skip("DELETE /test/userBio/delete/8", () => {
  it("Should delete data", async () => {
    const res = await request(app)
      .delete("/test/userBio/delete/8")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Data Deleted!");
      });
  });
});
