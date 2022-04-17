const ExternalNav = ({ navArrayOfObjects, navClassName, linkClassName }) => {
  /**
   * @param navArrayOfObjects is an array of objects (each object has key [href(string), text(string)])
   * @param navClassName is a className(string) to nav container
   * @param linkClassName is a className(string) to each link element
   */
  return (
    <nav role="navigation" className={navClassName}>
      {navArrayOfObjects.map((eachObject, index) => (
        <a
          role="link"
          key={index}
          href={eachObject.href}
          className={linkClassName}
        >
          {eachObject.text}
        </a>
      ))}
    </nav>
  );
};

export default ExternalNav;
