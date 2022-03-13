import React from "react";

import { Empty } from "antd";
import { ImFileEmpty } from "react-icons/im";

const EmptyCard = ({ description }) => (
  <Empty
    image={<ImFileEmpty size={50} />}
    description={<h1>{description}</h1>}
  />
);

EmptyCard.defaultProps = {
  description: "Aucune donnée trouvée",
};

export default EmptyCard;
