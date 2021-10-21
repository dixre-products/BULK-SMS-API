/**
 * @api {GET} /admin/get-employee  Get All Employee
 * @apiName GetAllEmployee
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
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
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} payload Array of Employee object from collection
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
 *            {
                "_id": "61639a7f4245d1f5bc3e120a",
                "name": "ayindexxxxxx21",
                "email": "aaagmai;.com",
                "address": "bbbbb",
                "groupId": "61639a7f4245d1f5bc3e120a",
                "roleId": "61639a7f4245d1f5bc3e120a",
                "active": true
              },
               {
                "_id": "61639a7f4245d1f5bc3e120a",
                "name": "ayindexxxxxx21",
                "email": "aaagmai;.com",
                "address": "bbbbb",
                "groupId": "61639a7f4245d1f5bc3e120a",
                "roleId": "61639a7f4245d1f5bc3e120a",
                "active": false
              },
        ],
        "totalDoc": 2,
          "totalPages": 1
 *   }
 
 *
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
 */
