const { Collection, Header, Item } = require("postman-collection");
const fs = require("fs");

// Create Collection
const postmanCollection = new Collection({
  info: {
    name: "Dokumentasi RESTful API Challenge-04",
  },
  item: [],
});

// Set Header

// const rawHeaderString =
//   "Authorization:\nContent-Type:application/json\ncache-control:no-cache";

// const rawHeader = Header.parse(rawHeaderString);

// const requestHeader = rawHeader.map((h) => new Header(h));

// Add test for Request

const requestTest = `
            pm.test("Sample Test: test for successful response", ()=>{
                pm.expect(pm.response.code).to.equal(200)
            })`;

// Request Create User
const pmRequestCreateUser = new Item({
  name: "Create User - auth",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/auth",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        email: "clayriel@gmail.com",
        username: "clayriel",
        password: "root",
      }),
    },
    auth: null,
  },
});

//Request Login User
const pmRequestLoginUser = new Item({
  name: "Login - auth",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/auth/login",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        email: "clayriel@gmail.com",
        password: "root",
      }),
    },
    auth: null,
  },
});

//Request Create Bio
const pmRequestCreateBio = new Item({
  name: "Create User Bio - UserBio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/userBio",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        bio: "ini bio Clayriel",
      }),
    },
    auth: null,
  },
});

//Request Get all user bio
const pmRequestGetAllBio = new Item({
  name: "Get All Bio - UserBio",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/userBio/all",
    method: "GET",
    auth: null,
  },
});

//Request get user's bio by ID
const pmRequestGetUserBio = new Item({
  name: "Get User Bio - UserBio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/userBio/4",
    method: "GET",
    auth: null,
  },
});

//Request update user bio

const pmRequestUpdateUserBio = new Item({
  name: "Update User Bio - UserBio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/userBio/",
    method: "PUT",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        bio: "ini bio Clayriel setelah jadi top global :)) ",
      }),
    },
    auth: null,
  },
});

// Request Delete user bio

const pmRequestDeleteUserBio = new Item({
  name: "Delete User Bio - UserBio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/userBio",
    method: "DELETE",
    auth: null,
  },
});

//Request Create History

const pmRequestCreateUserHistory = new Item({
  name: "Create User History - UserHistory",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/history",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        score: 100000,
      }),
    },
    auth: null,
  },
});

// Request Get all History

const pmRequestGetAllHistory = new Item({
  name: "Get All User History - UserHistory",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/history/all",
    method: "GET",
    auth: null,
  },
});

//Request History by user ID

const pmRequestGetUserHistory = new Item({
  name: "Get User History - UserHistory",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjbGF5cmllbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsYXlyaWVsIiwiaWF0IjoxNjY1MDcwMDYxfQ    .dxfOV4gU58GrfL8BxueHOm27ZEH9L0jbWmVQPO_sboQ",
    },
    url: "http://localhost:3000/history/1",
    method: "GET",
    auth: null,
  },
});

postmanCollection.items.add(pmRequestCreateUser);
postmanCollection.items.add(pmRequestLoginUser);
postmanCollection.items.add(pmRequestCreateBio);
postmanCollection.items.add(pmRequestGetUserBio);
postmanCollection.items.add(pmRequestGetAllBio);
postmanCollection.items.add(pmRequestUpdateUserBio);
postmanCollection.items.add(pmRequestDeleteUserBio);
postmanCollection.items.add(pmRequestCreateUserHistory);
postmanCollection.items.add(pmRequestGetUserHistory);
postmanCollection.items.add(pmRequestGetAllHistory);

// convert to json
const collectionJSON = postmanCollection.toJSON();

// Export to File
fs.writeFile("./collection.json", JSON.stringify(collectionJSON), (err) => {
  if (err) {
    console.log("file saved");
  }
});
