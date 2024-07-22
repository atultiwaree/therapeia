export const validEmail = email => {
  const regex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+');
  return regex.test(email);
};
