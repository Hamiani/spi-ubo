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
            nomFormation: "MASTER 2 DOSI",
            codeFormation: "M2DOSI",
          });
        }
        resolve(data);
      }, 3000);
    }),
};
