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
          });
        }
        resolve(data);
      }, 1000);
    }),
  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let ues_ = [];
        for (let i = 0; i < 10; i++) {
          ues_.push({
            code_Formation: `formation ${i + 1}`,
            code_Ue: `code ue ${i + 1}`,
            designation: `Désignation`,
            semestre: "semestre 1",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            nbh_Cm: 10,
            nbh_Td: 22,
            nbh_Tp: 22,
            nbh_Etd: 45,
          });
        }
        resolve({
          no_Enseignant: 1,
          nom: `SAIOU`,
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
          ues: ues_,
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
