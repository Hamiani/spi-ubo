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
            nom: "PHILIPPE",
            prenom: "Saliou",
            email_Ubo: "philippe.saliou@univ-brest.fr",
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
};
