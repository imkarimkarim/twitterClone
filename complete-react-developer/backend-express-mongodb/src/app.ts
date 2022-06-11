import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_HOST_DOCKER);

import express from "express";

import cors from "cors";

import mongoose from "mongoose";

import adminRoute from "./routes/Admin";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/", adminRoute);

const port = process.env.PORT || 8080;

mongoose

  // Use DB_HOST_DOCKER to connect to the MongoDB Database in the Docker Container

  .connect(`${process.env.DB_HOST_DOCKER}`)

  .then(() => {
    app.listen(port, () =>
      console.log(
        `Server and database running on port ${port}, http://localhost:${port}`
      )
    );
  })

  .catch((err: any) => {
    console.log(err);
  });
