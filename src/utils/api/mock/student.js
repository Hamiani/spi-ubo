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
            groupe_Anglais: 0
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
            groupe_Anglais: 0
          });
        }
        resolve(data);
      }, 1000);
    }),

  getOne: (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          no_Etudiant: "1",
          code_Formation: "M2DOSI",
          annee_Universitaire: "2014-2015",
          nom: "Alves",
          prenom: "Daniel",
          sexe: "F",
          date_Naissance: "04/11/1996",
          lieu_Naissance: "Brasil",
          nationalite: "Brasilien",
          telephone: "+33123456789",
          mobile: "+33123456789",
          email: "dani@gmail.com",
          email_Ubo: "dani@univ-brest.fr",
          adresse: "2,rue des archives",
          code_Postal: "78",
          ville: "Brasilia",
          pays_Origine: "FR",
          universite_Origine: "Univ sao paulo",
          groupe_Tp: 0,
          groupe_Anglais: 0
        });
      }, 1000);
    }),

  create: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        data = {
          ...data,
          code: "OK"
        };
        resolve(data);
      }, 1000);
    }),
  update: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        data = {
          ...data,
          code: "OK"
        };
        resolve(data);
      }, 1000);
    }),
  remove: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ code: "ok" });
      }, 1000);
    })
};
