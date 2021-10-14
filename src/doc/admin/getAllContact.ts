/**
 * @api {GET} /admin/get-contact  Get All Contact
 * @apiName GetAllContact
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} array Array of contact object from collection
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
 *       {
 *          "_id": "6166f790a3018e4c61aa7b39",
            "name": "contact1",
            "groupId": "6166f790a3018e4c61aa7b38",
 *       },
         {
 *          "_id": "6166f790a3018e4c61aa7b39",
            "name": "contact1",
            "groupId": "6166f790a3018e4c61aa7b38",
 *       }
       ]
 *   }
 
 *
 * 
 * 
 *
 *
 *
 */
