/**
 * @api {PUT} /admin/update-role  Update a role
 * @apiName UpdateRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} id id of the admin to be updated
 * @apiParam {Object} updates object that contains updates to be applied.
 * @apiParam {Boolean} [updates.addContact] updated field.
 * @apiParam {Boolean} [updates.sendMessage]  updated field.
 * @apiParam {Boolean} [updates.readMessage]  updated field.
 * @apiParam {String} [updates.name] updated name
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *        "payload"{
 *          "_id": "61676654e1647695f9e14eca",
            "name": "taker",
            "sendMessage": false,
            "readMessage": false,
            "addContact": true,
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
 */
