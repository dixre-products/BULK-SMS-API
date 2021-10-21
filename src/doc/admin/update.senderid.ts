/**
 * @api {PUT} /senderID  Update a role
 * @apiName UpdateSenderID
 * @apiGroup Sender
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} id id of the sender to be updated
 * @apiParam {Object} updates object that contains updates to be applied.
 * @apiParam {String} [updates.name] updated name
 * @apiParam {Array} [updates.senderIds] updated senderIds
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *    {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "sender",
            "senderIds": [],
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
