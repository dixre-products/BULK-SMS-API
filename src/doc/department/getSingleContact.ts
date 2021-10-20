/**
 * @api {GET} /department/:id Get a signle department
 * @apiName Get a department
 * @apiGroup Department
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} id id of the department.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  department object from collection
 * @apiSuccess {String} payload._id department ID.
 * @apiSuccess {String} payload.name department name.
 * @apiSuccess {Number} payload.credit number of credit in a department.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "dept",
            "credit": 313,
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
 *
 *
 */
