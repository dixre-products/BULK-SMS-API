/**
 * @api {GET} /employee/:id Get a single employee
 * @apiName Get a employee
 * @apiGroup Employee
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} id id of the employee.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  employee object from collection
 * @apiSuccess {String} payload._id employee ID.
 * @apiSuccess {String} payload.name employee name.
 * @apiSuccess {String} payload.email employee email address.
 * @apiSuccess {String} payload.address employee address.
 * @apiSuccess {String} payload.roleId employee roleId.
 * @apiSuccess {String} payload.groupId employee department ID.
 * @apiSuccess {Boolean} payload.active status of employee either true=active and false=inactive
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *        "payload"{
      *      "_id": "61639a7f4245d1f5bc3e120a",
            "name": "ayindexxxxxx21",
            "email": "aaagmai;.com",
            "address": "bbbbb",
            "groupId": "61639a7f4245d1f5bc3e120a",
            "roleId": "61639a7f4245d1f5bc3e120a",
            "active": true
 *       }
 *    }
 *
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
 *
 */
