const { Router } = require("express");
const get = require("./get");
const post = require("./post");
const deleteOperation = require("./delete");
const update = require("./update");
const router = Router();

router.use("/get", get);
router.use("/post", post);
router.use("/delete", deleteOperation);
router.use("/update", update);

module.exports = router;
