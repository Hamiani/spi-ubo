export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 100; i++) {
          data.push({
            no_Enseignant: `${i}`,
            nom: "SALIOU",
            prenom: "Philippe",
            sexe: "H",
            type: "PRAG",
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "philippe.saliou@gmail.com",
            email_Ubo: "philippe.saliou@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
          });
        }
        resolve(data);
      }, 1000);
    }),
  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          no_Enseignant: 1,
          nom: `SALIOU`,
          prenom: `Philippe`,
          sexe: "H",
          type: "PRAG",
          pays: "FR",
          ville: "Brest",
          adresse: "Adresse Brest",
          email_Perso: `philippe.saliou@gmail.com`,
          email_Ubo: `philippe.saliou@univ_brest.com`,
          mobile: "+33 7 43 34 25 76",
          telephone: "+33 6 32 00 85 19",
          code_Postal: "29 200",
        });
      }, 1000);
    }),

  create: (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      setTimeout(() => {
        data = {
          ...data,
          code: "OK",
        };
        resolve(data);
      }, 3000);
    }),

  remove: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 1000);
    }),
};
