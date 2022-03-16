export default {
  remove: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          code: "OK",
          data: {},
        };
        resolve(data);
      }, 3000);
    }),
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 4; i++) {
          data.push({
            nom_Formation: "MASTER 2 DOSI",
            code_Formation: "M2DOSI",
          });
        }
        resolve(data);
      }, 3000);
    }),
};
