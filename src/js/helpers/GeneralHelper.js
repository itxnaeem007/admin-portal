/*
    General Helper
*/

export function isSessionExpire(error) {
  if (error?.response?.status === 401) {
    return true;
  }
  return false
}
