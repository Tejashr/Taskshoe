const { Router } = require("express");
const SqlString = require("sqlstring");
const async = require("async");
const data = require("./data.json");
const pool = require("../db/db");
module.exports = () => {
  const task = Router();

  //Bulk adding the details
  task.post("/bulk_add_details", (req, res) => {
    async.eachSeries(
      data,
      (dataOne, cb) => {
        const myQuery = SqlString.format("INSERT INTO ?? SET ?", [
          "product",
          dataOne,
        ]);
        pool.query(myQuery, (error, user_data) => {
          if (error) {
            console.log(error);
          } else {
            if (user_data) {
              console.log(user_data);
              cb();
            } else {
              cb();
            }
          }
        });
      },
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).json({
            error: false,
            message: "success",
          });
        }
      }
    );
  });

  //getting all details of all product
  task.get("/get_details", (req, res) => {
    pool.query(`SELECT * FROM product;`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          error: false,
          details: data,
        });
      }
    });
  });

  //getting all details of product by id
  task.get("/get_details_by_id/:id", (req, res) => {
    let { id } = req.params;
    pool.query(`SELECT * FROM product where id = ?;`, [id], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          error: false,
          details: data,
        });
      }
    });
  });
  return task;
};
