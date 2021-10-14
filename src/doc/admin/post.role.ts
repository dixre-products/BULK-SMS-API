/**
 * @api {POST} /admin/create-role  Create a role
 * @apiName PostRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 * 
 *
 * @apiParam {Boolean} sendMessage can send message.
 * @apiParam {Boolean} readMessage can read message.
 * @apiParam {String} name name of role.
 * @apiParam {Boolean} addContact csn add contact
 *
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  role credentials object
 * @apiSuccess {String} payload._id role ID.
 * @apiSuccess {Boolean} payload.addContact can add contact.
 * @apiSuccess {Boolean} payload.sendMessage can send message.
 * @apiSuccess {Boolean} payload.readMessage can read message.
 * @apiSuccess {String} payload.name role name.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "61676654e1647695f9e14eca",
            "name": "taker",
            "sendMessage": false,
            "readMessage": false,
            "addContact": true,
 *       }
 *     }
 *
 * @apiError sendMessage is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "sendMessage is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * @apiError name is required.
 * @apiErrorExample InvalidCredential
 *     HTTP/1.1 400 Conflict
 *     {
 *       "message": "name is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * @apiError readMessage is required.
 * @apiErrorExample InvalidCredential
 *     HTTP/1.1 400 Conflict
 *     {
 *       "message": "readMessage is required",
         "error": "INVALID.INPUT"
 *     }

          @apiError addContact is required.
 * @apiErrorExample InvalidCredential
 *     HTTP/1.1 400 Conflict
 *     {
 *       "message": "addContact is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * 
 * 
 *
 *
 *
 */
