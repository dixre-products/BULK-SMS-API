import { Document } from 'mongoose';

/**
 * `thumbnail`  image thumbnail
 *
 *  `url`  image thumbnail
 */
type photo = {
  thumbnail: string;
  url: string;
};

/**
 * `coordinates` [-109, 41]  longitude and latitude respectively
 *
 */
interface coordinates {
  coordinates: number[];
}

export type SignUpProps = {
  firstName: string;

  lastName: string;

  phoneNumber: string;

  sex: 'male' | 'female';

  password: string;

  countryCode: string;
};

export type loginProps = {
  phoneNumber: string;

  password: string;

  countryCode: string;
};

export interface UserProps extends Document {
  userId: string;

  firstName: string;

  lastName: string;

  phoneNumber: string;

  localPhoneNumber: string;

  email: string;

  sex: 'male' | 'female';

  bio: string;

  showPhoneNumber: boolean;

  showEmail: string;

  avatar: photo;

  coverPhoto: photo;

  address: string;

  addressCoords: coordinates;

  businessAddressCoords: coordinates;

  businessAddress: string;

  businessAddressDescription: string;

  businessPhotos: photo[];

  hash: string;

  isVerified: boolean;
  salt: string;

  loginAttempts: number;
  attemptsDuration: any;
  tillUnlocked: any;

  /* eslint-disable */
  setPassword: (pwd: string) => void;
  setSex: (sex: string) => void;
  validatePassword: (pwd: string) => boolean;
  isAccountLocked: () => boolean;
  lockAccount: () => void;
  /* eslint-enable */
}
