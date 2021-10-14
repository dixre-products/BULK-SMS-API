/**
 * @api {GET} /admin/:id  Get a Admin
 * @apiName GetAdmin
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  @apiParam {String} id id of the admin.

 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  admin object from collection
 * @apiSuccess {String} payload._id admin ID.
 * @apiSuccess {String} payload.name admin name.
 * @apiSuccess {String} payload.email admin email address.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "Admin",
            "email": "admin@gmail.com",
 *       }
 *     }
 *
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "error": "NOT.FOUND",
          "message": "Admin not found with corresponding id"
 *     }
 *
 *
 * 
 * 
 *
 *
 *
 */
