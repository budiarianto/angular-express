// module.exports = app => {
//     app.use("/api/customer", require("./api/customer"));
// };

exports.route = app => {
    app.use("/api/customer", require("./api/customer"));
}