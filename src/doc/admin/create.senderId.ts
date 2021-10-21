/**
 * @api {POST} /senderID Create an Admin
 * @apiName PostSender
 * @apiGroup Sender
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiParam {String} name of sender.
 * @apiParam {Array} senderIds IDs of the sender.
 *
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  senderIds credentials object
 * @apiSuccess {String} payload.name  name of sender.
 * @apiSuccess {String} payload.senderIds IDs of the senders.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "sender",
            "senderIds": [],
 *       }
 *     }
 *
 * 
 * 
 * @apiError Invalid Input
 * @apiErrorExample Invalid-Input:
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
