import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { Settings } from '../../Types/interfaces';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function UpdateSettings(
  req: Request,
  res: Response,
) {
  const { updates } = req.body as {
    updates: Settings;
  };

  const getDoc = await models.Settings.findOne({});

  if (!getDoc) {
    const createSettins = new models.Settings({
      maximumReloadThreshold: 0,
      minimumReloadThreshold: 0,
    });

    await createSettins.save({ validateBeforeSave: false });
  }

  const doc = await models.Contact.findOneAndUpdate(
    { _id: getDoc?._id }, // eslint-disable-line
    updates,
    { new: true },
  );

  // ACTIVITY LOGGER
  // ============================

  const Activity = new models.Activities({
    group: res.locals.groupId,
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.SETTINGS,
    type: EntitiesAction.UPDATE,
    description: 'Settings updated successfully',
    payload: {
      name: doc?.name,
      id: doc?._id, // eslint-disable-line
    },
    date: new Date(),
  });

  await Activity.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, doc);
}
