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
  };
  