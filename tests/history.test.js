const request = require("supertest");
const app = require("../app");

//create history
describe.skip("POST /test/history/add", () => {
  it("Should create data", async () => {
    const username = "clayrish";
    const score = 1000;
    const user_id = 7;
    const res = await request(app)
      .post("/test/history/add")
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
      .send({ username, score, user_id });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Score Added!");
  });
});

//get all history
describe.skip("GET /test/history/all", () => {
  it("Should get all data", async () => {
    const res = await request(app)
      .get("/test/history/all")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("success get all user Score");
      });
  });
});

//get user history
describe.only("GET /test/history/4", () => {
  it("Should get data", async () => {
    await request(app)
      .get("/test/history/4")
      .set({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJha3VudHV5dWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJha3VudHV5dWwiLCJpYXQiOjE2NjYzMjI0MzR9.stkopYJv3m8hD2xNFG8ToeRdU8N4T6-nS9I4N2VS0Yk",
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Succes get user history");
      });
  });
});
