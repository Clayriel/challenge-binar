const request = require("supertest");
const app = require("../app");

//create history
describe.skip("POST /test/history/add", () => {
  it("Should create data", async () => {
    const username = "clayriel";
    const score = 1000;
    const user_id = 4;
    const res = await request(app)
      .post("/test/history/add")
      .send({ username, score, user_id });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("Score Added!");
  });
});

//get all history
describe("GET /test/history/all", () => {
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
    const res = await request(app)
      .get("/test/history/4")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe(true);
        expect(res.body.message).toBe("Succes get user history");
      });
  });
});
