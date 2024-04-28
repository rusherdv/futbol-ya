import { useState, useEffect } from "react";
import data from "../db.json";

function App() {
  const [lugares, setLugares] = useState([]);
  const [isMobile, setisMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );

  useEffect(() => {
    console.log(Object.entries(data.lugares)[0]);
    setLugares(Object.entries(data.lugares));
  }, []);
  return (
    <div className="bg-[#111] w-full sm:h-screen h-full flex flex-col items-center justify-start sm:justify-center pb-4 sm:pb-0">
      <h1 className="text-white font-[inter] font-bold text-4xl mb-2 sm:mt-0 mt-4">
        FutbolYa
      </h1>
      {lugares.map((l, index) => (
        <div className="w-11/12 mt-4 text-white font-[inter] sm:w-9/12 pb-4 sm:pb-0 xl:w-6/12 2xl:w-[600px] sm:rounded-full sm:h-[50px] h-fit border-2 border-[#333] rounded-lg flex sm:flex-row flex-col items-center justify-between sm:pl-4 sm:pr-1">
          <p
            className="text-xl mt-2 sm:text-base sm:mt-0 sm:w-[25%] truncate"
            title={l[1].name}
          >
            {l[1].name}
          </p>
          <p
            className="sm:mb-0 sm:mt-0 mt-1 mb-2 text-sm sm:text-base sm:w-[35%] truncate"
            title={l[1].direccion}
          >
            {l[1].direccion}
          </p>
          <div className="flex items-center w-full flex-col sm:flex-row sm:w-fit">
            <a
              href={l[1].maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-11/12 sm:w-10 rounded-lg sm:rounded-full h-10 items-center justify-center border-2 sm:ml-2 border-[#db9d11]/30 hover:bg-[#db9d11]/10 hover:cursor-pointer"
            >
              <p className="text-xs mr-2 sm:hidden">Google Maps</p>
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#db9d11"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </a>
            <a
              href={`https://wa.me/${l[1].wpp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11/12 sm:w-10 sm:ml-2 mt-2 sm:mt-0 rounded-lg sm:rounded-full flex h-10 items-center justify-center border-2 border-[#db9d11]/30 hover:bg-[#db9d11]/10 hover:cursor-pointer"
            >
              <p className="text-xs mr-2 sm:hidden">Whatsapp</p>
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#db9d11"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </a>
            <a
              href={`tel:${l[1].phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isMobile ? "" : "hidden"
              } w-11/12 sm:w-10 sm:ml-2 mt-2 sm:mt-0 rounded-lg sm:rounded-full flex h-10 items-center justify-center border-2 border-[#db9d11]/30 hover:bg-[#db9d11]/10 hover:cursor-pointerr`}
            >
              <p className="text-xs mr-2 sm:hidden">Llamar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 512 512"
              >
                <path
                  fill="#db9d11"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
