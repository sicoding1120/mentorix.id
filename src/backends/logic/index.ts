import bcrypt from "bcryptjs";

export class useLogic {
  hashingPassword = async (password: string) => {
    if (!password) {
      return;
    } else {
      const salt = 8;
      const hashPassword = await bcrypt.hash(password, salt);
      return hashPassword;
    }
  };

  verifyPassword = async (password: string, hashPassword: string = "") => {
    return await bcrypt.compare(password, hashPassword);
  };

  CreateIdRandom = () => {
    const angka = Math.floor(Math.random() * 9999999) + 1;
    return angka;
  };

  generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (char) {
        var random = (Math.random() * 16) | 0;
        var value = char === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
      }
    );
  };
  validateEmail =(email:string |any) =>  {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
}
