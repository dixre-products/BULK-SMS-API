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
}

export enum EntitiesAction {
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  CREATE = 'CREATE',
}

export default MessageStatus;
