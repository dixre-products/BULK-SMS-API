/**
 * @api {PUT} /admin/update-employee-role  Assign employee to Role
 * @apiName AssignEmployeeToRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} employeeId id of the employee to be updated
 * @apiParam {String} roleId id of the of the role to be updated
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
            "roleId": "61639a7f4245d1f5bc3e120a",
 *       }
 *     }
 *
 * @apiError roleId is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "roleId is required",
         "error": "INVALID.INPUT"
 *     }
 * @apiError employeeId is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "employeeId is required",
         "error": "INVALID.INPUT"
 *     }
 *
 
 *
 * 
 * 
 *
 *
 *
 */
