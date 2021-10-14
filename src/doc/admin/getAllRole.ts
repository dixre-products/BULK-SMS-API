/**
 * @api {GET} /admin/get-role Get All Role
 * @apiName GetAllRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} array Array of role object from collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
   *        {
   *           "_id": "61676654e1647695f9e14eca",
              "name": "taker",
              "sendMessage": false,
              "readMessage": false,
              "addContact": true,
   *        },
            {
   *           "_id": "61676654e1647695f9e14eca",
              "name": "taker",
              "sendMessage": false,
              "readMessage": false,
              "addContact": true,
   *        }
         ]
 *     }
 *
  * 
 *
 *
 *
 */
