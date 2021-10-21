/**
 * @api {DELETE} /senderID/:id Delete a sender 
 * @apiName Delete a sender
 * @apiGroup Sender
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 * @apiParam {String} id id of the sender.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  sender credentials object
 * @apiSuccess {String} payload.name sender name.
 * @apiSuccess {String} payload.senderIds array of sender ids.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "61676654e1647695f9e14eca",
            "name": "taker",
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
 */
