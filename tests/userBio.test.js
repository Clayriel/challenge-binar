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
    const username = "akuntuyul";
    const bio = "ini akunnya si anu";
    const user_id = 9;
    const res = await request(app)
      .post("/test/userBio/add")
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
      .send({ username, bio, user_id });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Bio Created!");
  });
});

//user bio update
describe.skip("PUT /test/userBio/update", () => {
  it("Should update data", async () => {
    const username = "akuntuyul";
    const bio = "ini akunnya si tuyul setelah di update";
    const res = await request(app)
      .put("/test/userBio/update")
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
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
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
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
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
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
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Data Deleted!");
      });
  });
});
