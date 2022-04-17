/**
 * @import next apis
 */
import Link from "next/link";

const InternalNav = ({ navArrayOfObjects, navClassName, linkClassName }) => {
  /**
   * @param navArrayOfObjects is an array of objects (each object has key [href(string), text(string)])
   * @param navClassName is a className(string) to nav container
   * @param linkClassName is a className(string) to each link element
   */
  return (
    <nav role="navigation" className={navClassName}>
      {navArrayOfObjects.map((eachObject, index) => (
        <Link key={index} href={eachObject.href}>
          <a role="link" className={linkClassName}>
            {eachObject.text}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default InternalNav;
