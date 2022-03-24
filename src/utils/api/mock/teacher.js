export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 100; i++) {
          data.push({
            no_Enseignant: `${i}`,
            nom: "saliou",
            prenom: "philippe",
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
            nbh_Etd: 40,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
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
          nbh_Etd: 40,
          nbh_Tp: 40,
          nbh_Td: 40,
          nbh_Cm: 40,
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

  getTypes: () =>
    new Promise((resolve, reject) => {
      let data = [];

      for (let i = 0; i < 5; i++) {
        data.push({
          code: "code" + i,
          abreviation: "abrev1" + i,
          signification: "sign1" + i,
        });
      }

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),

  getPays: () =>
    new Promise((resolve, reject) => {
      let data = [];

      for (let i = 0; i < 5; i++) {
        data.push({
          code: "pays" + i,
          abreviation: "pays" + i,
          signification: "pays" + i,
        });
      }

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),

  getSexes: () =>
    new Promise((resolve, reject) => {
      let data = [];
      data.push({
        code: "h",
        abreviation: "H",
        signification: "Homme",
      });
      data.push({
        code: "f",
        abreviation: "F",
        signification: "Femme",
      });

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),
  update: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 1000);
    }),
};
