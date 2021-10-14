/**
 * @api {PUT} /admin/add-credit  Update department credit
 * @apiName UpdateDepartmentCredit
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} id id of the department to be updated
  * @apiParam {Number} [updates.credit] number of updated credit
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "dept",
            "credit": 22,
 *       }
 *     }
 *
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "id is required",
         "error": "INVALID.INPUT"
 *     }
 *
 
 *
 * 
 * 
 *
 *
 *
 */
