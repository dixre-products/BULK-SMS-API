/**
 * @api {GET} /admin/get-role/:id  Get a role
 * @apiName GetRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  @apiParam {String} id id of the role.

 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  admin object from collection
 * @apiSuccess {String} payload._id role ID.
 * @apiSuccess {Boolean} payload.addContact can add contact.
 * @apiSuccess {Boolean} payload.sendMessage can send message.
 * @apiSuccess {Boolean} payload.readMessage can read message.
 * @apiSuccess {String} payload.name role name
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "Admin",
            "email": "admin@gmail.com",
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
