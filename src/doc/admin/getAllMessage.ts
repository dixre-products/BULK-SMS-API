/**
 * @api {GET} /admin/get-message Get All message
 * @apiName GetAllMessage
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} array Array of message object from collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
   *        "contacts": [
                0802332323,090323232323,09823233
            ],
            "_id": "616739af7d36677091c60785",
            "time": "2:22",
            "date": "20-2-2912",
            "message": "asasasas",
            "sender": "sassss",
            "status": "approved",
            "groupId": "61664190dd57d724b1b49c23",,
 *       },{
            "contacts": [
                0802332323,090323232323,09823233
            ],
            "_id": "616739af7d36677091c60785",
            "time": "2:22",
            "date": "20-2-2912",
            "message": "asasasas",
            "sender": "sassss",
            "status": "approved",
            "groupId": "61664190dd57d724b1b49c23",,
 *       }
         ]
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
 */
