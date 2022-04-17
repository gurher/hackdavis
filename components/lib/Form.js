const Form = ({ formStructure, ariaLabel, className, children }) => {
  /**
   * @param formStructure is object that can have keys [method(string), action(string), onSubmit(function(e))]
   * @param ariaLabel is a aria accessability role(string)
   * @param className is className(string)
   * @param children is children element(JSX.Element)
   */
  return (
    <form
      role="form"
      aria-label={ariaLabel}
      className={className}
      onSubmit={(e) => formStructure.onSubmit(e)}
      method={formStructure.method ? formStructure.method : ""}
      action={formStructure.action ? formStructure.action : ""}
    >
      {children}
    </form>
  );
};

export default Form;
