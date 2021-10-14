/**
 * @api {POST} /admin/create-employee  Create an Employee
 * @apiName Post Employee
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiParam {String} password Employee password
 * @apiParam {String} name name of department.
 * @apiParam {String} email employee email address.
 * @apiParam {String} address employee address.
 * @apiParam {String} groupId  group Id for employee.
 * @apiParam {String} roleId role Id for employee.
 *
* @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  employee object from collection
 * @apiSuccess {String} payload._id employee ID.
 * @apiSuccess {String} payload.name employee name.
 * @apiSuccess {String} payload.email employee email address.
 * @apiSuccess {String} payload.address employee address.
 * @apiSuccess {String} payload.roleId employee roleId.
 * @apiSuccess {String} payload.groupId employee department ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *      "payload"{
            "_id": "61639a7f4245d1f5bc3e120a",
            "name": "ayindexxxxxx21",
            "email": "aaagmai;.com",
            "address": "bbbbb",
            "groupId": "61639a7f4245d1f5bc3e120a",
            "roleId": "61639a7f4245d1f5bc3e120a",
 *       }
 *     }
 *
 * @apiError email is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "email is required",
         "error": "INVALID.INPUT"
 *     }

         
 * @apiError name is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "message": "name is required",
         "error": "INVALID.INPUT"
 *     }
 *
 *  @apiError password is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "message": "password is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * 
 * 
 *
 *
 *
 */
