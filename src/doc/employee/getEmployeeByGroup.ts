/**
 * @api {GET} /employee/all/:groupId Get all employees belonging to a group or agency
 * @apiName Get employees by group or agency
 * @apiGroup Employee
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} groupId id of the employees group.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  employee Array of all employees from an agency or department
 * @apiSuccess {String} payload._id employee ID.
 * @apiSuccess {String} payload.name employee name.
 * @apiSuccess {String} payload.email employee email address.
 * @apiSuccess {String} payload.address employee address.
 * @apiSuccess {String} payload.roleId employee roleId.
 * @apiSuccess {String} payload.groupId employee department ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *        "payload":[{
 *      "_id": "61639a7f4245d1f5bc3e120a",
 *           "name": "ayindexxxxxx21",
 *           "email": "aaagmai;.com",
 *           "address": "bbbbb",
 *           "groupId": "61639a7f4245d1f5bc3e120a",
 *           "roleId": "61639a7f4245d1f5bc3e120a",
 *       }]
 *    }
 *
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "error": "NOT.FOUND",
          "message": "department not found with corresponding id"
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
