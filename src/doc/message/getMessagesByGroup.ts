/**
 * @api {GET} /message/:id Get all messages belonging to agency
 * @apiName Get all message for an agency
 * @apiGroup Message
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *  
 *  @apiParam {String} id department ID or agency ID .
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
* @apiSuccess {Object} payload  message credentials Array
 * @apiSuccess {String} payload._id message ID.
 * @apiSuccess {Number[]} payload.contacts list of contacts.
 * @apiSuccess {String} payload.message createed message to be sent.
 * @apiSuccess {String} payload.time time created.
 * @apiSuccess {String} payload.date date created.
 * @apiSuccess {String} payload.sender message sender
 * @apiSuccess {String} payload.status current status of the message.
 * @apiSuccess {String} payload.groupId department ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload":[{
 *             "_id": "6167ec5c549f4c75397eec44",
 *              "contacts": [
 *                 0802332323,090323232323,09823233
 *              ],
 *              "_id": "616739af7d36677091c60785",
 *              "time": "2:22",
 *              "date": "20-2-2912",
 *              "message": "asasasas",
 *              "sender": "sassss",
 *              "status": "approved",
 *              "groupId": "61664190dd57d724b1b49c23",,
 *       }]
 *     }
 *
 * @apiError id is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 404 Forbidden
 *     {
 *        "error": "NOT.FOUND",
          "message": "message not found with corresponding department id"
 *     }
 *
 *
 * 
 *
 *
 *
 */
