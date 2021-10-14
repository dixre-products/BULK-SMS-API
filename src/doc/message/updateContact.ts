/**
 * @api {PUT} /message  Update a message
 * @apiName Updatemessage
 * @apiGroup Message
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 *
 * @apiParam {String} id id of the message to be updated
 * @apiParam {Object} updates object that contains updates to be applied.
 * @apiParam {String} [updates.contacts]  The new contacts lists.
 * @apiParam {String} [updates.message]  The new createed message to be sent.
 * @apiParam {String} [updates.time] The new time.
 * @apiParam {String} [updates.date] updated date
 * @apiParam {String} [updates.sender] updated sender
 * @apiParam {String} [updates.status] updated status of the message.
 * @apiParam {String} [updates.groupId] The new department ID
 *  
 * 
 *  @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  message credentials object
 * @apiSuccess {String} payload._id message ID.
 * @apiSuccess {Number[]} payload.contacts list of contacts.
 * @apiSuccess {String} payload.message createed message to be sent.
 * @apiSuccess {String} payload.time time created.
 * @apiSuccess {String} payload.date date created.
 * @apiSuccess {String} payload.sender message sender
 * @apiSuccess {String} payload.status current status of the message.
 * @apiSuccess {String} payload.groupId department ID.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *      "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
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
