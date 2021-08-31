import React, { useEffect, useState } from "react";
import moment from "moment";
import usePagination from "./Pagination";
import { Pagination } from "@material-ui/lab";
import { ImHome } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import {
  FaBusAlt,
  FaShoppingCart,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaTableTennis,
} from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { GiBank } from "react-icons/gi";
import { AiFillGift } from "react-icons/ai";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const operationImage = (operation) => {
  if (operation === "income") {
    return <HiArrowCircleUp className="color_incomes" />;
  } else {
    return <HiArrowCircleDown className="color_expenses" />;
  }
};

const truncate = (str, n) =>
  str?.length > n ? str.substring(0, n - 1) + "..." : str; //funcion para recortar parrafos y dejar los ...

const categoryImage = (category) => {
  switch (category) {
    case "home":
      return <ImHome />;
    case "health":
      return <FaHeartbeat />;
    case "food":
      return <IoFastFood />;
    case "transport":
      return <FaBusAlt />;
    case "pet":
      return <MdPets />;
    case "shopping":
      return <FaShoppingCart />;
    case "bank":
      return <GiBank />;
    case "cash":
      return <IoMdCash />;
    case "education":
      return <FaGraduationCap />;
    case "vacation":
      return <FaUmbrellaBeach />;
    case "leisure":
      return <FaTableTennis />;
    case "other":
      return <AiFillGift />;
    default:
      console.log(category);
  }
};

const operationType = {
  1: "income",
  2: "expense",
};
const category = {
  1: "home",
  2: "health",
  3: "food",
  4: "transport",
  5: "pet",
  6: "shopping",
  7: "bank",
  8: "cash",
  9: "education",
  10: "vacation",
  11: "leisure",
  12: "other",
};

function Row({ data }) {
  const [media, setMedia] = useState(false);
  const viewport = window.matchMedia("(max-width: 400px)");

  let [page, setPage] = useState(1);
  const per_page = 8;

  const count = Math.ceil(data?.length / per_page);
  const _DATA = usePagination(data, per_page);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handlerMedia = (e) => {
    if (e.matches) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  };

  if (viewport.matches && !media) {
    setMedia(true);
  }

  useEffect(() => {
    viewport.addEventListener("change", handlerMedia);

    return () => {
      viewport.removeEventListener("change", handlerMedia);
    };
  }, [viewport]);

  return (
    <>
      {_DATA ? (
        _DATA.currentData()?.map((x, i) => (
          <div key={i} className="row">
            <div>{operationImage(x.operation)}</div>
            <div>{categoryImage(x.category)}</div>
            <div className="row_text">
              <p className="margin_rigth">{x.amount}$</p>
              <p>{moment(x.date).format("L")}</p>
              <p>{media ? truncate(x.concept, 12) : x.concept}</p>
            </div>
            <button className="button_banish">
              <BiEditAlt />
            </button>
            <button className="button_banish">
              <BiTrash />
            </button>
          </div>
        ))
      ) : (
        <p> no row</p>
      )}
      <div className="paginationComponent">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Row;
