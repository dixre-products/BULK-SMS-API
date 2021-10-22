/**
 * @api {GET} /senderID/ Get all senderIDs
 * @apiName Get all senderIDs
 * @apiGroup senderID
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} payload  senderIDs Array
 * @apiSuccess {String} payload._id senderID ID.
 * @apiSuccess {String} payload.name senderID name.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *      "payload":[{
 *          "_id": "6167ec5c549f4c75397eec44",
 *           "name": "Admin",
 *       }]
 *     }
 *
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