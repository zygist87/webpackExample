function timestamp(date = '') {
  return date ? new Date(date).getTime() : Date.now();
}

export default timestamp;
