/**
 * @api {GET} /admin/get-role Get All Role
 * @apiName GetAllRole
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * 
 * 
 *  @apiParam {Number} pageNumber number of pages.
 * @apiParam {Number} pageSize number of date to query.
 * @apiParam {Object} filter object that contain query parameters
 * @apiParam {String} [filter.searchText] search text.
 * @apiParam {String} [filter.agency] group id.
 * @apiParam {String} [filter.uid] user ID.
 * @apiParam {String} [filter.role] Role Id.
 *
 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} payload Array of role object from collection
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
         ],
         "totalDoc": 2,
          "totalPages": 1
 *     },
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
