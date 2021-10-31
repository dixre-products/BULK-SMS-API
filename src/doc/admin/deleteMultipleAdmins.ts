/**
 * @api {DELETE} /admin/delete-admins Delete multiple admin 
 * @apiName Delete multiple admins
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 * @apiParam {String} adminIds Array of admin ids to be deleted.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  admin credentials object
 * @apiSuccess {Number} payload.deletedCount number of items deleted.
 * @apiSuccess {Number} payload.ok 
 * @apiSuccess {Number} payload.n 
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
            "n": 1,
            "ok": 1,
             "deletedCount": 2,
            
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