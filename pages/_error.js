/**
 * @import next apis
 */
import { useRouter } from "next/router";

function Error({ statusCode }) {
  /**
   * @param statusCode is a initial server prop
   */

  /**
   * useRouter declarations
   */
  const router = useRouter();
  const onError = () => {
    router.push("/");
  };

  return (
    <div className="px-8 py-16 flex-col justify-center items-center text-center space-y-4">
      <h3 className="font-bold">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : `An error occured on client`}
      </h3>
      {statusCode === 404 && (
        <p>
          It is likely that the page you requested is not defined in the server.
        </p>
      )}
      <button className="px-8 py-2 rounded-lg bg-themeRed text-themeWhite transition-all hover hover:bg-red-700" onClick={() => onError()}>Return Home</button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode,
  };
};

export default Error;
