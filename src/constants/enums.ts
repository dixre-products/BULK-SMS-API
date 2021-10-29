/* eslint-disable */
enum MessageStatus {
  NOT_APPROVED = 'NOT_APPROVED',
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  SENT = 'SENT',
}

export enum Entities {
  MESSAGES = 'MESSAGES',
  CONTACTS = 'CONTACTS',
  ROLES = 'ROLES',
  EMPLOYEES = 'EMPLOYEES',
  SENDERIDS = 'SENDERIDS',
  DEPARTMENTS = 'DEPARTMENTS',
  ADMIN = 'ADMIN',
  REPORTS = 'REPORTS',
}

export enum EntitiesAction {
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  CREATE = 'CREATE',
  LOGIN = 'LOGIN',
}

export enum ACCOUNT_TYPE {
  ADMIN_ACCOUNT = 'ADMIN-ACCOUNT',
  AGENCY_ACCOUNT = 'AGENCY-ACCOUNT',
}

export default MessageStatus;
