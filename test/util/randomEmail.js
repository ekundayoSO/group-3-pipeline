const generateRandomEmail = () => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
  const randomString = (length) => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const randomLocalPart = randomString(10);
  const randomDomain = domains[Math.floor(Math.random() * domains.length)]; 

  return `${randomLocalPart}@${randomDomain}`;
}

export default generateRandomEmail;
