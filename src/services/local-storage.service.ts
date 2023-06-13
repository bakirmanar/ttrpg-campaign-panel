export const LocalStorageService = {
  get: (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      return null;
    }
  },

  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
}
