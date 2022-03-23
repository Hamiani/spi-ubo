export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 20; i++) {
          data.push({
            code_Formation: "M2DOSI",
            code_Ue: `Unité ${i + 1}`,
            no_Enseignant: 0,
            designation: `Désignation ${i + 1}`,
            semestre: "semestre 1",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            nbh_Cm: 10,
            nbh_Td: 22,
            nbh_Tp: 22,
            nbh_Etd: 45,
          });
        }
        resolve(data);
      }, 1000);
    }),
  getOne: (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code_Formation: "M2DOSI",
          code_Ue: `Unité 1`,
          no_Enseignant: 0,
          designation: `Désignation 1`,
          semestre: "semestre 1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          nbh_Cm: 10,
          nbh_Td: 22,
          nbh_Tp: 22,
          nbh_Etd: 45,
        });
      }, 1000);
    }),
};
