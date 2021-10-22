/**
 * @api {POST} /admin/create-department  Create a department
 * @apiName Post department
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiParam {Number} credit number of credit 
 * @apiParam {String} name name of department.
 * 
 *
* @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  department object from collection
 * @apiSuccess {String} payload._id department ID.
 * @apiSuccess {String} payload.name department name.
 * @apiSuccess {Number} payload.credit number of credit in a department
 * @apiSuccess {Array}  payload.senderIds senderids of department
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "dept",
            "credit": 13,
 *       }
 *     }
 *
 * @apiError Invalid Input
 * @apiErrorExample InvalidInput:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "reason for invalid Input",
         "error": "INVALID.INPUT"
 *     }
 *
 * 
 * @apiError ServerError Internal server error.
 * @apiErrorExample Internal-Server-Error:
 *     HTTP/1.1 500 Internal server error
 *     {
 *        "error": "SERVER.ERROR",
 *        "mesage": "describes reason for error"
 *     }
 *
 * 
 * 
 *
 *
 *
 */