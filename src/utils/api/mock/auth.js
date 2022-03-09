export default {
  register: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          code: "OK",
          data: {},
        };
        reject('une erreur est survenue');
      }, 3000);
    }),
};
