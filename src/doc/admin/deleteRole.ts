/**
 * @api {DELETE} /admin/delete-role/:id Delete a role
 * @apiName Delete a role
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} id id of the contact.
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
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "error": "NOT.FOUND",
          "message": "Contact not found with corresponding id"
 *     }
 *
 *
 * 
 *
 *
 *
 */
