export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 20; i++) {
          data.push({
            id: {
              code_Formation: `M2DOSI ${i + 1}`,
              code_Ue: `Unité ${i + 1}`,
            },
            enseignant: { nom: "PHILIPPE", prenom: "Saliou" },
            designation: "Désignation",
            semestre: "semseste 1",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            nbh_Cm: 20,
            nbh_Td: 20,
            nbh_Tp: 20,
            nbh_Etd: 20,
          });
        }
        resolve(data);
      }, 1000);
    }),
  getOne: (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: {
            code_Formation: "M2DOSI",
            code_Ue: "Unité 1",
          },
          enseignant: {
            no_Enseignant: 1,
            nom: "SALIOU",
            prenom: "Philippe",
            sexe: "H",
            type: {
              abreviation: "MCF",
              signification: "Maître de Conférences",
            },
            pays: "FR",
            ville: "LE DRENNEC",
            adresse: "6 rue de l'eglise",
            email_Perso: "philippe.saliou@gmail.com",
            email_Ubo: "philippe.saliou@univ-brest.fr",
            mobile: "+33600000100",
            telephone: "+33298016974",
            code_Postal: "29860",
            nbh_Cm: null,
            nbh_Td: null,
            nbh_Tp: null,
            nbh_Etd: null,
          },
          designation: "Désignation",
          semestre: "string",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su",
          nbh_Cm: 20,
          nbh_Td: 20,
          nbh_Tp: 20,
          nbh_Etd: 20,
        });
      }, 1000);
    }),
  update: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 500);
    }),
  calculateEtd: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ nbh_Etd: Math.floor(Math.random() * 1000) + 1 });
      }, 500);
    }),
};
