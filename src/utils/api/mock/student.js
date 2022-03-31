export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 20; i++) {
          data.push({
            no_Etudiant: `${i + 1}`,
            code_Formation: `formation`,
            annee_Universitaire: "2021-2022",
            nom: `NOM ${i + 1}`,
            prenom: `Prenom ${i + 1}`,
            sexe: "x",
            date_Naissance: "string",
            lieu_Naissance: "string",
            nationalite: "string",
            telephone: "string",
            mobile: "string",
            email: "string",
            email_Ubo: "string",
            adresse: "string",
            code_Postal: "string",
            ville: "string",
            pays_Origine: "string",
            universite_Origine: "string",
            groupe_Tp: 0,
            groupe_Anglais: 0,
          });
        }
        resolve(data);
      }, 1000);
    }),
  getByPromotion: (codeFormation, anneeUniv) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 20; i++) {
          data.push({
            no_Etudiant: `${i + 1}`,
            code_Formation: `formation`,
            annee_Universitaire: "2021-2022",
            nom: `NOM ${i + 1}`,
            prenom: `Prenom ${i + 1}`,
            sexe: "x",
            date_Naissance: "string",
            lieu_Naissance: "string",
            nationalite: "string",
            telephone: "string",
            mobile: "string",
            email: "string",
            email_Ubo: "string",
            adresse: "string",
            code_Postal: "string",
            ville: "string",
            pays_Origine: "string",
            universite_Origine: "string",
            groupe_Tp: 0,
            groupe_Anglais: 0,
          });
        }
        resolve(data);
      }, 1000);
    }),

  getOne: (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          no_Etudiant: "string",
          code_Formation: "string",
          annee_Universitaire: "string",
          nom: "string",
          prenom: "string",
          sexe: "string",
          date_Naissance: "string",
          lieu_Naissance: "string",
          nationalite: "string",
          telephone: "string",
          mobile: "string",
          email: "string",
          email_Ubo: "string",
          adresse: "string",
          code_Postal: "string",
          ville: "string",
          pays_Origine: "string",
          universite_Origine: "string",
          groupe_Tp: 0,
          groupe_Anglais: 0,
        });
      }, 1000);
    }),

  create: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        data = {
          ...data,
          code: "OK",
        };
        resolve(data);
      }, 1000);
    }),
};
