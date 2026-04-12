import { getYear } from "../utilities/getDates";

const Copyright = ({ copyright }) => (

  <div className="copyright-date">
    &copy; {copyright} {getYear()} Nana Tan
  </div>
  
);

export default Copyright;