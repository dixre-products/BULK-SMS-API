/**
 * @api {PUT} /admin/update-employee  Update an employee
 * @apiName UpdateEmployee
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} id id of the employee to be updated
 * @apiParam {Object} updates object that contains updates to be applied.
 * @apiParam {String} [updates.name]  The new employee name.
 * @apiParam {String} [updates.email] employee email address.
 * @apiParam {String} [updates.address] employee address.
 * @apiParam {String} [updates.roleId] employee roleId.
 * @apiParam {String} [updates.groupId] employee groupId.
 * @apiParam {String} [updates.active] employee status true=active and false=inactive
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
            "_id": "61639a7f4245d1f5bc3e120a",
            "name": "ayindexxxxxx21",
            "email": "aaagmai;.com",
            "address": "bbbbb",
            "groupId": "61639a7f4245d1f5bc3e120a",
            "active": true,
            "roleId": "61639a7f4245d1f5bc3e120a",
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
