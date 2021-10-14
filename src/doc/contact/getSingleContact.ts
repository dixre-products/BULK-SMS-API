/**
 * @api {GET} /contact/:id Get a contact
 * @apiName Get a contact
 * @apiGroup Contact
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} id id of the user.
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
* @apiSuccess {Object} payload  contact credentials object
 * @apiSuccess {String} payload._id contact ID.
 * @apiSuccess {String} payload.name contact name.
 * @apiSuccess {String} payload.date created date.
 * @apiSuccess {String} payload.number contact number.
 * @apiSuccess {String} payload.groupId department ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *      "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "Admin",
            "date": "20-20-2020",
            "number": "13333313313",
             "groupId": "6167f6840780a4b379baa4f5",
 *       }
 *     }
 *
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "error": "NOT.FOUND",
          "message": "Contact not found with corresponding id"
 *     }
 *
 *
 * 
 *
 *
 *
 */
