function strToParam(str: string) {
  return str.toLowerCase().replace(/ /g, "-");
}

export { strToParam };
