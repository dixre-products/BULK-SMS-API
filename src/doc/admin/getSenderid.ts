/**
 * @api {GET} /senderID/ Get All sender IDs
 * @apiName GetAllSenderIds
 * @apiGroup Sender
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * 
 * 
 * @apiParam {Number} pageNumber number of pages.
 * @apiParam {Number} pageSize number of date to query.
 * @apiParam {String} [searchText] search text.
 * @apiParam {String} [agency] group id.
 * @apiParam {String} [uid] user ID.
 * @apiParam {String} [role] Role Id.
 *
 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} payload Array of senderID object from collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
   *        {
   *           "_id": "61676654e1647695f9e14eca",
              "name": "senderNAme",
              senderIds:[]
   *        },
            {
   *           "_id": "61676654e1647695f9e14eca",
              "name": "senderName",
              senderIds:[]
   *        },
         ],
         "totalDoc": 2,
          "totalPages": 1
 *     }
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