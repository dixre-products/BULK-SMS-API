import { Document, Types } from 'mongoose';

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

export interface DepartmentProps extends Document {
  credit: number;
  name: string;
  senderIds: any[];
}

export interface EmployeeProps extends Document {
  name: string;
  email: string;
  password: string;
  address: string;
  active: boolean;
  groupId?: Types.ObjectId;
  roleId?: Types.ObjectId;
  hash: string;
  salt: string;

  /* eslint-disable */
  setPassword: (pwd: string) => void;
  validatePassword: (password: string) => boolean;
  /* eslint-enable */
}

export interface EmployeeSignupProps extends Document {
  name: string;
  email: string;
  password: string;
  address: string;
  groupId: string;
  roleId: string;
}

export interface RoleProps extends Document {
  sendMessage: boolean;
  readMessage: boolean;
  name: string;
  addContact: boolean;
}
export interface ContactProps extends Document {
  name: string;
  number: number;
  groupId: Types.ObjectId;
  date: Date;
}

export interface ReportProps extends Document {
  message: string;
  groupId: Types.ObjectId;
  employeeId: Types.ObjectId;
}

export interface SenderIds extends Document {
  name: string;
  senderIds: any[];
}

type payload = {
  name: string;
  email: string;
  phoneNumber: string;
  phoneNumbers: string[];
  message: string;
  id: Types.ObjectId;
  address: string;
  description: string;
  department: string;
  role: string;
};
export interface Activities extends Document {
  group: string;

  user: Types.ObjectId;

  admin: Types.ObjectId;

  userType: string;

  type: string;

  entity: string;

  payload: payload;
  date: any;
}

export interface AdminProps extends Document {
  name: string;
  email: string;
  hash: string;
  salt: string;

  /* eslint-disable */
  setPassword: (pwd: string) => void;
  validatePassword: (password: string) => boolean;
  /* eslint-enable */
}

export interface MessageProps extends Document {
  _id: Types.ObjectId; //eslint-disable-line
  message: string;
  sender: string;
  groupId: Types.ObjectId;
  date: Date;
  contacts: Array<string>;
  time: Date;
  status: string;
  scheduleDate: Date;
}

export interface RequestParams {
  pageNumber: number;
  pageSize: number;
  searchText: string;
  agency: string;
  uid: string;
  role: string;
  status: string;
}
