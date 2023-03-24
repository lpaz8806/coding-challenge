import {useLocation} from "react-router-dom";

const getAddressTitle = () => {
  const {pathname} = useLocation();
  return pathname.split('/').pop();
};

export default getAddressTitle;